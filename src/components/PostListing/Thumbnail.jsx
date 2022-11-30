import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";

const Thumbnail = ({ post }) => {
  const baseImage = useStaticQuery(graphql`
    query BaseImageQuery{
      file(relativePath: { eq: "images/basic-cover-660x400.png" }) {
        childImageSharp {
          gatsbyImageData(width: 660, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  const imagePath = post.cover ? post.cover : baseImage.file;
  const thumbnail = (
    <div className="max-w-full w-[660px]">
      <Link
        to={post.slug}
        key={post.title}
      >
        <GatsbyImage
          image={getImage(imagePath)}
          alt="thumbnail image"
        />
      </Link>
    </div>
  );

  return thumbnail;
};

export default Thumbnail;