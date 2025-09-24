import { useState } from "react";

function Neps86() {
  const [nota, setNota] = useState("");
  const [resultado, setResultado] = useState("");

  function verificar() {
    const n = parseFloat(nota);
   
    
    if (n >= 7) {
      setResultado("Aprovado");
    } else {
      setResultado("Reprovado");
    }
  }
   

  return (
    <div>
      <h2>Neps 86</h2>
      <p>Descubra se foi Aprovado</p>
      <br />
      <input type="number" value={nota}onChange={(e) => setNota(e.target.value)} placeholder="Digite a nota"
      />
      <button onClick={verificar}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Neps86;