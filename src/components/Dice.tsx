import type { JSX, Dispatch, SetStateAction } from "react"
import Die from "./Die";
import type { DieProperty } from "../utils/utils";

type DiceProp = {
  dieProperties: DieProperty[]
  setDieProperties: Dispatch<SetStateAction<DieProperty[]>>
}

export default function Dice(props: DiceProp): JSX.Element {

  function hold(id: string): void {
    props.setDieProperties((prevArray: DieProperty[]): DieProperty[] =>
      prevArray.map((obj) =>
        obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj,
      ),
    );
  }

  const dieElements: JSX.Element[] = props.dieProperties.map((die: DieProperty, index: number): JSX.Element => (
    <Die
      key={die.id}
      dieProperty={die}
      hold={hold}
      index={index}
    />
  ));

  return <div className="die-buttons-block">{dieElements}</div>;
}
