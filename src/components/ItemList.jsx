const ItemList=(props)=>{
    const item=props.item
    return(
        <>
        <div className="item-cont">
            <div className="nandp"><h5>{item.card.info.name}-${item.card.info.price/100}</h5></div><br></br>
            <div className="desc"><p>{item.card.info.description}</p></div>
         </div>
        
        </>
    )
}
export default ItemList