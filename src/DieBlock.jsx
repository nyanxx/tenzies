import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function DieBlock() {
  /**
   * Tenzies - End game part 3
   * Challenge:
   * Make the confetti drop when the game is won! 🎉🎊
   */

  const [diePropertiesArray, setDiePropertiesArray] = React.useState(
    generateDicePropertyArray(),
  );

  const gameWon =
    diePropertiesArray.every((obj) => obj.isHeld) &&
    diePropertiesArray.every(
      (obj) => obj.value === diePropertiesArray[0].value,
    );

  function hold(id) {
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
      {gameWon && <Confetti />}
      <div className="die-buttons-block">{dieElements}</div>
      <button onClick={roleDice} className="roll-newgame-button">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </>
  );
}
