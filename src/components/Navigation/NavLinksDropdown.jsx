import React from "react";
import { Link } from "gatsby";

const NavLinksDropdown = ({ links }) => {
  return (
    <div className="block text-left divide-y divide-slate-300">
      {links.map((link) => (
        <div key={link.label}>
          <Link
            to={link.url}
            activeClassName="active"
          >
            <span className="text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-800 block font-medium py-3 active:text-slate-800">
              {link.label}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinksDropdown;