import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const customarray = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handlesearch = () => {
    const foundWord = customarray.find(
      (words) => words.word.toLowerCase() === input.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          placeholder="Search for a word"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handlesearch}>Search</button>
      </div>
      <h4>Definition:</h4>
      <p>{result}</p>
    </div>
  );
}

export default App;
