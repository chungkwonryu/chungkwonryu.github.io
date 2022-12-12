import React from "react";

const CenterAlignMainContainer = ({ content }) => (
  <section className="flex flex-col lg:flex-row mx-auto max-w-full py-0 px-6 w-full min-h-[80vh]">
    <div className="flex w-full flex-col pb-8 pt-3 items-center">
      {content}
    </div>
  </section>
);

export default CenterAlignMainContainer;