import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  function hold(id) {
    console.log(`Function of "DieBlock" invoked from "Die" with an id: ${id}`);

    setDieProperties((prevArray) =>
      prevArray.map((obj) =>
        obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj,
      ),
    );
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

  /**
   * Tenzies: Hold dice - part 3
   * Challenge: Update the `rollDice` function to not just roll
   * all new dice, but instead to look through the existing dice
   * to NOT role any that are being `held`.
   *
   * Hint: this will look relatively similiar to the `hold`
   * function below. When we're "rolling" a die, we're really
   * just updating the `value` property of the die object.
   */

  function roleDice() {
    console.log("Dice rolled");
    // setDieProperties(generateDicePropertyArray());
    setDieProperties((prevArray) => {
      return prevArray.map((obj) => {
        return obj.isHeld === true
          ? obj
          : { ...obj, value: Math.ceil(Math.random() * 6) };
      });
    });
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
        onClick={roleDice}
        className="roll-newgame-button"
        id="roll-newgame"
      >
        {/* {roll_newgame} */}Roll
      </button>
    </>
  );
}
