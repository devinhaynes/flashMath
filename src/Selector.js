import React from "react";
import "./css/Selector.css";

const Selector = ({ beginGame }) => {
  let minRange,
    maxRange,
    sets = [];

  const handleSetsSelection = e => {
    let value = parseInt(e.target.value);
    let newSets = [];
    if (sets.includes(value)) {
      sets.map(item => {
        if (item !== value) {
          newSets.push(item);
        }
      });
    } else {
      newSets = sets;
      newSets.push(value);
    }
    sets = newSets;
  };

  const handleMinRange = e => (minRange = e.target.value);

  const handleMaxRange = e => (maxRange = e.target.value);

  return (
    <div className="selector">
      <div id="sets">
        <p>What numbers are you studying?</p>
        <form
          id="setsForm"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="checkbox"
            name="ones"
            id="onesCheckbox"
            value="1"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="onesCheckbox">1's</label>
          <input
            type="checkbox"
            name="twos"
            id="twosCheckbox"
            value="2"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="twosCheckbox">2's</label>
          <input
            type="checkbox"
            name="threes"
            id="threesCheckbox"
            value="3"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="threesCheckbox">3's</label>
          <input
            type="checkbox"
            name="fours"
            id="foursCheckbox"
            value="4"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="foursCheckbox">4's</label>
          <input
            type="checkbox"
            name="fives"
            id="fivesCheckbox"
            value="5"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="fivesCheckbox">5's</label>
          <input
            type="checkbox"
            name="sixes"
            id="sixesCheckbox"
            value="6"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="sixesCheckbox">6's</label>
          <input
            type="checkbox"
            name="sevens"
            id="sevensCheckbox"
            value="7"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="sevensCheckbox">7's</label>
          <input
            type="checkbox"
            name="eights"
            id="eightsCheckbox"
            value="8"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="eightsCheckbox">8's</label>
          <input
            type="checkbox"
            name="nines"
            id="ninesCheckbox"
            value="9"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="ninesCheckbox">9's</label>
          <input
            type="checkbox"
            name="tens"
            id="tensCheckbox"
            value="10"
            onChange={e => handleSetsSelection(e)}
          />
          <label htmlFor="tensCheckbox">10's</label>
        </form>
      </div>
      <div id="range">
        <p>Select the range in which the sets will be multiplied</p>
        <div>
          <label htmlFor="minRange">Minimum Range</label>
          <input
            type="number"
            name="minRange"
            id="minRange"
            onChange={e => handleMinRange(e)}
          />
        </div>
        <div>
          <label htmlFor="maxRange">Maximum Range</label>
          <input
            type="number"
            name="maxRange"
            id="maxRange"
            onChange={e => handleMaxRange(e)}
          />
        </div>
      </div>
      <div className="buttonBox">
        <button
          id="selectorBtn"
          onClick={() => {
            let range = [minRange, maxRange];
            let gameData = {
              sets,
              range
            };
            beginGame(gameData);
          }}
        >
          Begin!
        </button>
      </div>
    </div>
  );
};

export default Selector;
