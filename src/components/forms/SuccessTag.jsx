
const SuccessTag = ({ successDisplay, success, message }) => {
  return (
    <span className={
      `px-4 ${successDisplay} py-1 capitalize shadow-2xl text-white pl-2 ${success ? "bg-green-500 " : "bg-red-500 "}`}>{success ? "Your form has been success successfully!" : `your form has not been success successfully! error: ${message}`}</span>
  )
}

export default SuccessTag
