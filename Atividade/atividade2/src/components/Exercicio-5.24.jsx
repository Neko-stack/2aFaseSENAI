import { useState } from "react";
import "../App.css";

export default function Exercicio524() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [media, setMedia] = useState(null);
  const [conceito, setConceito] = useState("");

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0 || n1 > 10 || n2 > 10) {
      alert("Digite notas válidas entre 0 e 10!");
      return;
    }

    const m = (n1 + n2) / 2;
    let c = "";

    if (m >= 9) c = "A";
    else if (m >= 7.5) c = "B";
    else if (m >= 6) c = "C";
    else if (m >= 4) c = "D";
    else c = "E";

    setMedia(m.toFixed(2));
    setConceito(c);
  };

  return (
    <div className="card">
      <h2>Exercício 5.24</h2>
      <label>
        Nota 1:
        <input
          type="number"
          step="0.1"
          value={nota1}
          onChange={(e) => setNota1(e.target.value)}
        />
      </label>
      <label>
        Nota 2:
        <input
          type="number"
          step="0.1"
          value={nota2}
          onChange={(e) => setNota2(e.target.value)}
        />
      </label>
      <button onClick={calcularMedia}>Calcular Média</button>

      {media && (
        <div className="resultado">
          <p>Nota 1: {nota1}</p>
          <p>Nota 2: {nota2}</p>
          <p>Média: {media}</p>
          <p>Conceito: {conceito}</p>
        </div>
      )}
    </div>
  );
}