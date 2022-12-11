import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import PostListing from "../components/PostListing/PostListing";
import { getPostList } from "../utils/helpers";
import config from "../../data/SiteConfig";

const SeriesTemplate = ({ data, pageContext }) => {
  const { series, seriesPosts } = pageContext;
  const postList = getPostList(seriesPosts);
  const content = (
    <>
      <PostListing
        postList={postList}
        hasThumbnail={false}
        hasLoadmore={false}
      />
    </>
  );
  const headerTitle = `Series > ${series}`;

  return (
    <Layout>
      <div className="series-container">
        <Helmet title={headerTitle} />
        <Header title={headerTitle} />
        <MainContainer content={content}/>
      </div>
    </Layout>
  );
};

export default SeriesTemplate;