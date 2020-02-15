import React, { useState } from "react";
import "./css/App.css";
import FlashCard from "./FlashCard.js";
import Selector from "./Selector";

function App() {
  const [sets, setSets] = useState([]);
  const [range, setRange] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [gameStarted, setGameStarted] = useState(false);

  function beginGame(gameData) {
    setSets(gameData.sets);
    setRange(gameData.range);
    const min = Math.ceil(parseInt(gameData.range[0]));
    const max = Math.floor(parseInt(gameData.range[1]));
    setCurrentCard({
      left: gameData.sets[Math.floor(Math.random() * gameData.sets.length)],
      right: Math.floor(Math.random() * (max - min)) + min
    });
    setGameStarted(true);
  }

  function next() {
    const min = Math.ceil(parseInt(range[0]));
    const max = Math.floor(parseInt(range[1]));
    setCurrentCard({
      left: sets[Math.floor(Math.random() * sets.length)],
      right: Math.floor(Math.random() * (max - min)) + min
    });
  }

  return (
    <div className="App">
      <h1>FlashMath!</h1>
      {gameStarted ? (
        <FlashCard
          currentCard={currentCard}
          endGame={setGameStarted}
          next={next}
        />
      ) : (
        <Selector beginGame={beginGame} />
      )}
    </div>
  );
}

export default App;
