import React from "react";
import { Link } from "gatsby";

const NavLinks = ({ links }) => {
  return (
    <div className="hidden md:inline">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.url}
          activeClassName="active"
        >
          <span className="text-slate-400 ml-6 font-medium hover:text-slate-800 active:text-slate-800">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;