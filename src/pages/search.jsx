import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Search from "../components/Search/Search";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";

const SearchPage = () => {
  return (
    <Layout>
      <div className="h-screen">
        <Helmet title={config.siteTitle} />
        <SEO />
        <Header title={config.searchHeaderTitle}/>
        <Search />
      </div>
    </Layout>
  )
};

export default SearchPage;
