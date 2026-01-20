import DieBlock from "./DieBlock";
export default function App() {
  /**
   *
   * Tenzies - Die component challenge
   *
   * - Create a Die component that takes a `value` prop. Should
   *   render a button with that value displayed.
   * - Render 10 instances of the Die component (manually)
   *      - Provide a number between 1-6 for the value on each
   *        for now
   * - Style the <main> and <Die> components
   *   to look like they do in the slide
   *      - Hints: Create a container to hold the 10 instances
   *        of the Die component, and use CSS Grid to lay them
   *        out evenly in 2 rows of 5 columns
   *      - Use flexbox on main to center the dice container
   *        in the center of the page
   */

  return (
    <main className="white-card">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are same. Click each die to freeze it at its current
        value between rolls.
      </p>
      <DieBlock />
    </main>
  );
}
