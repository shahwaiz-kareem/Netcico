"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { bioSchema } from "../../lib/validation/BioSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemeContext } from "@/context/ThemeContext";
import Editor from "../editor/Editor";
import ThumbnailForm from "./ThumbnailForm";
import { updateBio } from "@/actions/bio.action";
import { Create_JS_TOOLS } from "@/components/editor/tools";
import Preview from "./Preview";
import NavigationBtns from "./NavigationBtns";
import { uploadGallery, uploadThumbnail } from "@/actions/upload.action";
import { getCategories } from "@/actions/category.action";
import Table from "./Table";
import Gallery from "./Gallery";
const steps = [
  {
    step: 0,
    name: "Basic Information",
  },
  {
    step: 1,
    name: "Post Content",
  },
  {
    step: 2,
    name: "Gallery",
  },
  {
    step: 3,
    name: "Table",
  },
  {
    step: 4,
    name: "Publish",
  },
];
const initialTableItems = [
  {
    heading: "name",
    content: "*",
  },
  {
    heading: "age",
    content: "*",
  },
  {
    heading: "profession",
    content: "*",
  },
  {
    heading: "net worth",
    content: "*",
  },
  {
    heading: "gender",
    content: "*",
  },
  {
    heading: "BF/GF",
    content: "*",
  },
  {
    heading: "father",
    content: "*",
  },
  {
    heading: "mother",
    content: "*",
  },
  {
    heading: "married status",
    content: "*",
  },
  {
    heading: "hobbies",
    content: "*",
  },
];
const BioForm = ({
  isUpdate,
  updateName,
  updateSlug,
  updateCategory,
  updateGallery,
  updateAuthor,
  updateTable,
  updateMetaTitle,
  updateMetaDescription,
  galleryUrls,
  updateTags,
  updateThumbnail,
  itemId,
  updateAltText,
  updateContent,
}) => {
  const context = useContext(ThemeContext);
  const {
    width,
    data,
    setData,
    thumbnailUrl,
    thumbnailFormData,
    setThumbnailUrl,
    setSubmitSuccess,
    submitSuccess,
    updatedThumb,
    setThumbnailFormData,
  } = context;
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [successDisplay, setSuccessDisplay] = useState("hidden");
  const [draftId, setDraftId] = useState("");
  const [updatedAsDraft, setUpdatedAsDraft] = useState(false);
  const [intervalDelay, setIntervalDelay] = useState(null);
  const { success, message } = submitSuccess;
  const [categories, setCategores] = useState({});
  const [galleryData, setGalleryData] = useState(new FormData());
  const [captionArr, setCaptionArr] = useState([]);
  const [tableArr, setTableArr] = useState(
    isUpdate ? updateTable : initialTableItems
  );
  const pathname = usePathname();
  const onPage = pathname.split("/dashboard/").join(" ").split("/")[0].trim();

  useEffect(() => {
    if (isUpdate) {
      setData(JSON.parse(updateContent));
      setThumbnailUrl(updateThumbnail);
    } else {
      setThumbnailUrl("");
    }
    const fetchCategories = async () => {
      const categories = await getCategories(onPage);
      setCategores(categories);
    };
    fetchCategories();
    setThumbnailFormData(new FormData());
    setSubmitSuccess({
      success: null,
      message: "",
    });
  }, []);

  const { register, getValues, setValue, formState } = useForm({
    defaultValues: {
      name: updateName || "",
      slug: updateSlug || "",
      author: updateAuthor || "Shahwaiz Karim",
      category: updateCategory || "",
      metaTitle: updateMetaTitle || "",
      metaDescription: updateMetaDescription || "",
      tags: updateTags || "",
      thumbnail: updateThumbnail || "",
      altText: updateAltText || "",
    },
    mode: "onBlur",
    resolver: zodResolver(bioSchema),
  });

  const {
    name,
    slug,
    author,
    altText,
    category,
    metaDescription,
    metaTitle,
    tags,
  } = getValues();
  const uploadThumbnailToServer = async () => {
    const responce = await uploadThumbnail(thumbnailFormData, onPage);
    const { success, thumbnailUrl } = responce;
    if (success) {
      if (isUpdate && updatedThumb) {
        try {
          await fetch("/api/upload/image/delete", {
            method: "Delete",
            body: JSON.stringify({
              url: updateThumbnail,
            }),
          });
        } catch (error) {
          console.log(
            "Your thumbnail was uploaded but previous one not deleted " + error
          );
        }
      }
    }
    return { success, thumbnailUrl };
  };

  const saveDataAsDraft = async () => {
    if (!isUpdate && !updatedAsDraft) {
      try {
        await uploadThumbnail(thumbnailFormData, onPage).then(async (res) => {
          setThumbnailUrl(res.thumbnailUrl);
          const randomId = `${Math.random()
            .toString(32)
            .substr(2, 9)}${Date.now()}`;
          setDraftId(randomId.toString());
          await updateBio({
            name,
            slug,
            itemId: randomId,
            author,
            content: JSON.stringify(data),
            altText,
            category,
            metaDescription,
            metaTitle,
            tags,
            thumbnail: res.thumbnailUrl,
          });
          setUpdatedAsDraft(true);
          return randomId;
        });
      } catch (error) {
        await fetch("/api/upload/image/delete", {
          method: "Delete",
          body: JSON.stringify({
            url: thumbnailUrl,
          }),
        });
      }
    }
  };

  const slugGenerator = (name) => {
    const slug = structuredClone(name)
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");
    setValue("slug", slug);
  };
  const prevStep = () => {
    if (currentStep.step == 0 || success) return;
    setCurrentStep(steps[currentStep.step - 1]);
  };

  const nextStep = async () => {
    if (currentStep.step === steps.length - 1) return;
    if (isUpdate && formState.isValid)
      setCurrentStep(steps[currentStep.step + 1]);
    if (formState.isValid && !success && thumbnailUrl !== "") {
      setCurrentStep(steps[currentStep.step + 1]);
    }
  };

  const useInterval = (callback, delay) => {
    //
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useEffect(() => {
    if (currentStep.step === 1) {
      !updatedAsDraft && (async () => await saveDataAsDraft())();
      setIntervalDelay(20000);
    } else {
      setIntervalDelay(null);
    }
  }, [currentStep.step]);

  useInterval(async () => {
    const sendData = {
      itemId: isUpdate ? itemId : draftId,
      content: JSON.stringify(data),
    };
    await updateBio(sendData);
  }, intervalDelay);

  const hideTag = () => {
    setTimeout(() => {
      setSuccessDisplay("hidden");
    }, 3000);
  };

  const SaveToDatabase = async (active) => {
    await uploadThumbnailToServer()
      .then(async (res) => {
        const result = await updateBio({
          name,
          slug,
          itemId: isUpdate ? itemId : draftId,
          isActive: active,
          author,
          table: tableArr,
          altText,
          category,
          content: JSON.stringify(data),
          metaDescription,
          metaTitle,
          tags,
          thumbnail: res.thumbnailUrl,
        });
        await uploadGallery(
          isUpdate ? itemId : draftId,
          galleryData,
          captionArr,
          pathname
        );
        setSubmitSuccess({
          success: result.success,
          message: result.data !== null && result.data,
        });
        setSuccessDisplay("flex");
        hideTag();
        setData("");
      })
      .catch((error) => {
        setSubmitSuccess({
          success: false,
          message: `Thumbnail not uploaded! error ${error}`,
        });
      });
  };

  return (
    <section className="w-full h-full py-4  rounded-lg">
      <div
        className={
          "px-6 flex flex-col  h-full  items-center   mx-auto  gap-2 " +
          `${currentStep.step === 1 ? "w-full" : width}`
        }
      >
        <h1
          className={
            "text-2xl w-full font-bold " +
            `${currentStep.step === 1 ? "text-center mx-auto" : ""}`
          }
        >
          {isUpdate ? "Update Biography" : "Create a new Biography"} (
          {currentStep.name})
        </h1>

        {currentStep.step === 0 && (
          <section className="w-full flex h-full items-center justify-between">
            <div className="flex relative flex-col gap-8">
              <input
                type="text"
                onInput={(e) => slugGenerator(e.target.value)}
                placeholder="Name"
                className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
                {...register("name")}
              />
              <input
                type="text"
                placeholder="Slug"
                className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
                {...register("slug")}
              />
              <input
                type="text"
                placeholder="Author"
                className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
                {...register("author")}
              />

              <select
                {...register("category")}
                aria-placeholder="Category"
                className=" px-2 flex  py-3 rounded-lg bg-zinc-900 text-white outline-none gap-2"
              >
                {isUpdate && (
                  <option className="capitalize" value={updateCategory}>
                    {updateCategory}
                  </option>
                )}

                {Object.keys(categories).map((e) => {
                  if (isUpdate && categories[e].category === updateCategory)
                    return;
                  return (
                    <option
                      key={categories[e].category}
                      className="capitalize"
                      value={categories[e].category}
                    >
                      {categories[e].category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Title(SEO)"
                className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
                {...register("metaTitle")}
              />
              <textarea
                placeholder="description(SEO)"
                className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
                {...register("metaDescription")}
              />
              <input
                type="text"
                placeholder="tags"
                className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
                {...register("tags")}
              />
            </div>
            <div className="flex flex-col gap-8">
              <ThumbnailForm
                isUpdate={isUpdate}
                updateThumbnailUrl={updateThumbnail}
              />
              <input
                type="text"
                placeholder="Alternative Text"
                className="px-2 py-3 rounded-lg bg-zinc-900 outline-none"
                {...register("altText")}
              />
            </div>
          </section>
        )}
        {currentStep.step === 1 && (
          <Editor key={"editorjs"} tools={Create_JS_TOOLS} />
        )}
        {currentStep.step === 2 && (
          <Gallery
            galleryData={galleryData}
            setGalleryData={setGalleryData}
            isUpdate={isUpdate}
            updateGallery={updateGallery}
            itemId={itemId}
            pathname={pathname}
            galleryUrls={galleryUrls}
            captionArr={captionArr}
            setCaptionArr={setCaptionArr}
          />
        )}
        {currentStep.step === 3 && (
          <Table tableArr={tableArr} setTableArr={setTableArr} />
        )}
        {currentStep.step === 4 && (
          <Preview
            NameOrTitle={name}
            altText={altText}
            message={message}
            SaveToDatabase={SaveToDatabase}
            success={success}
            author={author}
            slug={slug}
            category={category}
            thumbnailUrl={thumbnailUrl}
            successDisplay={successDisplay}
          />
        )}
        <NavigationBtns prevStepFunc={prevStep} nextStepFunc={nextStep} />
      </div>
    </section>
  );
};

export default BioForm;
