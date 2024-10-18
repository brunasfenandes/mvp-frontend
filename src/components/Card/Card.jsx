import React from "react";
import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = ({ text, backgroundColor }) => {
  return (
    <Link to={`/rooms/${text.id}`}>
      <div className="card" style={{ backgroundColor: backgroundColor }}>
        {text}
      </div>
    </Link>
  );
};

export default Card;
