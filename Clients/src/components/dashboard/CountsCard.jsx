import React from "react";
import "./CountsCard.css"; // Ensure to import your CSS

const CountsCard = ({ title, icon, count }) => {
  return (
    <div className="counts-card">
      <div className="card-wrap">
        <div className="card-header">
          <div className="header-content">
            <i className={`far ${icon} card-icon`}></i>
            <h2>{title}</h2>
          </div>
        </div>
        <div className="card-body count">{count}</div>
      </div>
    </div>
  );
};

export default CountsCard;
