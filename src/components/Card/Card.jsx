import React from "react";
import "./Card.scss";

const Card = ({ text, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      {text}
    </div>
  );
};

export default Card;
