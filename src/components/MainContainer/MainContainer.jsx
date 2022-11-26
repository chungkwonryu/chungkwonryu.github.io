import React from "react";

const MainContainer = ({ content }) => (
  <section className="flex flex-col mx-auto max-w-full py-0 px-6 w-full">
    <div className="w-full pb-12 pt-3">
      {content}
    </div>
  </section>
);

export default MainContainer;