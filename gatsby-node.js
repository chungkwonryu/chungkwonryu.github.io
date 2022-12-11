/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");
const slug = require("slug");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

const { createFilePath } = require(`gatsby-source-filesystem`)

//------------------------ utils --------------------------------//
// src/utils/helpers.js랑 겹치지만,
// gatsby-node.js에서 해당 파일들을 require해오면 ESM vs CommonJS 문제로 인해서 빌드 실패한다.
// 따라서 여기서 새로 정의한다.

const useSlash = (slug) => {
  if (!slug) return "/";
  if (slug.charAt(slug.length - 1) !== "/") return `${slug}/`;
  return slug;
};

const slugify = (text) => slug(text).toLowerCase();

//---------------------------------------------------------------//

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  let slug;

  // Node 생성시에 Markdown 파일들만 별도의 처리 추가
  // (우리는 Markdown Node에 대해서만 페이지로 만들어주고 싶은 것)
  if (node.internal.type === `MarkdownRemark`) {
    
    // fileNode : node의 모든 정보 (Markdown의 내용까지 포함)
    const fileNode = getNode(node.parent);

    // parsedFilePath
    //  - root : (뭔지 모르겠음. 대부분 '')
    //  - dir : (자신을 포함하는 디렉토리 이름? posts에 들은 것들은 ''. series에 들은 것들은 각 series 이름)
    //  - base : (확장자를 포함하는 파일명)
    //  - ext : (확장자)
    //  - name : base - ext
    const parsedFilePath = path.parse(fileNode.relativePath);

    // Slug 생성 규칙
    // 1. 가장 우선시 되는건 frontmatter에 있는 slug 필드
    //  2. 그 다음은 frontmatter에 title이 있으면 그럴로 slugify
    //    3. 그것도 없으면 파일명 기준
    // 일반 포스트는 /[ ]/
    // series 포스트는 /series/[series명]/[ ]/
    if (parsedFilePath.dir !== "") {
      slug = `/series/${parsedFilePath.dir}`;
    } else {
      slug = ``;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
        slug = slug + `/${slugify(node.frontmatter.slug)}/`;
      } else if (Object.prototype.hasOwnProperty.call(node.frontmatter, "title")) {
        slug = slug + `/${slugify(node.frontmatter.title)}/`;
      } else {
        slug = slug + `/${slugify(parsedFilePath.name)}/`;
      }
    } else {
      slug = slug + `/${slugify(parsedFilePath.name)}/`;
    }

    createNodeField({ node, name: "slug", value: useSlash(slug) });

    // frontmatter에 적힌 date를 가지고 Node의 field에 정형화된 date 필드 추가
    if (Object.prototype.hasOwnProperty.call(node, "frontmatter") && 
      Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
      if (!date.isValid)
        console.warn(`WARNING: Invalid date.`, node.frontmatter);
      else
        createNodeField({ node, name: "date", value: date.toISOString() });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  // Markdown으로 작성한 각각의 포스트를 나타내기 위한 템플릿
  const postPageTemplate = path.resolve("src/templates/post-template.jsx");

  // Post가 아닌 Markdown으로 작성한 페이지들을 나타내기 위한 템플릿 (e.g. About)
  const pagePageTemplate = path.resolve("src/templates/page-template.jsx");
  
  // 특정 카테고리를 선택하면 나타나는 (해당 카테고리에 속하는 포스트들을 보여주는) 페이지를 위한 템플릿
  const categoryPageTemplate = path.resolve("src/templates/category-template.jsx");

  // 특정 시리즈를 선택하면 나타나는 페이지를 위한 템플릿
  const seriesPageTemplate = path.resolve("src/templates/series-template.jsx");

  const archivesTemplate = path.resolve("src/templates/archives-template.jsx");

  const markdownQueryResult = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {frontmatter: {date: DESC}}
          filter: {frontmatter: {title: {ne: "Dummy Post"}}}
        ) {
          edges {
            node {
              fields {
                slug
                date
              }
              frontmatter {
                template
                title
                categories
              }
            }
          }
        }
      }
    `
  );

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  // Filter data
  const categorySet = new Set();
  const postEdges = [];
  const pageEdges = [];

  markdownQueryResult.data.allMarkdownRemark.edges.forEach((edge) => {
    if (edge.node.frontmatter.categories) {
      edge.node.frontmatter.categories.forEach((category) => {
        categorySet.add(category);
      });
    }

    if (edge.node.frontmatter.template === "post") {
      postEdges.push(edge);
    }

    if (edge.node.frontmatter.template === "page") {
      pageEdges.push(edge);
    }
  });

  // Create categoryList
  const categoryList = Array.from(categorySet);

  // Get latest posts
  const latestPostEdges = [];
  let count = 0;
  for (count = 0; count < siteConfig.numberLatestPost && count < postEdges.length; count++) {
    latestPostEdges.push(postEdges[count]);
  }

  // Create post page
  postEdges.forEach((edge) => {
    createPage({
      path: useSlash(edge.node.fields.slug),
      component: postPageTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });

  // Create page page
  pageEdges.forEach((edge) => {
    createPage({
      path: useSlash(edge.node.fields.slug),
      component: pagePageTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });

  // common config for pagination
  const postsPerPage = siteConfig.postsPerPage;

  // create category list page
  categoryList.forEach((category) => {
    const categoryPosts = postEdges.filter((edge) => {
      const categories = edge.node.frontmatter.categories;
      return categories && categories.includes(category);
    });

    const basePath = `${siteConfig.pathPrefixCategory}/${slugify(category)}`;

    createPage({
      path: useSlash(basePath),
      component: categoryPageTemplate,
      context: {
        category,
        categoryPosts,
        limit: postsPerPage,
      },
    });
  });

  // Get series directory list
  const seriesListQueryResult = await graphql(
    `
      {
        allDirectory (
          filter: {
            sourceInstanceName: {eq: "series"}
            relativePath: {ne: "" }
          }
        ){
          edges {
            node {
              relativePath
              name
            }
          }
        }
      }
    `
  )

  seriesListQueryResult.data.allDirectory.edges.forEach((edge) => {
    const currentSeries = edge.node.name;

    const basePath = `/series/${slugify(currentSeries)}/`;
    const seriesRegex = `/${slugify(currentSeries)}/`;

    createPage({
      path: useSlash(basePath),
      component: seriesPageTemplate,
      context: {
        currentSeries,
        seriesRegex,
      },
    });
  });

  // Create archives page
  createPage({
    path: `archives/`,
    component: archivesTemplate,
    context: {
      categoryList,
      latestPostEdges,
    },
  });
};