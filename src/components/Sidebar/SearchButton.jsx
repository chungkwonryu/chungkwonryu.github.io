import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchButton = () => {
  return (
    <div className="pl-4 pr-0 py-0 float-left w-1/6">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <FontAwesomeIcon
          icon={["fas", "search"]}
          style={{ color: "#FFFFFF" }}
        />
      </button>
    </div>
  );
};

export default SearchButton;