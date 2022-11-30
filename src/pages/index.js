import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import MainContainer from "../components/MainContainer/MainContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import SEO from "../components/SEO/SEO";
import PostListing from "../components/PostListing/PostListing";
import { getPostList, getTagCategoryList } from "../utils/helpers";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const postList = getPostList(postEdges);
    const { tagList, categoryList } = getTagCategoryList(postList);

    const content = (
      <>
        <PostListing
          postList={postList}
          hasThumbnail={config.homeHasThumbnail}
        />
      </>
    );

    const sidebar = (
      <Sidebar
        tagList={tagList}
        categoryList={categoryList}
        links={config.sidebarLinks}
      />
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
          <MainContainer content={content} sidebar={sidebar} />
        </div>
      </Layout>
    );
  }
}

export default Index;

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
            tags
            categories
            date
            cover {
              childImageSharp {
                gatsbyImageData(width: 660, quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
