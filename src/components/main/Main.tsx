import "./Main.css";
import "../header/Header.css";
import BestOffers from "./BestOffers";
import Restaurants from "./Restaurants";
import { useCallback, useEffect, useRef, useState } from "react";
import throttle from "../utility/utility";
export default function Main() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isNewHeader, setIsNewHeader] = useState(false);

  const handleScroll = throttle(
    useCallback(() => {
      if (containerRef.current) {
        const node = containerRef.current;
        const { bottom } = node.getBoundingClientRect();
        console.log(bottom);
        if (bottom > 90) {
          setIsNewHeader(false);
        } else {
          setIsNewHeader(true);
        }
      }
    }, [])
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const newHeaderClass = isNewHeader ? "site-header" : "";
  return (
    <main>
      <BestOffers />
      <div className="break">
        <hr />
      </div>
      <div ref={containerRef} className={`${newHeaderClass} content-section `}>
        <div className="content-wrapper">
          <div className="filter-option-wrapper">
            <button>Filter</button>
            <button>Sort By</button>
            <button>Fast delivery</button>
            <button>New on Swiggy</button>
            <button>Ratings 4.0+</button>
            <button>Pure Veg</button>
            <button>Rs. 300-Rs. 600</button>
            <button>Less than Rs. 300</button>
            {isNewHeader && (
              <button className="search-bar other-end">
                Search for restaurant and food
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="break">
        <hr />
      </div>
      <Restaurants />
    </main>
  );
}
