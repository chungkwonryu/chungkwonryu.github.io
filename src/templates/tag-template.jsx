import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import PostListing from "../components/PostListing/PostListing";
import { getPostList, getTagPathWithoutTrailingSlash } from "../utils/helpers";
import config from "../../data/SiteConfig";

const TagTemplate = ({ data, pageContext }) => {
  const {
    tag,
    tagList,
    categoryList,
    latestPostEdges,
  } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const postList = getPostList(postEdges);
  const content = (
    <>
      <PostListing
        postList={postList}
        hasThumbnail={config.tagHasThumbnail}
      />
    </>
  );
  const sidebar = (
    <Sidebar
      tagList={tagList}
      categoryList={categoryList}
      latestPostEdges={latestPostEdges}
      links={config.sidebar}
    />
  );
  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`${config.tagHeader} ${tag} - ${config.siteTitle}`} />
        <Header title={`${config.tagHeader} ${tag}`} />
        <MainContainer content={content} sidebar={sidebar} />
      </div>
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: {frontmatter: {date : DESC } }
      filter: {frontmatter: { tags: { in: [$tag] }, template: { eq: "post" } } }
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
            tags
            categories
            cover {
              childImageSharp {
                gatsbyImageData(width: 660, quality: 100, layout: CONSTRAINED)
              }
            }
            date
          }
        }
      }
    }
  }
`;