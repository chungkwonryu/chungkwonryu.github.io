import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import config from "../../data/SiteConfig";

const PageNotFound = () => (
  <Layout hasFooter={true}>
    <div>
      <Helmet title={`${config.pageNotFoundTitle} - ${config.siteTitle}`} />
      <SEO />
      <Header title={`${config.pageNotFoundTitle}`} />
      <div className="h-screen my-24 mx-auto max-w-full py-16 px-6 w-full">
        <p className="text-xl p-4">{config.pageNotFoundContent}</p>
        <Link to="/">
          <button className="btn-primary ml-4">
            {config.pageNotFoundBtn}
          </button>
        </Link>
      </div>
    </div>
  </Layout>
);

export default PageNotFound;