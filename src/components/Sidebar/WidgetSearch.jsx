import React, { Component } from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";

class WidgetSearch extends Component {
  render() {
    return (
      <>
        {config.hasSearch && (
          <WidgetContainer>
            <WidgetTitle title={config.searchWidgetTitle} />
            <div className="flex items-center">
              <form method="GET">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input type="search" name="q" className="py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
                </div>
              </form>
            </div>
          </WidgetContainer>
        )}
      </>
    );
  }
}

export default WidgetSearch;