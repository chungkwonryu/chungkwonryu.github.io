import React from "react";
import { Link } from "gatsby";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import { getPostList } from "../../utils/helpers";
import config from "../../../data/SiteConfig";

const WidgetLatesPosts = ({ latestPostEdges }) => {
  const postList = getPostList(latestPostEdges);

  return (
    <WidgetContainer>
      <WidgetTitle title={config.latestPostsWidgetTitle} />
      <div>
        {postList.map((post) => (
          <Link
            key={post.title}
            to={post.slug}
          >
            <span className="block border-b-2 border-b-gray-400 py-4">
              {post.title}
            </span>
          </Link>
        ))}
      </div>
    </WidgetContainer>
  );
};

export default WidgetLatesPosts;