import Items from "./Items";
const Fooditems = ({ llm }) => {
  return (
    <>
      {" "}
      <ul class="list-group">
        {llm.map((item) => (
          <Items
            key={item}
            kkp={item}
            handleBuybutton={() => console.log("clicked")}
          ></Items>
        ))}
      </ul>
    </>
  );
};
export default Fooditems;
