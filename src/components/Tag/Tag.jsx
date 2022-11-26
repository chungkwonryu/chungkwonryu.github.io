import React from "react";
import { Link } from "gatsby";
import { getTagPath } from "../../utils/helpers";

const Tag = ({ content }) => (
  <Link
    key={content}
    to={getTagPath(content)}
  >
    <span className="mr-4 mb-4 border border-stone-600 inline-block pl-6 pr-3">
      {content}
    </span>
  </Link>
);

export default Tag;