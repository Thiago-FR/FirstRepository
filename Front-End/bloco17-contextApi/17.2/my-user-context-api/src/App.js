import React, { useContext } from "react";
import MyContext from "./MyContext";

function App() {
  const { stateA, stateB, setStateA, setStateB } = useContext(MyContext);
  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newStateA")}>ClickA</button>
      <button onClick={() => setStateB("newStateB")}>ClickB</button>
    </div>
  );
}

export default App;
