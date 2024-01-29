import logo from "./logo.svg";
import "./App.css";
import { Solution } from "./components/Solution";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";
import { useState } from "react";

function generateLetterStatuses() {
  let letterStatus = {};
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false;
  }
  return letterStatus;
}

const INITIAL_SCORE = 100;

function App() {
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [solution, setSolution] = useState({ word: "asad", hint: "my name" });
  const [score, setScore] = useState(INITIAL_SCORE);
  const [gameOver, setGameOver] = useState(false);

  const onLetterClicked = (letter) => {
    const lettersClone = { ...letterStatus, [letter]: true };
    if (!solution.word.includes(letter.toLowerCase())) {
      const newScore = score - 20;
      setScore(newScore);

      if (newScore === 0) {
        setGameOver(true);
      }
    }
    setLetterStatus(lettersClone);
  };

  return (
    <div className="App">
      <Score score={score} />
      <Solution lettersStatus={letterStatus} solution={solution} />

      <div>Available Letters</div>
      <Letters letterStatus={letterStatus} onLetterClicked={onLetterClicked} />
    </div>
  );
}

export default App;
