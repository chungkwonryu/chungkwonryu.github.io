import React from "react";
import PostDate from "./PostDate";
import PostDivider from "./PostDivider";
import PostTags from "./PostTags";

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
      </div>
      <PostDivider />
      <div className="py-6" dangerouslySetInnerHTML={{ __html: postNode.html }} />
      <PostDivider />
      <div className="py-6">
        <small>
          <PostTags tags={post.tags} iconColor="#555" />
        </small>
      </div>
      <PostDivider />
    </div>
  );
};

export default Post;