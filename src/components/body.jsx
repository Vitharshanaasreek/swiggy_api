const Body = (props) => {
  const name = "Vithu";
  return (
    <>
      <h1>Body Component</h1>
      <h2>Name===== {name}</h2>
      <h3>Age===== {props.age}</h3>
    </>
  );
};
export default Body;
