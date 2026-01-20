import React from "react";
import Die from "./Die";

export default function DieBlock() {
  //   const [rolled, setRolled] = React.useState(true)
  const [rolled, setRolled] = React.useState(0);
  const [lockedNumbers, setLockedNumbers] = React.useState([]);

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
        {Array.from({ length: 10 }).map((_, index) => (
          <Die
            key={index}
            setLockedNumbers={setLockedNumbers}
            randomNumber={Math.floor(Math.random() * 10)}
            rolled={rolled}
          />
        ))}
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
