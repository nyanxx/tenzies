import DieBlock from "./DieBlock";
export default function App() {
  return (
    <main className="white-card">
      <h1>Tenzies</h1>
      <p>
        Roll untill all dice are same. Click each die to freeze it at it's
        current vlaue between rolls.
      </p>
      <DieBlock />
    </main>
  );
}
