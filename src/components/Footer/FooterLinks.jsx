import React from "react";
import { Link } from "gatsby";

const FooterLinks = ({ links }) => (
  <div className="m-2">
    {links.map((link) => (
      <Link
        key={link.label}
        to={link.url}
      >
        <span className="mx-2 inline-block text-white">
          {link.label}
        </span>
      </Link>
    ))}
  </div>
);

export default FooterLinks;