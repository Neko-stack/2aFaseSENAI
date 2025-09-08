import { useState } from "react";
import "../App.css";

export default function Exercicio525() {
  const [preco, setPreco] = useState("");
  const [moedas, setMoedas] = useState({
    m1: 0,
    m050: 0,
    m025: 0,
    m010: 0,
    m005: 0,
  });
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const total =
      moedas.m1 * 1 +
      moedas.m050 * 0.5 +
      moedas.m025 * 0.25 +
      moedas.m010 * 0.1 +
      moedas.m005 * 0.05;

    if (!preco || preco <= 0) {
      alert("Digite um preço válido!");
      return;
    }

    if (total >= preco) {
      setResultado(`Você tem R$ ${total.toFixed(2)}. Dá para comprar!`);
    } else {
      setResultado(`Você tem R$ ${total.toFixed(2)}. Falta dinheiro!`);
    }
  };

  const handleChange = (e, key) => {
    setMoedas({ ...moedas, [key]: parseInt(e.target.value) || 0 });
  };

  return (
    <div className="card">
      <h2>Exercício 5.25 - O Porco</h2>
      <label>
        Preço do Produto:
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Moedas de R$1:
        <input type="number" onChange={(e) => handleChange(e, "m1")} />
      </label>
      <label>
        Moedas de 50 centavos:
        <input type="number" onChange={(e) => handleChange(e, "m050")} />
      </label>
      <label>
        Moedas de 25 centavos:
        <input type="number" onChange={(e) => handleChange(e, "m025")} />
      </label>
      <label>
        Moedas de 10 centavos:
        <input type="number" onChange={(e) => handleChange(e, "m010")} />
      </label>
      <label>
        Moedas de 5 centavos:
        <input type="number" onChange={(e) => handleChange(e, "m005")} />
      </label>

      <button onClick={calcular}>Verificar</button>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}