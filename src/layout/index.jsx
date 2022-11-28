import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import siteConfig from "../../data/SiteConfig";
import { useSlash } from "../utils/helpers";
import "../components/Icons/FontAwesome";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = ({ children, hasFooter = true }) => (
  <div className="dark:bg-neutral-900 dark:text-gray-200">
    <Helmet htmlAttributes={{ lang: siteConfig.siteLang }}>
      <meta name="description" content={siteConfig.siteDescription} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={useSlash(siteConfig.siteUrl)} />
    </Helmet>
    <Navigation
      title={siteConfig.navTitle}
      links={siteConfig.navLinks}
    />
    {children}
    {hasFooter && (
      <Footer
        socials={siteConfig.socialLinks}
        links={siteConfig.footerLinks}
        copyright={siteConfig.copyright}
      />
    )}
    <ScrollToTop color="#FFF" />
  </div>
);

export default MainLayout;