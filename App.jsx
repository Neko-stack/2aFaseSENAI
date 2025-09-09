import { useState } from "react";
import "./App.css";
import InputField from "./components/Input";
import ResultCard from "./components/Card";
import PriceConfig from "./components/Price";

function App() {
  const [altura, setAltura] = useState(0);
  const [largura, setLargura] = useState(0);
  const [comprimento, setComprimento] = useState(0);
  const [precoBase, setPrecoBase] = useState(80);

  const calcularOrcamento = () => {
    const perimetro = 2 * (Number(largura) + Number(comprimento));
    const areaGrade = perimetro * Number(altura);
    return areaGrade * precoBase;
  };

  return (
    <div className="app">
      <h1>Calculadora de Orçamento - Grades Cida</h1>

      <div className="form-box">
        <InputField
          label="Altura da grade (m)"
          value={altura}
          onChange={setAltura}
        />
        <InputField
          label="Largura do terreno (m)"
          value={largura}
          onChange={setLargura}
        />
        <InputField
          label="Comprimento do terreno (m)"
          value={comprimento}
          onChange={setComprimento}
        />

        <PriceConfig precoBase={precoBase} setPrecoBase={setPrecoBase} />

        <ResultCard valor={calcularOrcamento()} />
      </div>
    </div>
  );
}

export default App;