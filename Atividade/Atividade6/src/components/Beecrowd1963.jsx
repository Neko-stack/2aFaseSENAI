import { useState } from "react";

function Beecrowd1963() {
  const [duracao, setDuracao] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    const d = parseInt(duracao);

    const horas = Math.floor(d / 60);
    const minutos = d % 60;
    setResultado(`${horas}h ${minutos}min`);
  }

  return (
    <div>
      <h2>Beecrowd - 1963</h2>

      <p>Calculador de minutos</p>
      <br />
      <input
        type="number"
        placeholder="Duração em minutos"
        value={duracao}
        onChange={(e) => setDuracao(e.target.value)}
      />
      <button onClick={calcular}>Calcular</button>
      <p>A duração do filme é {resultado}</p>
    </div>
  );
}

export default Beecrowd1963;