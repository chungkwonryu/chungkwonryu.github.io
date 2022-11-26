import React from "react";

const Button = (props) => (
  <button
    className="bg-sky-500 border-sky-500 text-white items-center border rounded-md cursor-pointer"
    {...props}
  />
);

export default Button;