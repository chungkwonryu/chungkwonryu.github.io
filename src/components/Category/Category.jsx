import React from "react";
import { Link } from "gatsby";
import { getCategoryPath } from "../../utils/helpers";

const Category = ({ content }) => (
  <Link
    key={content}
    to={getCategoryPath(content)}
  >
    <span className="text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1">
      {content}
    </span>
  </Link>
);

export default Category;