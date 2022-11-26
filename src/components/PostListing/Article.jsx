import React from "react";
import Thumbnail from "./Thumbnail";
import PostInfo from "./PostInfo";

const Article = ({ post, hasThumbnail }) => (
  <article
    key={post.title}
    className="flex flex-col py-12 border-b-2 border-slate-600"
  >
    {hasThumbnail && <Thumbnail post={post} />}
    <PostInfo post={post} />
  </article>
);

export default Article;