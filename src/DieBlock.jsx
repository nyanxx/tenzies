import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  let gameWon = false;

  const [diePropertiesArray, setDiePropertiesArray] = React.useState(
    generateDicePropertyArray(),
  );

  const heldValues = diePropertiesArray
    .map((obj) => {
      return obj.isHeld ? obj.value : undefined;
    })
    .filter(Boolean);
  if (heldValues.length === 10 && new Set(heldValues).size === 1) {
    gameWon = true;
  }

  function hold(id) {
    console.log(`Function of "DieBlock" invoked from "Die" with an id: ${id}`);

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
    console.log("Dice rolled");
    if (gameWon) {
      setDiePropertiesArray(generateDicePropertyArray());
    } else {
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
