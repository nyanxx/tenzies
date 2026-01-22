import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function DieBlock() {
  function generateDicePropertyArray() {
    return Array.from({ length: 10 }).map(() => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };
    });
  }

  const [diePropertiesArray, setDiePropertiesArray] = useState(() =>
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

  function rollDice() {
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

  const rollButton = useRef("null");
  useEffect(() => {
    gameWon && rollButton.current.focus();
  }, [gameWon]);

  return (
    <>
      {gameWon && <Confetti />}
      {gameWon && (
        <div aria-live="polite" className="screen-reader-only">
          You won the game, congratulation!
        </div>
      )}
      <div className="die-buttons-block">{dieElements}</div>
      <button
        ref={rollButton}
        onClick={rollDice}
        className="roll-newgame-button"
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </>
  );
}
