import React from "react";
import PostInfo from "./PostInfo";

const Article = ({ post }) => {
  return (
    <article
      className="flex flex-col py-3 border-b-2 border-gray-200"
    >
      <PostInfo post={post} />
    </article>
  );
};

export default Article;