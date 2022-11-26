import React from "react";
import { Link } from "gatsby";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import { getCategoryPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";

const WidgetCategory = ({ categoryList }) => (
  <WidgetContainer>
    <WidgetTitle title={config.categoryWidgetTitle} />
    <div>
      {categoryList.map((category) => (
        <Link
          key={category}
          to={getCategoryPath(category)}
        >
          <span className="block border-b-2 border-b-gray-400 py-4">
            {category}
          </span>
        </Link>
      ))}
    </div>
  </WidgetContainer>
);

export default WidgetCategory;