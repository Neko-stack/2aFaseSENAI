import { useState } from "react";
import "./Price.css";

function Price({ precoBase, setPrecoBase }) {
  const [novoPreco, setNovoPreco] = useState(precoBase);

  const aplicarPreco = () => {
    setPrecoBase(Number(novoPreco));
  };

  return (
    <div className="price">
      <label>Preço por m² (R$)</label>
      <div className="price-input">
        <input
          type="number"
          value={novoPreco}
          onChange={(e) => setNovoPreco(e.target.value)}
        />
        <button onClick={aplicarPreco}>Alterar</button>
      </div>
    </div>
  );
}

export default Price;