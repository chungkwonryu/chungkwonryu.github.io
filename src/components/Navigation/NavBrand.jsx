import React from "react";
import { Link } from "gatsby";

const NavBrand = ({ title }) => (
  <Link to="/">
    <div className="p-2 rounded-md font-bold text-white dark:text-neutral-800 bg-black dark:bg-neutral-100 items-center flex">
      <span>
        <strong>{title}</strong>
      </span>
    </div>
  </Link>
);

export default NavBrand;