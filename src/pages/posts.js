import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import SEO from "../components/SEO/SEO";
import PostListing from "../components/PostListing/PostListing";
import { getPostList } from "../utils/helpers";
import config from "../../data/SiteConfig";

class Posts extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = getPostList(postEdges);

    const content = (
      <>
        <PostListing
          postList={postList}
          hasThumbnail={config.homeHasThumbnail}
        />
      </>
    );

    const headerTitle = config.homeHeader
      ? `${config.siteTitle} - ${config.homeHeader}`
      : `${config.siteTitle}`;
    
    return (
      <Layout>
        <div>
          <Helmet title={config.siteTitle} />
          <SEO />
          <Header title={headerTitle} />
          <MainContainer content={content} />
        </div>
      </Layout>
    );
  }
}

export default Posts;

export const indexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" }, title: { ne: "Dummy Post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            categories
            date
          }
        }
      }
    }
  }
`;
