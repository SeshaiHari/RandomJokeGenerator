import { useState, useRef } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Greedy");
  const [lastName, setLastName] = useState("Craven ");

  const joke = useRandomJoke(firstName, lastName);
  //custom hooks
  // const joke = useRandomJoke("Seshai", "Hari");

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <h1>The Joke Generator</h1>
      <h2>{joke}</h2>
      <form>
        <input placeholder="First Name" ref={firstNameRef} />
        <input placeholder="Last Name" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
