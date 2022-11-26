import React from "react";
import ExternalLink from "./ExternalLink";
import { Link } from "gatsby";
import { isInternalLink, useSlash } from "../../utils/helpers";

// props
//    - to (공통)
//    - className (공통)
//    - style (공통)
//    - activeClassName
//    - label
const AutoLink = (props) => (
  <>
    {isInternalLink(props.to) ? (
      <Link
        key={props.label}
        to={useSlash(props.to)}
        activeClassName={props.activeClassName}
        className={props.className}
        style={{ ...props.style }}
      >
        {props.children}
      </Link>
    ) : (
      <ExternalLink
        className={props.className}
        to={props.to}
        style={props.style}
      >
        {props.children}
      </ExternalLink>
    )}
  </>
);

export default AutoLink;