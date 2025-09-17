function Recibo({ fruits, cart }) {
  const items = fruits.filter((fruit) => cart[fruit.name] > 0);

  const total = items.reduce(
    (acc, fruit) => acc + fruit.price * cart[fruit.name],
    0
  );

  return (
    <div className="receipt">
      <h2>🧾 Recibo</h2>
      {items.length === 0 ? (
        <p>Nenhuma fruta selecionada.</p>
      ) : (
        <ul>
          {items.map((fruit) => (
            <li key={fruit.name}>
              {fruit.name} - {cart[fruit.name]} un x R$ {fruit.price.toFixed(2)} ={" "}
              <strong>R$ {(fruit.price * cart[fruit.name]).toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}

export default Recibo;