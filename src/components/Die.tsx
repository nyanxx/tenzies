import type { JSX } from "react";
import type { DieProperty } from "../utils/utils";

type DieProps = {
  key: string,
  dieProperty: DieProperty
  hold: (id: string) => void
  index: number
}

export default function Die(props: DieProps): JSX.Element {
  function handleClick(): void {
    props.hold(props.dieProperty.id);
  }

  const style: { backgroundColor: string } = {
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
