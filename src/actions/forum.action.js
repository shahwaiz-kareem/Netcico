"use server";

import { connectToDb } from "@/db/db";
import { Forum } from "@/models/forum.model";
import mongoose from "mongoose";

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
export const searchQuestion = async (pageNumber, pageLimit, query) => {
  await connectToDb();

  try {
    const skipAmount = (pageNumber - 1) * pageLimit;

    const data = await Forum.find({
      text: { $regex: query, $options: "i" },
      parentId: { $in: [null, undefined] },
    })
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
export const getQuestionsByCategory = async (category) => {
  await connectToDb();

  try {
    const data = await Forum.find({ category }).lean();
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

    const data = await Forum.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(_id) } },
      { $unwind: "$answers" },
      {
        $lookup: {
          from: "forums",
          localField: "answers",
          foreignField: "_id",
          as: "answers",
        },
      },
      { $unwind: "$answers" },
      { $sort: { "answers.upvotes": -1 } },
      { $skip: skipAmount },
      { $limit: pageLimit },
      {
        $group: {
          _id: "$_id",
          text: { $first: "$text" },
          answers: { $push: "$answers" },
        },
      },
    ]);
    const doc = await Forum.findOne({ _id }).lean();

    data.forEach((doc) => {
      doc.answers.forEach((answer) => {
        answer.votesCount = answer.upvotes.length;
      });
    });

    return JSON.parse(
      JSON.stringify({
        ...data[0],
        ansCount: doc.answers.length,
        success: true,
        message: "Answers fetched successfully!",
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
