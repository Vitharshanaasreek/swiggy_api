import { useState,useEffect } from "react"

const Counter=()=>{
    const [Cnt,setCnt]=useState(0)
    useEffect(()=>{
        console.log('useEffect')
    },[])
    return(
        <>
        <button onClick={()=>setCnt(Cnt+1)}>click!</button>
        </>
    )
}
export default Counter