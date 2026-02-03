import type { JSX } from "react"
type AriaLiveProps = {
    gameWon: boolean
}
export default function AriaLive(props: AriaLiveProps): JSX.Element | null {
    return (
        props.gameWon ? (
            <div aria-live="polite" className="screen-reader-only">
                You won the game, congratulation!
            </div>
        ) : null
    )
}