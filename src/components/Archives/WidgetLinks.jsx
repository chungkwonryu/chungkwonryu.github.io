import React from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";

const WidgetLinks = ({ links }) => (
  <>
    {links && links.length > 0 && (
      <WidgetContainer>
        <WidgetTitle title={config.linksWidgetTitle} />
        <div className="divide-y divide-slate-300">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="block py-2 text-sky-500 hover:text-sky-700"
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