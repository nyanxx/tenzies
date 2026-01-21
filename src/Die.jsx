import React from "react";

export default function Die(props) {
  function handleClick() {
    props.hold(props.dieProperty.id);
    console.log(props.dieProperty);
  }

  const style = {
    backgroundColor: props.dieProperty.isHeld ? "#59e391" : "White",
  };

  return (
    <div className="die" style={style} onClick={handleClick}>
      {props.dieProperty.value}
    </div>
  );
}
