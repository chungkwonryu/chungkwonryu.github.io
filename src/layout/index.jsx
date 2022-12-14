import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import siteConfig from "../../data/SiteConfig";
import { useSlash } from "../utils/helpers";
import "../components/Icons/FontAwesome";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = ({ children, hasFooter = true }) => (
  <div className="dark:bg-neutral-900 dark:text-gray-200 min-h-screen">
    <Helmet htmlAttributes={{ lang: siteConfig.siteLang }}>
      <meta name="description" content={siteConfig.siteDescription} />
      <meta name="google-site-verification" content={siteConfig.googleSearchConsoleContent} />
      <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
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