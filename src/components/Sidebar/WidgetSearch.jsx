import React, { Component } from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WidgetSearch extends Component {
  render() {
    return (
      <>
        {config.hasSearch && (
          <WidgetContainer>
            <WidgetTitle title={config.searchWidgetTitle} />
            <form className="m-0" action="/search/" method="get">
              <div className="mb-0 p-0 mx-auto max-w-full w-full">
                <div className="pr-4 pl-0 py-0 w-5/6 float-left">
                  <input
                    className="bg-transparent border border-gray-300 rounded-md h-14 m-0 max-w-full py-0 px-6 w-full appearance-none overflow-visible leading-tight"
                    type="text"
                    name="q"
                    placeholder={config.searchWidgetPlaceHolder}
                    required
                    spellCheck="false"
                  />
                </div>
                <div className="pl-4 pr-0 py-0 float-left w-1/6">
                  <Button type="submit">
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      style={{ color: "#FFFFFF" }}
                    />
                  </Button>
                </div>
              </div>
            </form>
          </WidgetContainer>
        )}
      </>
    );
  }
}

export default WidgetSearch;