import { useState } from "react";
import "../App.css";

export default function Exercicio530() {
  const [num, setNum] = useState("");
  const [resultado, setResultado] = useState("");

  const verificar = () => {
    const n = parseInt(num);
    if (isNaN(n)) {
      alert("Digite um número válido!");
      return;
    }

    if (n % 2 === 0 && n > 0) {
      setResultado("O número é par e positivo!");
    } else {
      setResultado("O número NÃO é ao mesmo tempo par e positivo.");
    }
  };

  return (
    <div className="card">
      <h2>Exercício 5.30 - Dois copos meio cheios</h2>
      <label>
        Número:
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </label>
      <button onClick={verificar}>Verificar</button>
      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}