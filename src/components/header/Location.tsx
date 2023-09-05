import React from "react";
import "./Location.css";
export default function Location() {
  return (
    <div className="location-container">
      <div className="location-type ellipsis">Friends and Family</div>
      <div className="location-detail ellipsis">
        D-305, Rishi Nagar, Pitam Pura, New Delhi, Delhi
      </div>
      <div className="icon-down-wrapper">
        <div className="icon-downArrow"></div>
      </div>
    </div>
  );
}
