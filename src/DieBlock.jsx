import React from "react";
import Die from "./Die";

export default function DieBlock() {
  //   const [rolled, setRolled] = React.useState(true)
  const [rolled, setRolled] = React.useState(0);
  const [lockedNumbers, setLockedNumbers] = React.useState([]);

  const [randomArr, setRandomArr] = React.useState(generateAllNewDice());
  console.log(randomArr);
  function generateAllNewDice() {
    return Array.from({ length: 10 }).map(() => Math.ceil(Math.random() * 6));
  }

  /** map over dice here */
  const dieElements = randomArr.map((dieNum, index) => (
    <Die
      key={index}
      setLockedNumbers={setLockedNumbers}
      randomNumber={dieNum}
      rolled={rolled}
    />
  ));

  /**
   * Tenzies: Roll dice button
   * Challenge: Create a `Roll Dice` button that will re-roll
   * all 10 dice
   *
   * Clicking the button should generate a new array of numbers
   * and set the `dice` state to that new array (thus re-rendering
   * the array to the page)
   */

  function handleRoll() {
    console.log("Rolled");
    setRandomArr(generateAllNewDice());
    // setRolled((prevState) => !prevState);
    setRolled((prevState) => prevState + 1);
  }

  let roll_newgame = "Roll";
  if (lockedNumbers.length === 10 && new Set(lockedNumbers).size === 1) {
    alert("you won");
    roll_newgame = "New Game";
  }

  // timer
  //   console.log(lockedNumbers);

  return (
    <>
      <div className="die-buttons-block">
        {dieElements}
        {/* {Array.from({ length: 10 }).map((_, index) => (
          <Die
            key={index}
            setLockedNumbers={setLockedNumbers}
            randomNumber={Math.ceil(Math.random() * 6)}
            rolled={rolled}
          />
        ))} */}
      </div>
      <button
        onClick={handleRoll}
        className="roll-newgame-button"
        id="roll-newgame"
      >
        {roll_newgame}
      </button>
    </>
  );
}
