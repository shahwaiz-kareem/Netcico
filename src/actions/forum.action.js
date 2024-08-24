"use server";

import { connectToDb } from "@/db/db";
import { Forum } from "@/models/forum.model";

export const createQuestion = async ({ name, text, category }) => {
  try {
    await connectToDb();
    const data = await Forum.create({
      name,
      text,
      category,
    });

    return JSON.parse(
      JSON.stringify({
        success: true,
        data,
      })
    );
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};

export const createAnswer = async ({ parentId, name, text }) => {
  await connectToDb();

  try {
    const data = await Forum.create({ parentId, name, text });
    await Forum.findOneAndUpdate(
      { _id: parentId },
      { $push: { answers: data._id } }
    );

    return JSON.parse(
      JSON.stringify({
        success: true,
        message: "Your answer has been posted sucessfully!",
        ...data,
      })
    );
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};

export const getParentQuestions = async (pageNumber, pageLimit) => {
  await connectToDb();

  try {
    const skipAmount = (pageNumber - 1) * pageLimit;

    const data = await Forum.find({ parentId: { $in: [null, undefined] } })
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(pageLimit)
      .lean();
    const newData = data.map((doc) => {
      doc.ansCount = doc?.answers?.length;
      return doc;
    });

    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};
export const getAnswers = async (_id, pageNumber, pageLimit) => {
  try {
    await connectToDb();
    const skipAmount = (pageNumber - 1) * pageLimit;

    const data = await Forum.findOne({ _id }, { text: 1, answers: 1, _id: 0 })
      .populate({
        path: "answers",
        sort: { upvotes: "desc" },
        skip: skipAmount,
        limit: pageLimit,
      })
      .lean();

    data.answers.forEach((doc) => {
      doc.votesCount = doc.upvotes.length;
    });

    return JSON.parse(
      JSON.stringify({
        ...data,
        ansCount: data.answers.length,
        success: true,
        message: "Your answer has been posted sucessfully!",
      })
    );
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};

export const deleteQuestionOrAnswer = async (_id) => {
  try {
    await connectToDb();
    const data = Forum.findByIdAndDelete(_id);
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};
export const updateQuestion = async ({ text }) => {
  try {
    await connectToDb();
    const data = Forum.findByIdAndUpdate(_id, { $set: { text } });
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};

export const checkUpvoteById = async ({ _id, id }) => {
  try {
    await connectToDb();
    const result = await Forum.findOne({
      _id,
      upvotes: { $elemMatch: { $eq: id } },
    });
    const isExist = result !== null;
    return {
      success: true,
      isExist,
    };
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};
export const addOrRemoveUpvote = async ({ _id, userId }) => {
  try {
    await connectToDb();
    const result = await Forum.findOne({
      _id,
      upvotes: { $elemMatch: { $eq: userId } },
    });
    const isExist = result !== null;

    let action = "";
    if (isExist) {
      await Forum.findByIdAndUpdate(_id, { $pull: { upvotes: userId } });
      action = "removed";
    } else {
      await Forum.findByIdAndUpdate(_id, { $addToSet: { upvotes: userId } });
      action = "added";
    }
    return {
      success: true,
      action,
    };
  } catch (error) {
    console.log(error);
    throw new Error({ success: false, error: error.message });
  }
};
