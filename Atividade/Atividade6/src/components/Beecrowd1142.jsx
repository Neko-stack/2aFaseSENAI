import { useState } from "react";

function Beecrowd1142() {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState([]);

  function gerar() {
    const num = parseInt(n);

    let linhas = [];
    let cont = 1;
    for (let i = 0; i < num; i++) {
      linhas.push(`${cont} ${cont + 1} ${cont + 2} PUM`);
      cont += 4;
    }
    setResultado(linhas);
  }

  return (
    <div>
      <h2>Beecrowd - 1142</h2>
      <p>Digite quantas linhas com "PUM" você quer!</p>
      <br />
      <input
        type="number" 
        placeholder="Digite N"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={gerar}>Gerar</button>
      {resultado.map((linha, idx) => (
        <p key={idx}>{linha}</p>
      ))}
    </div>
  );
}

export default Beecrowd1142;