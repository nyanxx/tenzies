import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  /**
   * Tenzies: Hold dice - part 2
   * Challenge: Update the `hold` function to flip
   * the `isHeld` property on the object in the array
   * that was clicked, based on the `id` prop passed
   * into the function.
   *
   * Hint: as usual, there's more than one way to
   * accomplish this.
   */

  function hold(id) {
    console.log(`Function of "DieBlock" invoked from "Die" with an id: ${id}`);
    setDieProperties((prevArray) => {
      console.log("Clicked");
      return prevArray.map((obj) => {
        if (obj.id === id) {
          obj.isHeld = !obj.isHeld;
          return obj;
        } else {
          return obj;
        }
      });
    });
  }

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

  const dieElements = diePropertiesArray.map((diePropertyObj, index) => (
    <Die
      key={diePropertyObj.id}
      dieProperty={diePropertyObj}
      hold={hold}
      index={index}
    />
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
