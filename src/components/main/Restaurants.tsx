import React from "react";
import RestaurantCard, { CardProps } from "./RestaurantCard";
const restaurants: CardProps[] = [
  {
    name: "KFC",
    rating: 4,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    scheme: "20% OFF UPTO ₹50",
    place: "Pitampura",
    cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
  },
  {
    name: "KFC",
    rating: 4,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    scheme: "20% OFF UPTO ₹50",
    place: "Pitampura",
    cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
  },
  {
    name: "Burger Singh (Big Punjabi Burgers)",
    rating: 4.2,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
    scheme: "₹125 OFF ABOVE ₹249",
    place: "Paschim Vihar",
    cuisine: "Burgers, Snacks, Desserts, Beverages, Fast Food",
  },
  {
    name: "Kwality Walls Frozen Dessert And Ice Cream Shop",
    rating: 4.5,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/suadiwnc6pcn47vpht7p",
    scheme: "30% OFF UPTO ₹75",
    place: "Pitampura",
    cuisine: "Desserts, Ice Cream, Ice Cream Cakes",
  },
  {
    name: "KFC",
    rating: 4,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    scheme: "20% OFF UPTO ₹50",
    place: "Pitampura",
    cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
  },
  {
    name: "KFC",
    rating: 4,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    scheme: "20% OFF UPTO ₹50",
    place: "Pitampura",
    cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
  },
  {
    name: "Burger Singh (Big Punjabi Burgers)",
    rating: 4.2,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
    scheme: "₹125 OFF ABOVE ₹249",
    place: "Paschim Vihar",
    cuisine: "Burgers, Snacks, Desserts, Beverages, Fast Food",
  },
  {
    name: "Kwality Walls Frozen Dessert And Ice Cream Shop",
    rating: 4.5,
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/suadiwnc6pcn47vpht7p",
    scheme: "30% OFF UPTO ₹75",
    place: "Pitampura",
    cuisine: "Desserts, Ice Cream, Ice Cream Cakes",
  },
];
export default function Restaurants() {
  return (
    <section className="content-section restaurants">
      <div className="content-wrapper">
        <div className="heading">
          <h2>Restaurants with online food delivery in Delhi</h2>
        </div>
        <div className="content">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              src={restaurant.src}
              name={restaurant.name}
              place={restaurant.place}
              cuisine={restaurant.cuisine}
              scheme={restaurant.scheme}
              rating={restaurant.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
