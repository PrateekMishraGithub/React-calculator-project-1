import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonclick = (buttonNames) => {
    if (buttonNames === "c") {
      setCalVal("");
    } else if (buttonNames === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonNames;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonclick={onButtonclick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
