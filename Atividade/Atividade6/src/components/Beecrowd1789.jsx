import { useState } from "react";

function Beecrowd1789() {
  const [entrada, setEntrada] = useState("");
  const [resultado, setResultado] = useState("");

  function verificar() {
    const valores = entrada.split(" ").map(Number);
  
    const max = Math.max(...valores);
    if (max < 10) setResultado("1");
    else if (max < 20) setResultado("2");
    else setResultado("3");
  }

  return (
    <div>
      <h2>Beecrowd - 1789</h2>
      <p>Digite a velocidade da sua lesma</p>
      <br />
      <input
        type="text"
        placeholder=""
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      />
      <button onClick={verificar}>Verificar</button>
      <p>Nível: {resultado}</p>
    </div>
  );
}

export default Beecrowd1789