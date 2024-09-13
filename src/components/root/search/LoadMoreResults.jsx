"use client";

import { useState } from "react";

const LoadMoreResults = ({ getData }) => {
  const [page, setPage] = useState(2);
  const handleClick = async () => {
    await getData(page, 6);
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="py-1 px-4 rounded-lg ring-blue-500 bg-blue-500 text-white"
      >
        Show more
      </button>
    </>
  );
};

export default LoadMoreResults;
