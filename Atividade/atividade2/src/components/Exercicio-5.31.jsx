import { useState } from "react";
import "../App.css";

export default function Exercicio531() {
  const [salario, setSalario] = useState("");
  const [emprestimo, setEmprestimo] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [resultado, setResultado] = useState("");

  const verificar = () => {
    const s = parseFloat(salario);
    const e = parseFloat(emprestimo);
    const p = parseInt(parcelas);

    if (s <= 0 || e <= 0 || p <= 0) {
      alert("Todos os valores devem ser maiores que zero!");
      return;
    }

    const valorParcela = e / p;
    const limite = s * 0.3;

    if (valorParcela <= limite) {
      setResultado(
        `Empréstimo aprovado! Valor da parcela: R$ ${valorParcela.toFixed(2)}`
      );
    } else {
      setResultado(
        `Empréstimo NEGADO! Parcela de R$ ${valorParcela.toFixed(
          2
        )} ultrapassa 30% do salário (R$ ${limite.toFixed(2)})`
      );
    }
  };

  return (
    <div className="card">
      <h2>Exercício 5.31 - Empréstimo</h2>
      <label>
        Salário:
        <input
          type="number"
          step="0.01"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        />
      </label>
      <label>
        Valor do Empréstimo:
        <input
          type="number"
          step="0.01"
          value={emprestimo}
          onChange={(e) => setEmprestimo(e.target.value)}
        />
      </label>
      <label>
        Número de Parcelas:
        <input
          type="number"
          value={parcelas}
          onChange={(e) => setParcelas(e.target.value)}
        />
      </label>
      <button onClick={verificar}>Verificar</button>
      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}