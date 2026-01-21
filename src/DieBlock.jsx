import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  /**
   * Tenzies: Hold dice - part 1
   * Challenge: Create a function `hold` that takes
   * `id` as a parameter. For now, just have the function
   * console.log(id).
   *
   * Then, figure out how to pass that function down to each
   * instance of the Die component so when each one is clicked,
   * it logs its own unique ID property. (Hint: there's more
   * than one way to make that work, so just choose whichever
   * you want)
   *
   */

  function hold(id) {
    console.log(`Function of "DieBlock" invoked from "Die" with an id: ${id}`);
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
