import React from "react";

const MainContainer = ({ content, sidebar }) => (
  <section className="flex flex-col lg:flex-row mx-auto max-w-full py-0 px-6 w-full">
    <div className="w-full pb-8 pt-3 lg:pr-12 lg:w-[calc(100%-330px)]">
      {content}
    </div>
    <div className="w-full pb-8 pt-3 lg:w-[330px]">
      {sidebar}
    </div>
  </section>
);

export default MainContainer;