import { useState } from "react";



function Beecrowd1134() {

const [numero, setNumero] = useState("");
const [resultado, setResultado] = useState("");

  function diferenca() {
    const n = Math.floor(Math.random() * 20) + 1
    const ho = "Ho ".repeat(n) + "!"
    setResultado(ho)



 }
  return (
    <div>
      <h2>Beecrowd - 1759</h2>
      <p></p>
        <br />      

      <button onClick={diferenca}>Ver quantos HO</button>
      <br />
      <br />
      <p>{resultado}</p>
    </div>
  );
} 
 
export default Beecrowd1134;