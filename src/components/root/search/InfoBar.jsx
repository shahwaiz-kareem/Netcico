"use client";

const InfoBar = ({ searchType, setSearchType }) => {
  return (
    <div className="flex items-center justify-between ">
      <h3 className="text-xl font-normal">Results for {searchType || "..."}</h3>
      <div>
        <select
          className="py-2 px-4 rounded-lg "
          value={searchType}
          onChange={(e) => {
            setSearchType(e.target.value);
          }}
        >
          <option value="Biography">Biography</option>
          <option value="Blog">Blog</option>
          <option value="Question">Question</option>
        </select>
      </div>
    </div>
  );
};

export default InfoBar;
