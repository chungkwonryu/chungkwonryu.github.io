import React from "react";
import { Link } from "gatsby";

const NavLinks = ({ links }) => {
  return (
    <div>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.url}
          activeClassName="active"
        >
          <span className="text-neutral-400 mx-4 font-medium dark:hover:text-neutral-100 hover:text-neutral-900 active:text-slate-800">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;