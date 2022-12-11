import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import Post from "../components/Post/Post";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

// markdown -> post 로 바꾸기 위한 템플릿
const PostTemplate = ({ data, pageContext }) => {
  const postNode = data.markdownRemark;
  const title = postNode.frontmatter.title;
  const { slug } = pageContext;
  const content = <Post postNode={postNode} />;

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

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        categories
        description
      }
      fields {
        slug
        date
      }
    }
  }
`;