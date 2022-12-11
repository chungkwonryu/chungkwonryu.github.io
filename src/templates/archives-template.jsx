import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from "../components/Header/Header";
import Archives from "../components/Archives/Archives";
import MainContainer from "../components/MainContainer/MainContainer";
import config from "../../data/SiteConfig";

const ArchivesTemplate = ({ pageContext }) => {
  const { categoryList, latestPostEdges } = pageContext;
  const title = config.archivesTitle;
  const content =
    <Archives
      categoryList={categoryList}
      latestPostEdges={latestPostEdges}
      links={config.sidebarLinks}
    />;
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Header title={title} />
      <MainContainer content={content} />
    </Layout>
  );
};

export default ArchivesTemplate;