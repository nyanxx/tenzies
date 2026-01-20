import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  /**
   * Tenzies: Change dice to objects
   * Challenge: Update the array of numbers in state to be
   * an array of objects instead. Each object should look like:
   * { value: <random number>, isHeld: false }
   *
   * Making this change will break parts of our code, so make
   * sure to update things so we're back to a working state
   */

  const [dieProperties, setDieProperties] = React.useState(
    generateAllNewDiceProperty(),
  );

  console.log(dieProperties);
  function generateAllNewDiceProperty() {
    return Array.from({ length: 10 }).map(() => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };
    });
  }

  const dieElements = dieProperties.map((dieProperty) => (
    <Die key={dieProperty.id} value={dieProperty.value} />
  ));

  function handleRoll() {
    console.log("Rolled");
    setDieProperties(generateAllNewDiceProperty());
  }

  // let roll_newgame = "Roll";
  // if (lockedNumbers.length === 10 && new Set(lockedNumbers).size === 1) {
  //   alert("you won");
  //   roll_newgame = "New Game";
  // }

  return (
    <>
      <div className="die-buttons-block">{dieElements}</div>
      <button
        onClick={handleRoll}
        className="roll-newgame-button"
        id="roll-newgame"
      >
        {/* {roll_newgame} */}Roll
      </button>
    </>
  );
}
