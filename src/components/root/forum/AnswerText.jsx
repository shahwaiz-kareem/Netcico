"use client";
import { useEffect, useRef } from "react";

const AnswerText = ({ answer, classProperty }) => {
  const ref = useRef();
  const btnRef = useRef();
  useEffect(() => {
    btnRef.current.className = "bg-none underline text-blue-500";
    ref.current.className = "hidden";
  }, []);

  const handleClick = () => {
    btnRef.current.className = "hidden";
    ref.current.className = "inline";
  };
  return (
    <span className={classProperty}>
      <button
        onClick={handleClick}
        ref={btnRef}
        className=" bg-none underline text-blue-500"
      >
        {" "}
        ...Read more
      </button>
      <span className="hidden" ref={ref}>
        {answer}
      </span>
    </span>
  );
};

export default AnswerText;
