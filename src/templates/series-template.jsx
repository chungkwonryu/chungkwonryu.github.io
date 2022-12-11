import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import PostListing from "../components/PostListing/PostListing";
import { getPostList } from "../utils/helpers";
import { graphql } from "gatsby";
import config from "../../data/SiteConfig";

const SeriesTemplate = ({ data, pageContext }) => {
  const { currentSeries } = pageContext;
  const seriesPosts = data.allMarkdownRemark.edges;
  const postList = getPostList(seriesPosts);
  const content = (
    <>
      <PostListing
        postList={postList}
        hasLoadmore={false}
      />
    </>
  );
  const headerTitle = `Series > ${currentSeries}`;

  return (
    <Layout>
      <div className="series-container">
        <Helmet title={headerTitle} />
        <Header title={headerTitle} />
        <MainContainer content={content}/>
      </div>
    </Layout>
  );
};

export default SeriesTemplate;

export const pageQuery = graphql`
  query SeriesPage($seriesRegex: String) {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: {
        fileAbsolutePath: {
          regex: $seriesRegex
        }
        frontmatter: {
          template: { eq: "post" }
        }
      }
    ) {
      totalCount
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
            date
          }
        }
      }
    }
  }
`;