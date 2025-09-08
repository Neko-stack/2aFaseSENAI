import { useState } from "react";
import "../App.css";

export default function Exercicio523() {
  const [valorCompra, setValorCompra] = useState("");
  const [valorVenda, setValorVenda] = useState(null);

  const calcularVenda = () => {
    const valor = parseFloat(valorCompra);
    if (isNaN(valor) || valor <= 0) {
      alert("Digite um valor válido!");
      return;
    }

    let venda;
    if (valor < 20) {
      venda = valor + valor * 0.45;
    } else {
      venda = valor + valor * 0.30;
    }

    setValorVenda(venda.toFixed(2));
  };

  return (
    <div className="card">
      <h2>Exercício 5.23</h2>
      <label>
        Valor de Compra:
        <input
          type="number"
          step="0.01"
          value={valorCompra}
          onChange={(e) => setValorCompra(e.target.value)}
        />
      </label>
      <button onClick={calcularVenda}>Calcular Venda</button>

      {valorVenda && (
        <p className="resultado">Valor de venda: R$ {valorVenda}</p>
      )}
    </div>
  );
}