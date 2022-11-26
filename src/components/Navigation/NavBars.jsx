import React from "react";
import Hamburger from "./Hamburger";

const NavBars = ({ handleClick }) => (
  <div
    onClick={handleClick}
    className="text-slate-800 -mr-6 md:hidden cursor-pointer p-4">
    <Hamburger />
  </div>
);

export default NavBars;