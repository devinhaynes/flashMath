import React, { useState, useEffect } from "react";
import "./css/FlashCard.css";

const FlashCard = ({ currentCard, endGame, next }) => {
  let [displayFront, setDisplayFront] = useState(true);

  const { left, right } = currentCard;
  const solution = left * right;

  return (
    <div className="flashCard">
      <div
        className="flashCardFront"
        style={displayFront ? { display: "flex" } : { display: "none" }}
      >
        {`${left} * ${right}`}
      </div>
      <div
        className="flashCardBack"
        style={displayFront ? { display: "none" } : { display: "flex" }}
      >
        {solution}
      </div>
      <button
        className="flashCardBtn"
        id="flashCardFlip"
        onClick={() => setDisplayFront(!displayFront)}
      >
        Flip
      </button>
      <button
        id="flashCardNext"
        className="flashCardBtn"
        onClick={() => {
          next();
          setDisplayFront(true);
        }}
      >
        Next
      </button>
      <button
        id="flashCardEnd"
        className="flashCardBtn"
        onClick={() => endGame(false)}
      >
        End Game
      </button>
    </div>
  );
};

export default FlashCard;
