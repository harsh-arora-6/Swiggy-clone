import "./Main.css";
import "../header/Header.css";
import BestOffers from "./BestOffers";
import Restaurants from "./Restaurants";
import { useEffect, useRef, useState } from "react";
const styleArr = [
  { position: "static", top: "0", backgroundColor: "", zIndex: "0" },
  { position: "sticky", top: "0", backgroundColor: "white", zIndex: "10" },
];
let initialIntersection = true;
export default function Main() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isNewHeader, setIsNewHeader] = useState(false);

  const callbackFn: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    const [entry] = entries;
    if (initialIntersection) {
      console.log(entry);
      initialIntersection = false;
      return;
    }
    setIsNewHeader((prevValue) => {
      return !prevValue;
    });
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(callbackFn, options);
    const node = containerRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
        initialIntersection = true;
      }
    };
  }, []);
  // useEffect(() => {
  //   if (containerRef.current) {
  //     const { position, backgroundColor, zIndex, top } =
  //       styleArr[Number(isNewHeader)];
  //     containerRef.current.style.position = position;
  //     containerRef.current.style.backgroundColor = backgroundColor;
  //     containerRef.current.style.zIndex = zIndex;
  //     containerRef.current.style.top = top;
  //   }
  // }, [isNewHeader]);

  const newHeaderClass = isNewHeader ? "site-header" : "";
  // const newHeaderClass = "";
  return (
    <main>
      <BestOffers />
      <div className="break">
        <hr />
      </div>
      <div ref={containerRef} className={`${newHeaderClass} content-section `}>
        <div className="content-wrapper">
          <div className="filter-option-wrapper">
            <button>Rating</button>
            <button>Rating</button>
            <button>Rating</button>
            <button>Rating</button>
            <button>Rating</button>
            <button>Rating</button>
            {isNewHeader && <button className="other-end">Rating</button>}
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
