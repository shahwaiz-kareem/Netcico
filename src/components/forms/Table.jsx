"use client";
import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
const initialItem = {
  heading: "",
  content: "",
};
const Table = ({ tableArr, setTableArr }) => {
  const [tableItem, setTableItem] = useState(initialItem);
  const [updateState, setUpdateState] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);

  const addNewItem = (e) => {
    e.preventDefault();
    const { heading, content } = tableItem;
    if (heading.length > 2 && content.length > 2) {
      if (updateState) {
        let newArr = tableArr;
        newArr[updateIndex] = tableItem;
        setTableArr(newArr);
        setTableItem(initialItem);
        setUpdateState(false);
      } else {
        setTableArr((prev) => [...prev, tableItem]);
        setTableItem(initialItem);
      }
    }
  };

  const handleChange = (e) => {
    setTableItem({
      ...tableItem,
      [e.target.name]: e.target.value,
    });
    console.log(tableArr);
    if (updateState) {
      let newArr = tableArr;
      newArr[updateIndex] = {
        ...tableArr[updateIndex],
        [e.target.name]: e.target.value,
      };
      setTableArr(newArr);
      console.log(tableArr);
    }
  };
  const updateItem = (index) => {
    setUpdateState(true);
    setTableItem(tableArr[index]);
    setUpdateIndex(index);
  };
  const deleteItem = (i) => {
    setTableArr((prev) => prev.filter((item, index) => i !== index));
  };
  return (
    <div className="flex items-center mt-4 justify-center w-full h-full ">
      <div className="flex items-center gap-4 w-full h-full flex-col ">
        <form
          onSubmit={addNewItem}
          className="flex items-center text-gray-800 gap-4 justify-between"
        >
          <input
            className="p-2 outline-none rounded-lg"
            placeholder="Heading"
            type="text"
            value={tableItem.heading}
            name="heading"
            min={2}
            onChange={handleChange}
          />
          <input
            className="p-2 outline-none rounded-lg"
            placeholder="Content"
            value={tableItem.content}
            name="content"
            min={2}
            onChange={handleChange}
            type="text"
          />
          <button
            type="submit"
            className={`bg-${
              updateState ? "green" : "blue"
            }-500  outline-none rounded-lg p-2 text-xl text-white`}
          >
            {updateState ? (
              <FaArrowRight className="font-extralight" />
            ) : (
              <AiOutlinePlus />
            )}
          </button>
        </form>
        {tableArr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center ml-12  text-white gap-4 justify-between"
            >
              <input
                className="p-2 outline-none rounded-lg bg-zinc-900"
                placeholder="Heading"
                value={item.heading}
                disabled={!updateState}
                type="text"
              />
              <input
                className="p-2 outline-none rounded-lg bg-zinc-900"
                placeholder="Content"
                value={item.content}
                disabled={!updateState}
                type="text"
              />
              <button
                onClick={() => updateItem(index)}
                disabled={updateState}
                className="bg-green-500 disabled:bg-gray-500 rounded-lg outline-none p-2 text-xl text-white"
              >
                <GrUpdate />
              </button>

              <button
                onClick={() => deleteItem(index)}
                disabled={updateState}
                className="bg-red-500 disabled:bg-gray-500 rounded-lg outline-none p-2 text-xl text-white"
              >
                <AiOutlineDelete />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
