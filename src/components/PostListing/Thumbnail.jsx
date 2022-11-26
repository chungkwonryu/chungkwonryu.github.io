import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Thumbnail = ({ post }) => {
  const thumbnail = post.cover ? (
    <div className="max-w-full w-[660px]">
      <Link
        to={post.slug}
        key={post.title}
      >
        <GatsbyImage
          image={getImage(post.cover)}
          alt="thumbnail image"
        />
      </Link>
    </div>
  ) : null;

  return thumbnail;
};

export default Thumbnail;