import React from "react";

const WORD = "asad";
const guessedLetters = [];
const hent = "my name";
export const Solution = () => {
  return (
    <div>
      {WORD.split("").map((letter) =>
        guessedLetters.includes(letter) ? ` ${letter} ` : ` _ `
      )}

      <div className="">
        <span>hint:</span> <span>{hent}</span>
      </div>
    </div>
  );
};
