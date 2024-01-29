import React from "react";

export const Solution = ({ lettersStatus, solution }) => {
  return (
    <div>
      {solution.word
        .split("")
        .map((letter) =>
          lettersStatus[letter.toUpperCase()]
            ? ` ${letter.toLowerCase()} `
            : ` _ `
        )}

      <div className="">
        <span>hint:</span> <span>{solution.hint}</span>
      </div>
    </div>
  );
};
