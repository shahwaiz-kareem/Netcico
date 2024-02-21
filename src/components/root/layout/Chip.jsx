const Chip = ({ text, active }) => {
  return (
    <>
      <span
        className={`rounded-lg capitalize text-md font-normal ${
          active
            ? "bg-black text-white  "
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 "
        }  py-1 ${text.length <= 3 ? "px-3" : "px-2"}  `}
      >
        {text}
      </span>
    </>
  );
};

export default Chip;
