import React from "react";
import { Letter } from "./Letter";

export const Letters = ({ letterStatus, onLetterClicked }) => {
  return (
    <div className="letters">
      {Object.entries(letterStatus).map(([letter, clicked], idx) => (
        <Letter
          key={idx}
          letter={letter}
          isClicked={clicked}
          onLetterClicked={onLetterClicked}
        />
      ))}
    </div>
  );
};
