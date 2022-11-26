const config = {
  // Site info
  siteTitle: "Chungkwon's devlog", // site title
  siteTitleShort: "CK Devlog", // short site title for homescreen (under 12 char)
  siteTitleAlt: "Chungkwon's devlog", // Alternative site title for SEO
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest
  siteUrl: "https://chungkwonryu.github.io", // Domain of you
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "공부한 것들을 기록하고 정리하기 위한 저장소", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "My Site's RSS Feed",
  siteLang: "en",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "ck-blog", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: false,
  homeHasThumbnail: true,
  homeHeader: "Home",
  homeMoreArticles: "More articles",
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
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "Complete JavaScript",
      url: "https://completejavascript.com/",
    },
    {
      label: "Lam Pham Blog",
      url: "https://phamvanlam.com/",
    },
    {
      label: "Lam Pham Portfolio",
      url: "http://about.phamvanlam.com/",
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
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/completejavascript/",
      iconClassName: "fab linkedin-in",
    },
  ],
  // Use for navigation
  navTitle: "CK Devlog",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    {
      label: "Codepen",
      url: "https://codepen.io/completejavascript/",
      iconClassName: "fab codepen",
    },
    {
      label: "FreeCodeCamp",
      url: "", // Ignore
      iconClassName: "fab free-code-camp",
    },
    {
      label: "GitHub",
      url: "https://github.com/completejavascript",
      iconClassName: "fab github",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/completejavascript/",
      iconClassName: "fab facebook-f",
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/completejavascript/",
      iconClassName: "fab linkedin-in",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CmpltJavaScript",
      iconClassName: "fab twitter",
    },
    {
      label: "RSS",
      url: "https://gb-template.netlify.com/rss.xml",
      iconClassName: "fas rss",
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
  ],
  copyright:
    "Copyright © 2019-2022 Chungkwon Ryu. Using Lam Pham's gb-template.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
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