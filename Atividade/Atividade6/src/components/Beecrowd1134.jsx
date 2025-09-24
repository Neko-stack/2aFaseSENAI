import { useState } from "react";

function Beecrowd1134() {
  const [entrada, setEntrada] = useState("");
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [frase, setFrase] = useState("");


  function registrar() {
    const n = parseInt(entrada);
    if (n === 1) setAlcool(alcool + 1);
    else if (n === 2) setGasolina(gasolina + 1);
    else if (n === 3) setDiesel(diesel + 1);
    else if (n === 4) setFrase("MUITO OBRIGADO!")

    setEntrada("");
  }

  return (
    <div>
      <h2>Beecrowd - 1134</h2>
      <input
        type="number"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Digite 1, 2 ou 3"
      />
      <button onClick={registrar}>Registrar</button>
      <p>{frase}</p>
      <br />
      <p>Álcool: {alcool}</p>
      <p>Gasolina: {gasolina}</p>
      <p>Diesel: {diesel}</p>
    </div>
  );
}

export default Beecrowd1134;