import React from "react";

export const Letter = ({ letter, onLetterClicked, isClicked }) => {
  const handleClick = () => {
    onLetterClicked(letter);
  };
  return (
    <div
      onClick={isClicked ? () => {} : handleClick}
      className={`letter ${isClicked ? "letterClicked" : ""}`}
    >
      {letter}
    </div>
  );
};
