import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";

const Series = ({ series }) => {
  const defaultImage = useStaticQuery(graphql`
    query DefaultImageQuery{
      file(relativePath: { eq: "images/basic-cover-660x400.png" }) {
        childImageSharp {
          gatsbyImageData(width: 660, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  const imagePath = series.cover ? series.cover : defaultImage.file;
  return (
    <article
      key={series.title}
      className="flex-col p-6 border-b-2"
    >
      <div className="max-w-full">
        <Link
          to={series.slug}
          key={series.title}
        >
          <GatsbyImage
            image={getImage(imagePath)}
            alt="series thumbnail image"
          />
        </Link>
      </div>
      <div>
        <span>{series.title}</span>
        <small>{series.description}</small>
      </div>
    </article>
  )
};

export default Series;