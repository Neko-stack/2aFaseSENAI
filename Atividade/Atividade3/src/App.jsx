import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";
import Price from "./components/Price";

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
        <Input
          label="Altura da grade (m)"
          value={altura}
          onChange={setAltura}
        />
        <Input
          label="Largura do terreno (m)"
          value={largura}
          onChange={setLargura}
        />
        <Input
          label="Comprimento do terreno (m)"
          value={comprimento}
          onChange={setComprimento}
        />

        <Price precoBase={precoBase} setPrecoBase={setPrecoBase} />

        <Card valor={calcularOrcamento()} />
      </div>
    </div>
  );
}

export default App;