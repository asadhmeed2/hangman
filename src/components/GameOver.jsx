import React from "react";

export const GameOver = ({ isSuccess, secretWord, resetGame }) => {
  return (
    <>
      <button onClick={resetGame}>back</button>

      {isSuccess && (
        <div>
          Congratulations{" "}
          <span className="game-over-secret-word">{secretWord}</span> is the
          correct word
        </div>
      )}

      {!isSuccess && (
        <div>
          <div>
            your word is{" "}
            <span className="game-over-secret-word">{secretWord}</span>
          </div>
          <div>good luck next time!</div>
        </div>
      )}
    </>
  );
};
