import React from "react";
import PostDate from "./PostDate";
import PostDivider from "./PostDivider";
import PostShare from "./PostShare";
import PostCategories from "./PostCategories";
import Comment from "../Comment/Comment";

const Post = ({ postNode }) => {
  const { html, slug, excerpt } = postNode;
  const { title, date, categories } = postNode.frontmatter;

  return (
    <div>
      <div className="py-2">
        <PostDate date={date} />
        <PostShare slug={slug} title={title} excerpt={excerpt} />
      </div>
      <PostDivider />
      <article className="prose dark:prose-invert lg:prose-lg">
        <div className="py-6" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <PostDivider />
      <div className="py-6">
        <small>
          <PostCategories categories={categories} iconColor="#555" />
        </small>
      </div>
      <PostDivider />
      <Comment />
    </div>
  );
};

export default Post;