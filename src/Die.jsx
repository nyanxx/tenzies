import React from "react";

export default function Die(props) {
  function handleClick() {
    props.hold(props.dieProperty.id);
  }

  const style = {
    backgroundColor: props.dieProperty.isHeld ? "#59e391" : "White",
  };

  return (
    <button
      className="die"
      style={style}
      onClick={handleClick}
      // aria-pressed={props.dieProperty.isHeld}
      aria-label={`Die with value ${props.dieProperty.value} ${props.dieProperty.isHeld ? "is held" : "not held"} `}
    >
      {props.dieProperty.value}
    </button>
  );
}
