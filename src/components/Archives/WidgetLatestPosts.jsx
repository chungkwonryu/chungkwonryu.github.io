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
      <div className="divide-y divide-slate-300">
        {postList.map((post) => (
          <div key={post.title}>
            <span className="block py-2 text-sky-500 hover:text-sky-700 cursor-pointer">
              <Link to={post.slug}>
                {post.title}
              </Link>
            </span>
          </div>
        ))}
      </div>
    </WidgetContainer>
  );
};

export default WidgetLatesPosts;