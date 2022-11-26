import React from "react";

const MainContainer = ({ content, sidebar }) => (
  <section className="flex flex-col mx-auto max-w-full py-0 px-6 w-full">
    <div className="w-full pb-12 pt-3">
      {content}
    </div>
    <div className="w-full pb-12 pt-3">
      {sidebar}
    </div>
  </section>
);

export default MainContainer;