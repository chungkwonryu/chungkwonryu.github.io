import React from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";

const WidgetLinks = ({ links }) => (
  <>
    {links && links.length > 0 && (
      <WidgetContainer>
        <WidgetTitle title={config.linksWidgetTitle} />
        <div>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="block border-b-2 border-b-gray-400 py-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </WidgetContainer>
    )}
  </>
);

export default WidgetLinks;