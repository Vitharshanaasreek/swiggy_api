import { useEffect, useState } from "react";

const useresDetails = (id) => {
  const [details, setdetails] = useState([]);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.518&lng=88.3832&restaurantId=" +
        id
    );
    const json = await res.json();
    const details = json.data.cards[0].card.card.text;
    console.log("details in", json.data.cards[0].card.card);

    const categories = await json.data.cards[4].groupedCard.cardGroupMap.REGULAR
      .cards;
    setdetails(details);

    const filteredCategories = categories.filter((item) => {
      return (
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
    setcategories(filteredCategories);
  };
  console.log("details ", details);
  return { details, categories };
};
export default useresDetails;
