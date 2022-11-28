import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Search from "../components/Search/Search";
import config from "../../data/SiteConfig";

const SearchPage = () => {
  return (
    <Layout>
      <div className="h-screen">
        <Helmet title={config.siteTitle} />
        <SEO />
        <Search />
      </div>
    </Layout>
  )
};

export default SearchPage;
