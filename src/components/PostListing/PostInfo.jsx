import React from "react";
import PostDate from "../Post/PostDate";
import { Link } from "gatsby";

const PostInfo = ({ post }) => (
  <div className="mt-4">
    <Link to={post.slug} key={post.title} >
      <h2 className="text-2xl font-bold mb-2 text-sky-500 hover:text-sky-700">
        <small>{post.title}</small>
      </h2>
    </Link>
    <div className="mb-4">{post.excerpt}</div>
    <small>
      <PostDate date={post.date} />
    </small>
  </div>
);

export default PostInfo;