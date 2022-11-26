import React from "react";
import { Link } from "gatsby";

const NavLinksDropdown = ({ links }) => {
  return (
    <div className="block text-left">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.url}
          activeClassName="active"
        >
          <span className="text-slate-400 hover:text-slate-800 block font-medium py-3 border-t-2 border-t-slate-600 active:text-slate-800">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinksDropdown;