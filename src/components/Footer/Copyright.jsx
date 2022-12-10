import React from "react";

const Copyright = ({ copyright }) => {
  return (
    <div className="m-2 text-stone-400">
      <small>{copyright}</small>
      <br />
      <a
        href="https://www.flaticon.com/free-icons/flower"
        title="flower icons">
        <small>Flower icons created by Freepik - Flaticon</small>
      </a>
    </div>
  );
};

export default Copyright;