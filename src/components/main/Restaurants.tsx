import { useCallback, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useFetch } from "../utility/Restaurants";
// import restaurants from "../utility/Restaurants";
import "./Main.css";
import { LoadingRestaurant } from "../utility/Loading";

export default function Restaurants() {
  const [page, setPage] = useState<number>(1);
  const { restaurants, status, error, hasMore } = useFetch({ page });
  let observer = useRef<IntersectionObserver | undefined>();
  let lastElementRef = useCallback(
    (node: any) => {
      if (status === "loading" || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          if (entries[0].isIntersecting) {
            setPage((prev) => prev + 1);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: [1],
        }
      );

      if (node) observer.current.observe(node);
    },
    [hasMore, status]
  );
  return (
    <section className="content-section restaurants ">
      <div className="content-wrapper">
        <div className="heading">
          <h2>Restaurants with online food delivery in Delhi</h2>
        </div>
        <div className="content">
          {restaurants.map((restaurant, index) => {
            if (restaurants.length === index + 1) {
              return (
                <RestaurantCard
                  key={restaurant.id}
                  ref={lastElementRef}
                  src={restaurant.src}
                  name={restaurant.name}
                  place={restaurant.place}
                  cuisine={restaurant.cuisine}
                  scheme={restaurant.scheme}
                  rating={restaurant.rating}
                  id={restaurant.id}
                />
              );
            }

            return (
              <RestaurantCard
                key={restaurant.id}
                ref={undefined}
                src={restaurant.src}
                name={restaurant.name}
                place={restaurant.place}
                cuisine={restaurant.cuisine}
                scheme={restaurant.scheme}
                rating={restaurant.rating}
                id={restaurant.id}
              />
            );
          })}
        </div>
        {(status === "loading" || status === "idle") && <LoadingRestaurant />}
        {!hasMore && <div>No More Restaurants</div>}
        {status === "error" && <div>{error}</div>}
      </div>
    </section>
  );
}
