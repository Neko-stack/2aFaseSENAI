
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Navbar from "../components/Navbar"
import "./style.css";

function Bar() {
  const { produtosBar } = useContext(GlobalContext);

  return (
    <div>
      <Navbar />
      <div className="container bar">
        <h1> Bar do Tião</h1>
        <p>Confira nossa lista de bebidas e petiscos:</p>

        <table className="tabela">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço (R$)</th>
            </tr>
          </thead>
          <tbody>
            {produtosBar.map((item) => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.valor.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bar;