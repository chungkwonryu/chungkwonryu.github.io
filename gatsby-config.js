/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const config = require("./data/SiteConfig");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + config.pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + config.pathPrefix,
      feed_url: config.siteUrl + config.pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: config.siteUrl + config.pathPrefix + `/logos/logo-512x512.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 660,
              linkImagesToOriginal: false,
              quality: 100,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 660,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded Youtue video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "CK Devlog";
          return ret;
        },
        query: `
          {
            site {
              siteMetadata {
                rssMetadata {
                  site_url
                  feed_url
                  title
                  description
                  image_url
                  copyright
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map((edge) => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: encodeURI(rssMetadata.site_url) + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [
                  { "content:encoded": edge.node.html },
                  { author: config.userEmail },
                ],
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { frontmatter: {date: DESC } }
                filter: {
                  frontmatter: {
                    template: { eq: "post" }
                  }
                }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 180)
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      date
                      categories
                      tags
                    }
                  }
                }
              }
            }`,
            output: config.siteRss,
            title: config.siteRssTitle,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix + "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icons: [
          {
            src: "/logos/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logos/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-fusejs`,
      options: {
        // 인덱스를 만들고자 하는 데이터의 쿼리
        query: `
          {
            allMarkdownRemark(
              filter: { frontmatter: { template: { eq: "post" }, title: {ne: "Dummy Post"} } }
            ) {
              nodes {
                id
                rawMarkdownBody
                excerpt
                fields{
                  slug
                }
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        `,
        // 인덱스를 만들고자 하는 데이터의 프로퍼티
        keys: ['title', 'body'],
        // graphql의 결과물을 단순 객체 배열로 변환하는 함수
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            slug: node.fields.slug,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            excerpt: node.excerpt,
            date: node.frontmatter.date,
          })),
      },
    },
  ],
};
