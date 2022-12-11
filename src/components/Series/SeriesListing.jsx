import React, { useEffect, useState } from "react";
import Series from "./Series";
import Button from "../Button/Button";
import config from "../../../data/SiteConfig";

const SeriesListing = (props) => {
  const { seriesList } = props;

  // current max series to show
  const maxSeries = config.seriesPerPage;

  // State for the list
  const [list, setList] = useState([...seriesList.slice(0, maxSeries)]);

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false);

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(seriesList.length > maxSeries);
  
  // Load more button click handler
  const handleLoadmore = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < seriesList.length;
      const nextResults = isMore
        ? seriesList.slice(currentLength, currentLength + config.seriesPerPage)
        : []
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
    setHasMore(list.length < seriesList.length)
  }, [loadMore])

  return (
    <>
      <div>
        {list.map((series) => {
          return <Series key={series.title} series={series} />
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

export default SeriesListing;