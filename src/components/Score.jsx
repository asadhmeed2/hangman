import React from "react";

const HIGH_SCORE_BOTTOM = 80;
const MEDIUM_SCORE_BOTTOM = 50;

export const Score = ({ score }) => {
  const highScore = score > HIGH_SCORE_BOTTOM;
  const medScore = score <= HIGH_SCORE_BOTTOM && score > MEDIUM_SCORE_BOTTOM;

  return (
    <div
      className={
        highScore ? "high-score" : medScore ? "med-score" : "low-score"
      }
    >
      {score}
    </div>
  );
};
