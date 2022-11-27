import React from "react";
import { formatDate } from "../../utils/helpers";
import config from "../../../data/SiteConfig";

const PostDate = ({ date }) => (
  <div className="text-neutral-500 pb-4">
    {config.postOnDate} {formatDate(date)}
  </div>
);

export default PostDate;