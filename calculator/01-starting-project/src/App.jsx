import Header from "./Components/Header.jsx"
import Results from "./Components/Results.jsx";
import UserInput from "./Components/UserInput.jsx"

import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  
  return (
    <>
       <Header  />
    
       <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Results input={userInput} /> } 
      {!inputIsValid && <p className="center">Please Enter a duration greater than zero.</p>}
    </>
 
   
  )
}

export default App
