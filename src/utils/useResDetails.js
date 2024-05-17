import { useEffect, useState } from "react"

const useresDetails=(id)=>{
    const[details,setdetails]=useState([])
    const[categories,setcategories]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId='+id)
        const json = await res.json()
        const details = json.data.cards[0].card.card.info
        const categories = await json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
        setdetails(details)

        const filteredCategories=categories.filter((item)=>{
            return item.card.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
        setcategories(filteredCategories)

    }
    return {details,categories}
}
export default useresDetails