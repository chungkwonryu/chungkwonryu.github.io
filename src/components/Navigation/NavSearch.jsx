import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavSearch = () => {
  return (
    <div className="m-2 p-2">
      <Link to="/search">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </Link>
    </div>
  )
};

export default NavSearch;