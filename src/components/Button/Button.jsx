import React from "react";
import "./Button.scss";

const Button = ({ buttonType, text, handleClick }) => {
  return (
    <button onClick={handleClick} className={buttonType}>
      {text}
    </button>
  );
};

export default Button;
