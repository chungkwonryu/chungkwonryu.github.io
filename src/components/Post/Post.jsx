import React from "react";
import PostDate from "./PostDate";
import PostDivider from "./PostDivider";
import PostTags from "./PostTags";
import PostShare from "./PostShare";
import PostCategories from "./PostCategories";
import "../../../content/styles/code-highlight.scss";

const Post = ({ postNode, config, slug }) => {
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }

  return (
    <div>
      <div className="py-6">
        <PostDate date={post.date} />
        <PostShare postPath={slug} postNode={postNode} />
      </div>
      <PostDivider />
      <div className="py-6" dangerouslySetInnerHTML={{ __html: postNode.html }} />
      <PostDivider />
      <div className="py-6">
        <small>
          <PostCategories categories={post.categories} iconColor="#555" />
          <PostTags tags={post.tags} iconColor="#555" />
        </small>
      </div>
      <PostDivider />
    </div>
  );
};

export default Post;