import { forwardRef } from "react";
import type { JSX, Ref } from "react";

type GameButtonProps = {
    rollDice: () => void
    gameWon: boolean
}

const GameButton = forwardRef<HTMLButtonElement, GameButtonProps>(
    (props: GameButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
        return (
            <button
                ref={ref}
                onClick={props.rollDice}
                className="roll-newgame-button"
            >
                {props.gameWon ? "New Game" : "Roll"}
            </button>
        )
    }
)

export default GameButton