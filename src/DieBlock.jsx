import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  let gameWon = false;

  const [diePropertiesArray, setDiePropertiesArray] = React.useState(
    generateDicePropertyArray(),
  );

  /**
   * Tenzies: End game - part 2
   * Challenge:
   * Log "Game won!" to the console only if the 2 winning
   * conditions are met.
   *
   * 1. all the dice are being held, and
   * 2. all the dice have the same value
   *
   * For now, no need to even save a variable!
   */

  /**
   * Tenzies: End game - part 2
   * Challenge part 2:
   * 1. Create a new `gameWon` variable.
   * 2. If `gameWon` is true, change the button text to
   *    "New Game" instead of "Roll"
   */

  if (
    diePropertiesArray.every((obj) => obj.isHeld) &&
    diePropertiesArray.every((obj) => obj.value === diePropertiesArray[0].value)
  ) {
    console.log("Game won");
    gameWon = true;
  }

  // const heldValues = diePropertiesArray
  //   .map((obj) => {
  //     return obj.isHeld ? obj.value : undefined;
  //   })
  //   .filter(Boolean);
  // if (heldValues.length === 10 && new Set(heldValues).size === 1) {
  //   gameWon = true;
  // }

  function hold(id) {
    // console.log(`Function of "DieBlock" invoked from "Die" with an id: ${id}`);
    setDiePropertiesArray((prevArray) =>
      prevArray.map((obj) =>
        obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj,
      ),
    );
  }

  function generateDicePropertyArray() {
    return Array.from({ length: 10 }).map(() => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };
    });
  }

  function roleDice() {
    if (gameWon) {
      console.log("New game started");
      setDiePropertiesArray(generateDicePropertyArray());
    } else {
      console.log("Dice rolled");
      setDiePropertiesArray((prevArray) => {
        return prevArray.map((obj) => {
          return obj.isHeld === true
            ? obj
            : { ...obj, value: Math.ceil(Math.random() * 6) };
        });
      });
    }
  }

  const dieElements = diePropertiesArray.map((diePropertyObj, index) => (
    <Die
      key={diePropertyObj.id}
      dieProperty={diePropertyObj}
      hold={hold}
      index={index}
    />
  ));

  return (
    <>
      <div className="die-buttons-block">{dieElements}</div>
      <button onClick={roleDice} className="roll-newgame-button">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </>
  );
}
