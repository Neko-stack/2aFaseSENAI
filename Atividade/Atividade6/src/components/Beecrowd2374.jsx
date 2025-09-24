import { useState } from "react";



function Beecrowd2374() {

const [pressM, setPressM] = useState("");
const [pressB, setPressB] = useState("");
const [resultado, setResultado] = useState("");

  function diferenca() {
    const n = parseInt(pressM);
    const m = parseInt(pressB);


    if(n >= 1 && n < 40 &&  m >= 1 && m < 40){
      setResultado(Math.abs( n - m )); 
    }else{
      setResultado("B.O")
    }
 }
  return (
    <div>
      <h2>Beecrowd - 2374</h2>
      <p>Escola entre 1 a 40</p>
        <br />
      <input type="number" value={pressM} placeholder="Pressão 1" onChange={(e) => setPressM(e.target.value)}/>
      <input type="number" value={pressB} placeholder="Pressão 2" onChange={(e) => setPressB(e.target.value)}/>

      <button onClick={diferenca}>Ver diferença</button>
      <p>A diferença de pressão é {resultado}</p>
    </div>
  );
} 
 
export default Beecrowd2374;