import React from "react";
import { Link } from "gatsby";

const NavBrand = ({ brand, title }) => (
  <Link to="/">
    <div className="text-slate-800 dark:text-neutral-100 items-center flex">
      <img
        className="h-8 w-auto mr-4 rounded"
        src={brand}
        alt="Brand Image" />
      <span>
        <strong>{title}</strong>
      </span>
    </div>
  </Link>
);

export default NavBrand;