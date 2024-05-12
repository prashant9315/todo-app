import ErrorMessage from "./assets/Components/ErrorMessage";
import Fooditems from "./assets/Components/Fooditems";
import Container from "./assets/Components/Container";
import FoodInput from "./assets/Components/FoodInput";
import { useState } from "react";

function App() {
  let [fooditems, setFoodItems] = useState(["milk"]);

  let OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newfood = event.target.value;
      event.target.value = "";
      let newfooditems = [...fooditems, newfood];
      setFoodItems(newfooditems);
    }
  };
  return (
    <Container>
      <center>
        <h1>Healthy Food</h1>
      </center>

      <FoodInput handleOnKey={OnKeyDown}></FoodInput>

      <ErrorMessage llm={fooditems}></ErrorMessage>
      <Fooditems llm={fooditems}></Fooditems>
    </Container>
  );
}

export default App;
