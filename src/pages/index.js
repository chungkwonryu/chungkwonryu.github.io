import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import SEO from "../components/SEO/SEO";
import Search from "../components/Search/Search";
import config from "../../data/SiteConfig";

const Index = ({ data }) => {
  const welcomeImage = data.file;

  const content = (
    <div className="flex flex-col justify-center items-center">
      <img src={welcomeImage.publicURL} alt="welcome image" className="max-w-xl p-2 my-4" />
      <Search />
    </div>
  );

  const headerTitle = config.homeHeader
    ? `${config.siteTitle} - ${config.homeHeader}`
    : `${config.siteTitle}`;
  
  return (
    <Layout>
      <div>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Header title={headerTitle} show={false} />
        <MainContainer content={content} />
      </div>
    </Layout>
  );
};

export default Index;

export const indexQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "welcome-image.gif" }) {
      publicURL
      name
    }
  }
`;
