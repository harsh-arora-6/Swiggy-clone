import { useState } from "react";
import "./NavItem.css";
import React from "react";
import ItemImg from "./NavItemImg";
import { useAuth } from "../../context/AuthContext";

function GetExtraText({
  type,
  isActive = false,
}: {
  type: string;
  isActive?: boolean;
}) {
  if (type === "offers") {
    return <span className="nav-item-text NEW">NEW</span>;
  } else if (type === "cart") {
    return (
      <span className={`cart-count ${isActive ? "active-text" : ""}`}>0</span>
    );
  }
  return null;
}

export default function NavItem({
  type,
  name,
}: {
  type: string;
  name: string;
}) {
  const { user } = useAuth();
  const [active, setActive] = useState(false);
  const [tooltipClass, setTooltipClass] = useState("hide-slow");

  const activeTextClass = active ? "active-text" : "";
  const activeIconClass = active
    ? type === "cart"
      ? "active-cart-icon"
      : "active-icon"
    : "";

  function handleLinkMouseEnter() {
    setActive(true);
    setTooltipClass("show-slow");
  }
  function handleLinkMouseLeave() {
    setActive(false);
    setTooltipClass("hide-slow");
  }
  function handleTooltipMouseEnter() {
    setActive(true);
    setTooltipClass("show-fast");
  }
  function handleTooltipMouseLeave() {
    setActive(false);
    setTooltipClass("hide-slow");
  }
  return (
    <li className={`nav-item ${type}`}>
      <a
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
        href="/"
        className={`item-link`}
      >
        <ItemImg type={type} activeIconClass={activeIconClass} />
        {type === "cart" && <GetExtraText type={type} isActive={active} />}
        <span className={`nav-item-text ${activeTextClass}`}>{name}</span>
        {type === "offers" && <GetExtraText type={type} />}
      </a>

      {type === "cart" && (
        <div
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
          className={`tooltip-box ${tooltipClass}`}
        >
          <div className="tooltip-icon"></div>
        </div>
      )}

      {user && type === "signin" && (
        <div
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
          className={`tooltip-box ${tooltipClass}`}
        >
          <div className="tooltip-icon"></div>
          <ul className="tooltip-box-options">
            <div className="tooltip-box-option">
              <div className="tooltip-option-text">Profile</div>
            </div>
            <div className="tooltip-box-option">
              <div className="tooltip-option-text">Orders</div>
            </div>
            <div className="tooltip-box-option">
              <div className="tooltip-option-text">Swiggy One</div>
            </div>
            <div className="tooltip-box-option">
              <div className="tooltip-option-text">Favourites</div>
            </div>
            <div className="tooltip-box-option">
              <div className="tooltip-option-text">Logout</div>
            </div>
          </ul>
        </div>
      )}
    </li>
  );
}
