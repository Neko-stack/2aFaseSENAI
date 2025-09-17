function Fruta({ fruits, cart, quantia }) {
  return (
    <div className="selector">
      <h2>Selecione suas frutas:</h2>
      {fruits.map((fruit) => (
        <div key={fruit.name} className="fruit-item">
          <label>
            {fruit.name} (R$ {fruit.price.toFixed(2)})
          </label>
          <input
            type="number"
            min="0"
            value={cart[fruit.name] || ""}
            onChange={(e) => quantia(fruit.name, Number(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
}

export default Fruta;