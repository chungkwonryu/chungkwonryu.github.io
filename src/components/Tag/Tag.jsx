import React from "react";
import { Link } from "gatsby";
import { getTagPath } from "../../utils/helpers";

const Tag = ({ content }) => (
  <Link
    key={content}
    to={getTagPath(content)}
  >
    <span className="text-sky-500 hover:text-sky-700 text-center mr-2 mb-2 border border-gray-300 inline-block px-3 py-1">
      {content}
    </span>
  </Link>
);

export default Tag;