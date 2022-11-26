import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import Post from "../components/Post/Post";
import config from "../../data/SiteConfig";

const PostTemplate = ({ data, pageContext }) => {
  const { slug, tagList, latestPostEdges } = pageContext;
  const postNode = data.markdownRemark;
  const title = postNode.frontmatter.title;
  const content = <Post postNode={postNode} config={config} slug={slug} />;
  
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
        tags
        description
        cover {
          childImageSharp {
            gatsbyImageData(width: 660, quality: 100, layout: FIXED)
          }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`;