import { useState } from "react";

function App() {
  
  //let counter = 10

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter <20){
      console.log("Value Added: ", counter);
      counter += 1;
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      console.log("value removed:", counter);
      setCounter(counter-1)
    }
  }
  
  return (
    <>
    <h1> React Projects </h1>
    <h2> Counter Value: {counter}</h2>
    <button onClick={addValue}> Add Value </button>
    <br/>
    <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
