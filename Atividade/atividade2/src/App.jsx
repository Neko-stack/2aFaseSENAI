import { useState } from "react";
import Exercicio523 from "./components/Exercicio523";
import Exercicio524 from "./components/Exercicio524";
import Exercicio525 from "./components/Exercicio525";
import Exercicio529 from "./components/Exercicio529";
import Exercicio530 from "./components/Exercicio530";
import Exercicio531 from "./components/Exercicio531";
import "./App.css";

function App() {
  const [tab, setTab] = useState("523");

  return (
    <div className="container">
      <h1>Lista de Exercícios React</h1>

      {/* Menu de abas */}
      <div className="tabs">
        {["523","524","525","529","530","531"].map((t) => (
          <button
            key={t}
            className={tab === t ? "active" : ""}
            onClick={() => setTab(t)}
          >
            Exercício {t}
          </button>
        ))}
      </div>

      {/* Conteúdo das abas */}
      {tab === "523" && <Exercicio523 />}
      {tab === "524" && <Exercicio524 />}
      {tab === "525" && <Exercicio525 />}
      {tab === "529" && <Exercicio529 />}
      {tab === "530" && <Exercicio530 />}
      {tab === "531" && <Exercicio531 />}
    </div>
  );
}

export default App;