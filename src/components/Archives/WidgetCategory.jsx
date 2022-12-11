import React from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import Category from "../Category/Category";
import config from "../../../data/SiteConfig";

const WidgetCategory = ({ categoryList }) => (
  <WidgetContainer>
    <WidgetTitle title={config.categoryWidgetTitle} />
    <div>
      {categoryList.map((category) => (
        <Category key={category} content={category} />
      ))}
    </div>
  </WidgetContainer>
);

export default WidgetCategory;