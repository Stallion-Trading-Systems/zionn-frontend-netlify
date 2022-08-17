import React from "react";
import "./Button2.css"

const Button2 = (props) => {
  return (
    <div>
      <button className="btn-2">{props.name}</button>
    </div>
  );
};

export default Button2;
