import type { JSX } from "react";
import Header from "./components/Header";
import DieBlock from "./components/DieBlock";
export default function App(): JSX.Element {
  return (
    <main className="white-card">
      <Header />
      <DieBlock />
    </main>
  );
}
