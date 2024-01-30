import logo from "./logo.svg";
import "./App.css";
import { Solution } from "./components/Solution";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";
import { useState } from "react";
import { GameOver } from "./components/GameOver";

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
  const [isSuccess, setIsSuccess] = useState(false);

  const checkIfWordIsGuessed = (lettersStatusClone) => {
    let isGuessed = true;
    solution.word.split("").forEach((letter) => {
      if (!lettersStatusClone[letter.toUpperCase()]) {
        isGuessed = false;
      }
    });

    return isGuessed;
  };

  const selectLetter = (letter) => {
    if (gameOver) {
      return;
    }

    const lettersClone = { ...letterStatus, [letter]: true };

    if (checkIfWordIsGuessed(lettersClone)) {
      setIsSuccess(true);
      setGameOver(true);
    }

    if (!solution.word.includes(letter.toLowerCase())) {
      const newScore = score - 20;

      if (newScore >= 0) {
        setScore(newScore);
      }

      if (newScore <= 0) {
        setGameOver(true);
      }
    } else {
      const newScore = score + 5;
      if (newScore <= 100) {
        setScore(newScore);
      }
    }
    setLetterStatus(lettersClone);
  };

  const resetGame = () => {
    setIsSuccess(false);
    setGameOver(false);
    setLetterStatus(generateLetterStatuses());
    setScore(INITIAL_SCORE);
  };

  return (
    <div className="App">
      {!gameOver && (
        <>
          <Score score={score} />
          <Solution lettersStatus={letterStatus} solution={solution} />

          <div>Available Letters</div>
          <Letters letterStatus={letterStatus} onLetterClicked={selectLetter} />
        </>
      )}
      {gameOver && (
        <GameOver
          secretWord={solution.word}
          isSuccess={isSuccess}
          resetGame={resetGame}
        />
      )}
    </div>
  );
}

export default App;
