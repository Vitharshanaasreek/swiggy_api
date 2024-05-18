import ItemList from "./ItemList";

const ItemCategory = (props) => {
  const category = props.categories;
  return (
    <>
      <div className="category">
        <div style={{ width: "600px" }}>
          <h3>{category.card.card.title}</h3>
        </div>
        {category.card.card.itemCards.map((item) => {
          return <ItemList item={item} />;
        })}
      </div>
    </>
  );
};
export default ItemCategory;
