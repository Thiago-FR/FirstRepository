import React, { useState } from "react";
import MyContext from './MyContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('InitialStateA');
  const [stateB, setStateB] = useState('InitialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  }

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  )
};

export default Provider;