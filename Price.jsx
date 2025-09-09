import "./PriceConfig.css";

function Price({ precoBase, setPrecoBase }) {
  return (
    <div className="price-config">
      <label>Preço por m² (R$)</label>
      <input
        type="number"
        value={precoBase}
        onChange={(e) => setPrecoBase(Number(e.target.value))}
      />
    </div>
  );
}

export default Price;