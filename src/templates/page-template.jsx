import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import Page from "../components/Page/Page";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const PageTemplate = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const title = postNode.frontmatter.title;
  const content = <Page postNode={postNode} slug={slug} />;

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Header title={title} />
      <MainContainer content={content} />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query BlogPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
    }
  }
`;