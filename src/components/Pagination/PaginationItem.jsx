import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaginationItem = (props) => {
  const { value, currentPage, pathPrefix, pathPrefixPagination } = props;
  const isLeft = value === -1;
  const isRight = value === -2;

  let to = pathPrefix;

  if (isLeft) {
    to += `${pathPrefixPagination}/${currentPage - 3}`;
  } else if (isRight) {
    to += `${pathPrefixPagination}/${currentPage + 3}`;
  } else if (value !== 1) {
    to += `${pathPrefixPagination}/${value}`;
  }

  return (
    <div className="border border-gray-400 active:bg-gray-400 min-h-[4.5rem] min-w-[4.8rem] py-3 px-4">
      <Link
        to={to}
        activeClassName="active"
      >
        {isLeft && (
          <FontAwesomeIcon icon={["fas", "angle-double-left"]} size="xs" />
        )}
        {value > 0 && value}
        {isRight && (
          <FontAwesomeIcon icon={["fas", "angle-double-right"]} size="xs" />
        )}
      </Link>
    </div>
  );
};

export default PaginationItem;