import ResCard from "./ResCard"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi";

// const restaurants=[{"id": "324129",
// "name": "Hmr - Grand Kitchen",
// "cloudinaryImageId": "sxo9ssdzcunquvtrcvc6",
// "locality": "Dr Nanjappa Road",
// "areaName": "Gandhipuram",
// "costForTwo": "₹300 for two",
// "cuisines": [
//   "Biryani",
//   "South Indian",
//   "North Indian",
//   "Chinese",
//   "Tandoor"
// ],
// "avgRating": 4.4,
// "parentId": "96262",
// "avgRatingString": "4.4",
// "totalRatingsString": "5K+",},
// {"id": "348158",
// "name": "Covai Anganan Biriyani House",
// "cloudinaryImageId": "riylxbx0j4kzeii1sef7",
// "locality": "VCV Layout",
// "areaName": "RS Puram",
// "costForTwo": "₹300 for two",
// "cuisines": [
//   "Biryani",
//   "South Indian",
//   "Chinese"
// ],
// "avgRating": 4.3,
// "parentId": "230662",
// "avgRatingString": "4.3",
// "totalRatingsString": "1K+"},
// {
//     id: "593177",
//     name: "OYALO Pizza",
//     cloudinaryImageId: "9447ea0092fbf071884e45227f661880",
//     locality: "Periyar Nagar",
//     areaName: "TN COIMBATORE HOPECOLLEGE",
//     costForTwo: "₹350 for two",
//     cuisines: ["Pizzas", "Beverages", "Pastas", "Desserts"],
//     avgRating: 4,
//     parentId: "8699",
//     avgRatingString: "4.0",
//     totalRatingsString: "100+",
//   },
//   {
//     id: "51722",
//     name: "Hidden Fork",
//     cloudinaryImageId: "jvrjizi9yee3scvxphk2",
//     locality: "Avinash Road",
//     areaName: "Peelamedu",
//     costForTwo: "₹400 for two",
//     cuisines: ["Desserts", "Beverages"],
//     avgRating: 4.4,
//     parentId: "18447",
//     avgRatingString: "4.4",
//     totalRatingsString: "5K+",
//   },
// ]
const ResContainer = () => {

  const [restaurants, setrestaurants] = useState([])
  const [search, setsearch] = useState('')
  const [List, setList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await res.json()
    setrestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // const listingData = json.data.cards.find(item => item.card.card.id === "restaurant_grid_listing")
    // const restaurantsArr = res.card.card.gridElements.infoWithStyle.restaurants
    // setrestaurants(restaurantsArr)
    // setList(restaurantsArr)
  }
  if (restaurants.length == 0) {
    return(
      <div className="loading"><h1>Loading...</h1></div>
    )
  }
  // const handleupdate=(e)=>{
  //   setsearch(e.target.value)
  // }
  const handlesearch = (e) => {
    setsearch(e.target.value)
    const result = restaurants.filter((res) => {
    const resName = res.info.name.toLowerCase()
    return resName.includes(e.target.value.toLowerCase())
    })
    console.log(result)
    setList(result)
  }

  const handlefilter = () => {
    const result = List.filter((res) => {
      return res.info.avgRating >= 4.5
    })
    setList(result)
  }

  return (
    <>
      <div className="search-cont"><input value={search} onChange={handlesearch} placeholder="Search your fav food!..."></input>
        <div className="icon"><FiSearch /></div></div>
      <div><button className="filter" onClick={handlefilter}>Top rated!</button></div>
      <div className="hotel">
        {List.map((x) => {
          return <ResCard key={x.info.id} restaurants={x.info} />
        })}
      </div>
    </>
  )
}
export default ResContainer