import React from "react";
import "./Main.css";
import BestOffers from "./BestOffers";
import Restaurants from "./Restaurants";
export default function Main() {
  return (
    <main>
      <BestOffers />
      <div className="break">
        <hr />
      </div>
      <Restaurants />
    </main>
  );
}
