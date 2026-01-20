import React from "react";
import Die from "./Die";

export default function DieBlock() {
  //   const [rolled, setRolled] = React.useState(true)
  const [rolled, setRolled] = React.useState(0);
  const [lockedNumbers, setLockedNumbers] = React.useState([]);

  /**
   * Tenzies: Map array to Die components
   * Challenge:
   *
   * Create state to hold our array of numbers. (Initialize
   * the state by calling our `generateAllNewDice` function so it
   * loads all new dice as soon as the app loads)
   *
   * Map over the state numbers array to generate our array
   * of Die components and render those in place of our
   * manually-written 10 Die elements.
   */

  const [randomArr, setRandomArr] = React.useState(generateAllNewDice());
  console.log(randomArr);
  function generateAllNewDice() {
    return Array.from({ length: 10 }).map(() => Math.ceil(Math.random() * 6));
  }

  // React.useEffect(() => {
  //   setRandomArr(generateAllNewDice());
  // }, [rolled]);

  /** map over dice here */
  const dieElements = randomArr.map((dieNum, index) => (
    <Die
      key={index}
      setLockedNumbers={setLockedNumbers}
      randomNumber={dieNum}
      rolled={rolled}
    />
  ));

  function handleRoll() {
    console.log("Rolled");
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
