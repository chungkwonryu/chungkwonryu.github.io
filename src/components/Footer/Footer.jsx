import React from "react";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import Copyright from "./Copyright";

const Footer = ({ socials, links, copyright }) => {
  return (
    <footer className="text-center pb-3 pt-6 bg-neutral-900 text-white">
      <div className="mx-auto max-w-full py-0 px-6 w-full">
        <SocialLinks socials={socials} color="#FFF" />
        <FooterLinks links={links} />
        <Copyright copyright={copyright} />
      </div>
    </footer>
  );
};

export default Footer;