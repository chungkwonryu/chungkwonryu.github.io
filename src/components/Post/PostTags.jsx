import React from "react";
import { Link } from "gatsby";
import { getTagPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostTags = ({ tags, iconColor = "#444" }) => {
  const tagLink = (tag) => (
    <Link
      to={getTagPath(tag)}
      label={tag}
    >
      <span className="uppercase text-sky-500 hover:text-sky-700">
        {tag}
      </span>
    </Link>
  );

  return (
    <>
      {tags && (
        <div className="block pt-1">
          <b>
            {config.postTagged && <span>{config.postTagged}</span>}
            {!config.postTagged && (
              <>
                <FontAwesomeIcon
                  icon={["fas", "tags"]}
                  style={{ color: iconColor, width: "20px" }}
                />{" "}
              </>
            )}

            {tags.map((tag, index) => (
              <span key={tag}>
                {tagLink(tag)}
                {index < tags.length - 1 && <>, </>}
              </span>
            ))}
          </b>
        </div>
      )}
    </>
  );
};

export default PostTags;