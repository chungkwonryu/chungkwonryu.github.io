const config = {
  // Site info
  siteTitle: "BlahSome", // site title
  siteTitleShort: "BlahSome", // short site title for homescreen (under 12 char)
  siteTitleAlt: "Chungkwon's Devlog", // Alternative site title for SEO
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest
  siteUrl: "https://chungkwonryu.github.io", // Domain of you
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "공부한 것들을 기록하고 정리하기 위한 저장소", // Website description used for RSS feeds/meta description tag.
  googleSearchConsoleContent: "mSwEWvD4Pd6FmYot3w_v09pwWRsVsoEj73DGGBkIhEo", //google search console에 등록하기 위한 값
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "CK Devlog Rss Feed",
  siteLang: "ko",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  basicCover: "../images/basic-cover-660x400.png", // cover가 없는 경우 기본 커버 (경로는 posts 기준)
  postDefaultCategoryID: "Programming", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 5,
  postsPerPage: 5,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  btnLoadComments: "Load comments",
  // Use for home page
  btnLoadmore: "Load more",
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", //
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent:
    "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for blog
  pathPrefixBlog: "/blog", // Prefix path for blog
  blogHeader: "Blog", // use in header of category-template page
  blogHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for search
  searchHeaderTitle: "Search Posts",
  // Use for links widget
  sidebarLinks: [
    {
      label: "Google(for test)",
      url: "https://www.google.com/",
    },
    {
      label: "Naver(for test)",
      url: "https://www.naver.com/",
    },
  ],
  // Use for user info
  userName: "Chungkwon Ryu", // Username to display in the author segment.
  userEmail: "chungkwonryu.dev@gmail.com", // Email used for RSS feed"s author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Seoul, South Korea", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Software Engineer & Blogger.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:chungkwonryu.dev@gmail.com",
      iconClassName: "far envelope",
    },
    {
      label: "Website",
      url: "https://chungkwonryu.github.io/",
      iconClassName: "fas globe",
    },
  ],
  // Use for navigation
  navTitle: "BLAHSOME",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Projects", url: "/projects" },
    { label: "Archives", url: "/archives" },
    { label: "Series", url: "/series" },
  ],
  seriesList: [
    { title: "effective-cpp", description: "Effective C++ 전체 책에 대한 정리" }
  ],
  seriesHeader: "Series",
  seriesPerPage: 10,
  // Use for footer
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/chungkwonryu",
      iconClassName: "fab github",
    },
    {
      label: "Facebook",
      url: "",
      iconClassName: "fab facebook-f",
    },
    {
      label: "Linkedin",
      url: "",
      iconClassName: "fab linkedin-in",
    },
    {
      label: "Twitter",
      url: "",
      iconClassName: "fab twitter",
    },
    {
      label: "RSS",
      url: "https://chungkwonryu.github.io/rss.xml",
      iconClassName: "fas rss",
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Projects", url: "/projects" },
  ],
  copyright:
    "Copyright © 2022-2022 Chungkwon Ryu. Using Lam Pham's gb-template.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
  // Utterances (comment)
  utteranceRepo: "chungkwonryu/blog-utterances",
  archivesTitle: "Archives" // archives page 의 title
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;