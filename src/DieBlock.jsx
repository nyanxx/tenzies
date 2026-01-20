import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  /**
   * Tenzies: Styling held dice
   * Challenge: Add conditional styling to the Die component
   * so that if it's held (isHeld === true), its background color
   * changes to a light green (#59E391)
   *
   * Remember: currently the Die component has no way of knowing
   * if it's "held" or not.
   */

  const [diePropertiesArray, setDieProperties] = React.useState(
    generateDicePropertyArray(),
  );

  function generateDicePropertyArray() {
    return Array.from({ length: 10 }).map(() => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };
    });
  }

  const dieElements = diePropertiesArray.map((diePropertyObj) => (
    <Die key={diePropertyObj.id} dieProperty={diePropertyObj} />
  ));

  function handleRoll() {
    console.log("Rolled");
    setDieProperties(generateDicePropertyArray());
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
