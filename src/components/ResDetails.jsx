import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCategory from "./ItemCategory"
import useresDetails from "../utils/useResDetails"

const ResDetails=()=>{
    const  params  = useParams()
    const {details,categories}=useresDetails(params.id)
    if(Object.keys(details).length==0)
    {
        return(
            <><h1>Loading....</h1></>
        )
    }
    return(
        <>
        <div className="men-cont">
            <div className="hot-name">
            <h2>{details.name}</h2>
            <p>{details.cuisines.join(', ')}</p>
            <p>{details.areaName}</p>
            </div>
            
            {categories.map((categories)=>{
                return(<ItemCategory key={categories.card.card.title} categories={categories}/>)
            })}
        </div>
     
        </>
    )
}
export default ResDetails