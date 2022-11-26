import React from "react";
import { Link } from "gatsby";
import { getCategoryPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostCategories = ({
  categories,
  iconColor = "#444",
}) => {
  const categoryLink = (category) => (
    <Link
      to={getCategoryPath(category)}
      label={category}
    >
      <span className="uppercase text-sky-500 hover:text-sky-700">
        {category}
      </span>
    </Link>
  );

  return (
    <>
      {categories && (
        <div className="post-categories-container">
          <b>
            {config.postInCategories && <span>{config.postInCategories} </span>}

            {!config.postInCategories && (
              <>
                <FontAwesomeIcon
                  icon={["fas", "folder-open"]}
                  style={{ color: iconColor, width: "20px" }}
                />{" "}
              </>
            )}

            {categories.map((category, index) => (
              <span key={category}>
                {categoryLink(category)}
                {index < categories.length - 1 && <>, </>}
              </span>
            ))}
          </b>
        </div>
      )}
    </>
  );
};

export default PostCategories;