import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Search from "../components/Search/Search";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";

const SearchPage = () => {
  const content = (
    <Search />
  );
  return (
    <Layout>
      <div className="min-h-screen">
        <Helmet title={config.siteTitle} />
        <SEO />
        <Header title={config.searchHeaderTitle} />
        <MainContainer content={content} />
      </div>
    </Layout>
  )
};

export default SearchPage;
