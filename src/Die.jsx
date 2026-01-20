import React from "react";

export default function Die(props) {
  function holdIt() {
    console.log(`${props.dieProperty.value} hold in console`);
    // Need to access diePropertiesArray -> Object specific to this die
    // And change it's isHeld property to true
  }

  const style = {
    backgroundColor: props.dieProperty.isHeld ? "#59e391" : "White",
  };

  return (
    <div className="die" style={style} onClick={holdIt}>
      {props.dieProperty.value}
    </div>
  );
}
