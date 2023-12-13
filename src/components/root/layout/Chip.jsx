const Chip = ({ text, active }) => {
  return (
    <>
      <span className={`rounded-lg text-md font-normal ${active ? "bg-black text-white" : "bg-gray-100 text-gray-800"}  p-1 ${text.length <= 3 ? "px-3" : ""}  hover:bg-gray-200 `}>{text}</span>
    </>
  )
}

export default Chip
