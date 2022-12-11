import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";
import config from "../../../data/SiteConfig";

// Post에 있는 다양한 소셜에 해당 Post를 공유하기 위한 공유 버튼
const PostShare = ({ title, slug, excerpt }) => {
  const url = config.siteUrl + config.pathPrefix + slug;
  const iconSize = 26;
  const filter = (count) => (count > 0 ? count : "");
  const renderShareCount = (count) => (
    <div className="text-center">{filter(count)}</div>
  );

  return (
    <div className="flex">
      <div className="cursor-pointer mr-4">
        <RedditShareButton
          url={url}
          title={title}
        >
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {(count) => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
      </div>

      <div className="cursor-pointer mr-4">
        <TwitterShareButton
          url={url}
          title={title}
        >
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
      </div>

      <div className="cursor-pointer mr-4">
        <FacebookShareButton
          url={url}
          quote={excerpt}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {(count) => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>

      <div className="cursor-pointer">
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default PostShare;