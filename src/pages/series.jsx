import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import SeriesListing from "../components/Series/SeriesListing";
import config from "../../data/SiteConfig";

const Series = () => {
  const seriesList = config.seriesList;
  const headerTitle = config.seriesHeader
  ? `${config.siteTitle} - ${config.seriesHeader}`
  : `${config.siteTitle}`;

  const content = (
    <>
      <SeriesListing
        seriesList={seriesList}
      />
    </>
  );

  return (
    <Layout>
      <div>
        <Helmet title={headerTitle} />
        <Header title={headerTitle} />
        <MainContainer content={content} />
      </div>
    </Layout>
  );
};

export default Series;
