import { useState } from "react";

function Neps13() {
  const [criancas, setCriancas] = useState("");
  const [adultos, setAdultos] = useState("");
  const [resultado, setResultado] = useState("");

  function verificar() {
    const c = parseInt(criancas);
    const a = parseInt(adultos);

    if (c + a <= 50) {
      setResultado("Possível");
    } else {
      setResultado("Impossible!!");
    }
  }

  return (
    <div>
      <h2>Neps 13</h2>

    <p>Digite a quantidade de crianças e adultos no bondinho (Max 50)</p>
    <br />
      <input
        type="number"
        placeholder="Qtd crianças"
        value={criancas}
        onChange={(e) => setCriancas(e.target.value)}
      />
      <input
        type="number"
        placeholder="Qtd adultos"
        value={adultos}
        onChange={(e) => setAdultos(e.target.value)}
      />
      <button onClick={verificar}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Neps13;