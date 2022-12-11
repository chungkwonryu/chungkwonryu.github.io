import React from "react";
import WidgetCategory from "./WidgetCategory";
import WidgetLatestPosts from "./WidgetLatestPosts";
import WidgetLinks from "./WidgetLinks";

const Archives = ({ categoryList, latestPostEdges, links }) => {
  return (
    <div className="w-full h-full">

      {latestPostEdges && (
        <WidgetLatestPosts latestPostEdges={latestPostEdges} />
      )}

      {categoryList && <WidgetCategory categoryList={categoryList} />}

      {links && (
        <div>
          <WidgetLinks links={links} />
        </div>
      )}
    </div>
  );
};

export default Archives;