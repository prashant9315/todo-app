import ButtonsContainer from "./assets/Components/ButtonsContainer";
import Display from "./assets/Components/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalval] = useState("");

  const buttonclicked = (buttontext) => {
    console.log(buttontext);
    if (buttontext === "C") {
      setCalval("");
    } else if (buttontext === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      const newcalVal = calVal + buttontext;
      setCalval(newcalVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonsContainer onClickbutton={buttonclicked}></ButtonsContainer>
    </div>
  );
}

export default App;
