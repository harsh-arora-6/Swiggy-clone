import "./Header.css";
import Location from "./Location";
import Logo from "./Logo";
import React from "react";
import NavItem from "./NavItem";
export default function Header() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <Logo />
        <Location />
        <ul className="nav-items">
          <NavItem type="cart" name="Cart"></NavItem>
          <NavItem type="signin" name="Sign In"></NavItem>
          <NavItem type="help" name="Help"></NavItem>
          <NavItem type="offers" name="Offers"></NavItem>
          <NavItem type="search" name="Search"></NavItem>
        </ul>
      </div>
    </header>
  );
}
