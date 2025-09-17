import { useState } from "react";
import Fruta from "./components/Fruta";
import Recibo from "./components/Recibo";
import "./App.css";

function App() {
  const fruits = [
    { name: "Maçã", price: 1.0 },
    { name: "Laranja", price: 2.0 },
    { name: "Bergamota", price: 1.0 },
    { name: "Banana", price: 0.5 },
    { name: "Pera", price: 0.3 },
  ];

  const [cart, setCart] = useState({});

  const quantia2 = (fruit, qty) => {
    setCart({ ...cart, [fruit]: qty });
  };

  return (
    <div className="container">
      <h1>Trajeto Pomar v0</h1>
      <p>
        Escolha as frutas que você colheu e veja o valor final da sua compra.
      </p>

      <Fruta fruits={fruits} cart={cart} quantia={quantia2} />
      <Recibo fruits={fruits} cart={cart} />
    </div>
  );
}

export default App;