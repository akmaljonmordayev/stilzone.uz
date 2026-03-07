import React from "react";
import "./ExcellenceCard.css";

function ExcellenceCard({ icon, title, description }) {
  return (
    <div className="excellence-card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default ExcellenceCard;