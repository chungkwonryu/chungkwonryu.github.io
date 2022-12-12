import React from "react";
import PostDate from "../Post/PostDate";
import { Link } from "gatsby";

const PostInfo = ({ post }) => {
  const { slug, title, excerpt, date } = post;
  return (
    <div className="mt-4">
      <Link to={slug} key={title} >
        <h2 className="text-3xl font-bold mb-2 text-sky-500 hover:text-sky-700">
          <small>{title}</small>
        </h2>
      </Link>
      <div className="mb-4">
        {excerpt}
      </div>
      <small>
        <PostDate date={date} />
      </small>
    </div>
  )
};

export default PostInfo;