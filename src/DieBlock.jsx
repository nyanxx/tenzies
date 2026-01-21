import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function DieBlock() {
  function hold(id) {
    console.log(`Function of "DieBlock" invoked from "Die" with an id: ${id}`);

    setDiePropertiesArray((prevArray) =>
      prevArray.map((obj) =>
        obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj,
      ),
    );
  }

  const [diePropertiesArray, setDiePropertiesArray] = React.useState(
    generateDicePropertyArray(),
  );

  const [gameWon, setGameWon] = React.useState(false);

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

  function roleDice() {
    console.log("Dice rolled");
    if (gameWon) {
      setDiePropertiesArray(generateDicePropertyArray());
      setGameWon(false);
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

  React.useEffect(() => {
    const heldValues = diePropertiesArray
      .map((obj) => {
        return obj.isHeld ? obj.value : undefined;
      })
      .filter(Boolean);
    // const heldValues = heldValuesMix.filter(Boolean);
    if (heldValues.length === 10 && new Set(heldValues).size === 1) {
      setGameWon(true);
    }
  }, [diePropertiesArray]);

  return (
    <>
      <div className="die-buttons-block">{dieElements}</div>
      <button onClick={roleDice} className="roll-newgame-button">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </>
  );
}
