import React from "react";
import { Letter } from "./Letter";

const letters = ["a"];

export const Letters = () => {
  return (
    <div>
      {letters.map((letter, idx) => (
        <Letter key={idx} letter={letter} />
      ))}
    </div>
  );
};
