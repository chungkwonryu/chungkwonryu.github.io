import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import PostListing from "../components/PostListing/PostListing";
import {
  getPostList,
} from "../utils/helpers";
import config from "../../data/SiteConfig";

const CategoryTemplate = ({ data, pageContext }) => {
  const {
    category,
  } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const postList = getPostList(postEdges);
  const content = (
    <>
      <PostListing
        postList={postList}
        hasLoadmore={false}
      />
    </>
  );

  return (
    <Layout>
      <div className="category-container">
        <Helmet
          title={`${config.categoryHeader} ${category} - ${config.siteTitle}`}
        />
        <Header title={`${config.categoryHeader} - ${category}`} />
        <MainContainer content={content} />
      </div>
    </Layout>
  );
};

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          categories: { in: [$category] }
          template: { eq: "post" }
          title: {ne: "Dummy Post" }
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