/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <script key="my-script"
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          function setTheme(theme) {
            window.__theme = theme;
            console.log('Theme updated:', theme);

            if (theme === 'dark') {
              document.documentElement.className = 'dark';
            } else {
              document.documentElement.className = '';
            }
          };

          window.__setPreferredTheme = function(theme) {
            setTheme(theme);
            try {
              localStorage.setItem('preferred-theme', theme);
            } catch (e) {}
          };

          let preferredTheme;
          try {
            preferredTheme = localStorage.getItem('preferred-theme');
          } catch (e) {}

          window.__themeListeners = [];

          var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
          darkQuery.addListener(function(e) {
            window.__setPreferredTheme(e.matches ? 'dark' : 'light');
            windows.__themeListeners.forEach(function(listener) {
              listener();
            });
          });

          setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
        })();`.replace(/\n/g, ' ').replace(/ {2}/g, ''),
    }}
  />,
]

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
