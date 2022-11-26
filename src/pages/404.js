import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import config from "../../data/SiteConfig";

const PageNotFound = () => (
  <Layout hasFooter={false}>
    <div>
      <Helmet title={`${config.pageNotFoundTitle} - ${config.siteTitle}`} />
      <SEO />
      <Header title={`${config.pageNotFoundTitle}`} />
      <div className="my-24 mx-auto max-w-full py-16 px-6 w-full">
        <p>{config.pageNotFoundContent}</p>
        <Link to="/">
          <div className="bg-sky-500 border-sky-500 text-white items-center border rounded-sm cursor-pointer inline-flex text-3xl h-14 justify-center mx-0 mt-0 mb-3 py-0 px-6 outline-0 no-underline normal-case whitespace-nowrap">
            {config.pageNotFoundBtn}
          </div>
        </Link>
      </div>
    </div>
  </Layout>
);

export default PageNotFound;