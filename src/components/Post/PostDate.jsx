import React from "react";
import { formatDate } from "../../utils/helpers";
import config from "../../../data/SiteConfig";

const PostDate = ({ date }) => (
  <div className="text-slate-600">
    {config.postOnDate} {formatDate(date)}
  </div>
);

export default PostDate;