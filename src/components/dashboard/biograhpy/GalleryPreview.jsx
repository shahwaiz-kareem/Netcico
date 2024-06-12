import { AiFillDelete } from "react-icons/ai";
import { deleteImageFromGallery } from "@/actions/bio.action";

const GalleryPreview = ({
  isUpdate,
  galleryUrls,
  galleryData,
  isUpdateAndUploaded,
  setGalleryData,
  setCaptionArr,
  setGalleryUrlArr,
  itemId,
  pathname,
}) => {
  const deleteFromServerGallery = async (index) => {
    try {
      await deleteImageFromGallery(itemId, index, pathname);
      setGalleryUrlArr((prev) => prev.filter((e, i) => i !== index));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteFromClientGallery = async (index) => {
    try {
      const newFormData = galleryData;
      const files = newFormData.getAll("file");
      files.splice(index, 1);
      newFormData.delete("file");
      files.forEach((file) => {
        newFormData.append("file", file);
      });
      setGalleryData(newFormData);
      setCaptionArr((prev) => prev.filter((e, i) => i !== index));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isUpdate &&
        galleryUrls.map((e, index) => (
          <div key={index} className="h-[180px] w-[200px] relative">
            <img
              src={`${process.env.NEXT_PUBLIC_HOST}${e.url}`}
              alt={`Gallery Image ${index}`}
              className="h-full w-full rounded-xl"
            />
            <AiFillDelete
              onClick={() => deleteFromServerGallery(index)}
              className="cursor-pointer absolute text-3xl hover:text-red-500 hover:transition-transform shadow-lg top-0 right-0 mr-2 mt-1"
            />
          </div>
        ))}
      {!isUpdate &&
        galleryData.getAll(`file`).map((e, index) => (
          <div key={index} className="h-[180px] w-[200px] relative">
            <img
              src={URL.createObjectURL(e)}
              alt={`Gallery Image ${index}`}
              className="h-full w-full rounded-xl"
            />
            <AiFillDelete
              onClick={() => deleteFromClientGallery(index)}
              className="cursor-pointer absolute text-3xl hover:text-red-500 hover:transition-transform shadow-lg top-0 right-0 mr-2 mt-1"
            />
          </div>
        ))}

      {isUpdateAndUploaded &&
        galleryData.getAll("file").map((e, index) => (
          <div key={index} className="h-[180px] w-[200px] relative">
            <img
              src={URL.createObjectURL(e)}
              alt={`Gallery Image ${index}`}
              className="h-full w-full rounded-xl"
            />
            <AiFillDelete
              onClick={() => deleteFromClientGallery(index)}
              className=" cursor-pointer absolute text-3xl hover:text-red-500 hover:transition-transform shadow-lg top-0 right-0 mr-2 mt-1"
            />
          </div>
        ))}
    </>
  );
};

export default GalleryPreview;
