const SuccessTag = ({ successDisplay, success, message }) => {
  return (
    <span
      className={`px-4 ${successDisplay} py-1 capitalize shadow-2xl text-white pl-2 ${
        success ? "bg-green-500 " : "bg-red-500 "
      }`}
    >
      {success ? `success: ${message}` : `error: ${message}`}
    </span>
  );
};

export default SuccessTag;
