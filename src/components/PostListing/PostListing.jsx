import React, { useEffect, useState, Component } from "react";
import Article from "./Article";
import Button from "../Button/Button";
import config from "../../../data/SiteConfig";

const PostListing = (props) => {
  const { postList, hasThumbnail = true } = props;

  // current max posts to show
  const maxPosts = config.postsPerPage;

  // State for the list
  const [list, setList] = useState([...postList.slice(0, maxPosts)]);

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false);

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(postList.length > maxPosts);
  
  // Load more button click handler
  const handleLoadmore = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < postList.length;
      const nextResults = isMore
        ? postList.slice(currentLength, currentLength + config.postsPerPage)
        : []
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
    setHasMore(list.length < postList.length)
  }, [loadMore])

  return (
    <>
      <div>
        {list.map((post, index) => {
          return <Article key={post.title} post={post} hasThumbnail={hasThumbnail} />
        })}
      </div>
      {hasMore && (
        <div className="text-center mt-8 pt-3">
          <Button onClick={handleLoadmore}>
            {config.btnLoadmore}
          </Button>
        </div>
      )}
    </>
  );
};

export default PostListing;