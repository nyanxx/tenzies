import type { JSX } from "react"

export default function Header(): JSX.Element {
    return (
        <header>
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are same. Click each die to freeze it at its current
                value between rolls.
            </p>
        </header>
    )
}