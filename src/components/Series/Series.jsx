import React from "react";
import { Link } from "gatsby";
import { slugify } from "../../utils/helpers";

const Series = ({ series }) => {
  const { title, description } = series;
  const slug = slugify(title);
  return (
    <article className="flex flex-col py-3 border-b-2 border-gray-200">
      <div className="mt-4">
        <Link to={slug} key={title} >
          <h2 className="text-3xl font-bold mb-2 text-sky-500 hover:text-sky-700">
            <small>{title}</small>
          </h2>
        </Link>
        <div className="mb-4">{description}</div>
      </div>
    </article>
  )
};

export default Series;