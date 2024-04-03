import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div>
      <button className="reusable-button">{props.children}</button>
    </div>
  );
};

export default Buttons;
