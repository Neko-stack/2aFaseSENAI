import { useState } from "react";
import "../App.css";

export default function Exercicio529() {
  const [num, setNum] = useState("");
  const [resultado, setResultado] = useState("");

  const verificar = () => {
    const n = parseFloat(num);
    if (isNaN(n)) {
      alert("Digite um número válido!");
      return;
    }
    if (n > 0) setResultado("Número positivo");
    else if (n < 0) setResultado("Número negativo");
    else setResultado("Número nulo (zero)");
  };

  return (
    <div className="card">
      <h2>Exercício 5.29 - Copo meio cheio</h2>
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