import { CardProps } from "./../main/RestaurantCard";
import { useEffect, useState } from "react";
//  const restaurants: CardProps[] = [
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "Burger Singh (Big Punjabi Burgers)",
//       rating: 4.2,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
//       scheme: "₹125 OFF ABOVE ₹249",
//       place: "Paschim Vihar",
//       cuisine: "Burgers, Snacks, Desserts, Beverages, Fast Food",
//     },
//     {
//       name: "Kwality Walls Frozen Dessert And Ice Cream Shop",
//       rating: 4.5,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/suadiwnc6pcn47vpht7p",
//       scheme: "30% OFF UPTO ₹75",
//       place: "Pitampura",
//       cuisine: "Desserts, Ice Cream, Ice Cream Cakes",
//     },
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "Burger Singh (Big Punjabi Burgers)",
//       rating: 4.2,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
//       scheme: "₹125 OFF ABOVE ₹249",
//       place: "Paschim Vihar",
//       cuisine: "Burgers, Snacks, Desserts, Beverages, Fast Food",
//     },
//     {
//       name: "Kwality Walls Frozen Dessert And Ice Cream Shop",
//       rating: 4.5,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/suadiwnc6pcn47vpht7p",
//       scheme: "30% OFF UPTO ₹75",
//       place: "Pitampura",
//       cuisine: "Desserts, Ice Cream, Ice Cream Cakes",
//     },
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "Burger Singh (Big Punjabi Burgers)",
//       rating: 4.2,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
//       scheme: "₹125 OFF ABOVE ₹249",
//       place: "Paschim Vihar",
//       cuisine: "Burgers, Snacks, Desserts, Beverages, Fast Food",
//     },
//     {
//       name: "Kwality Walls Frozen Dessert And Ice Cream Shop",
//       rating: 4.5,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/suadiwnc6pcn47vpht7p",
//       scheme: "30% OFF UPTO ₹75",
//       place: "Pitampura",
//       cuisine: "Desserts, Ice Cream, Ice Cream Cakes",
//     },
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "KFC",
//       rating: 4,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
//       scheme: "20% OFF UPTO ₹50",
//       place: "Pitampura",
//       cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
//     },
//     {
//       name: "Burger Singh (Big Punjabi Burgers)",
//       rating: 4.2,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
//       scheme: "₹125 OFF ABOVE ₹249",
//       place: "Paschim Vihar",
//       cuisine: "Burgers, Snacks, Desserts, Beverages, Fast Food",
//     },
//     {
//       name: "Kwality Walls Frozen Dessert And Ice Cream Shop",
//       rating: 4.5,
//       src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/suadiwnc6pcn47vpht7p",
//       scheme: "30% OFF UPTO ₹75",
//       place: "Pitampura",
//       cuisine: "Desserts, Ice Cream, Ice Cream Cakes",
//     },
//   ];

let addedItems = 0;
let newDataSize = 4;

/**
 * 
 * This is not correct way to introduce async delay as it is busy wait hence it blocks the event loop
export function sleep(delay = 1000) {
  const date = Date.now();

  while (Date.now() < date + delay) {
    // busy wait loop
  }
}
 */
const sleep = (delay = 1000) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export function loadNewData() {
  return new Promise<CardProps[]>(async (resolve, reject) => {
    await sleep(1000);
    let moreRestaurants = Array<CardProps>(0);

    for (let i = addedItems; i < newDataSize + addedItems; i++) {
      moreRestaurants.push({
        id: i + 1,
        name: "KFC",
        rating: 4,
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
        scheme: "20% OFF UPTO ₹50",
        place: "Pitampura",
        cuisine: "Burgers, Biryani, American, Snacks, Fast Food",
      });
    }
    addedItems += newDataSize;
    resolve(moreRestaurants);
  });
}

export function useFetch({ page }: { page: number }) {
  const [restaurants, setRestaurants] = useState<CardProps[]>([]);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<string | null>(null);

  const hasMore = restaurants.length >= 32 ? false : true;

  //   simulating just like API call.
  useEffect(() => {
    setStatus("loading");
    setError(null);
    loadNewData()
      .then((newData) => {
        setRestaurants((prev) => [...prev, ...newData]);
        setStatus("success");
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
      });
  }, [page]);
  return { restaurants, status, error, hasMore };
}
