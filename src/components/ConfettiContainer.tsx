import Confetti from "react-confetti";
import type { JSX } from "react";
type ConfettiConatinerProps = {
    gameWon: boolean
}
export default function ConfettiConatiner(props: ConfettiConatinerProps): JSX.Element | null {
    if (!props.gameWon) {
        return null
    } else {
        return <Confetti />
    }
}