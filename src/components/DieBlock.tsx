import { useState, useRef, useEffect } from "react";
import type { JSX } from "react";
import ConfettiConatiner from "./ConfettiContainer";
import AriaLive from "./AriaLive";
import Dice from "./Dice";
import GameButton from "./GameButton";
import { getDieProperties } from "../utils/utils";
import type { DieProperty } from "../utils/utils";

export default function DieBlock(): JSX.Element {
  // State values
  const [dieProperties, setDieProperties] = useState<DieProperty[]>((): DieProperty[] =>
    getDieProperties(),
  );

  // Derived values
  const gameWon: boolean =
    dieProperties.every((obj) => obj.isHeld) &&
    dieProperties.every(
      (obj) => obj.value === dieProperties[0].value,
    );

  // Functions
  function rollDice(): void {
    if (gameWon) {
      console.log("New game started");
      setDieProperties(getDieProperties());
    } else {
      console.log("Dice rolled");
      setDieProperties((prevArray: DieProperty[]): DieProperty[] => {
        return prevArray.map((die: DieProperty): DieProperty => {
          return die.isHeld === true
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) };
        });
      });
    }
  }

  const rollButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (gameWon && rollButton.current) {
      rollButton.current.focus();
    }
  }, [gameWon]);

  return (
    <>
      <ConfettiConatiner gameWon={gameWon} />
      <AriaLive gameWon={gameWon} />
      <Dice dieProperties={dieProperties} setDieProperties={setDieProperties} />
      <GameButton
        ref={rollButton}
        rollDice={rollDice}
        gameWon={gameWon}
      />
    </>
  );
}
