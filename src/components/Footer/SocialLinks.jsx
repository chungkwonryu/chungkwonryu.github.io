import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = ({ socials, color }) => (
  <div className="m-2">
    {socials.map((social) => {
      if (social.url !== "")
        return (
          <a
            className="mx-2"
            href={social.url}
            key={social.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={social.iconClassName.split(" ")}
              transform="grow-2"
              style={{ color }}
            />
          </a>
        );
      
      // Ignore
      return null;
    })}
  </div>
);

export default SocialLinks;