import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ name, backgroundColor, roomId }) => {
  return (
    <Link to={`/rooms/${roomId}`}>
      <div className="card" style={{ backgroundColor: backgroundColor }}>
        <p>
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Card;
