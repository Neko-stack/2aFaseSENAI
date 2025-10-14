import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Navbar from "../components/Navbar"
import "./style.css";

function Sorveteria() {
  const { produtosSorveteria } = useContext(GlobalContext);

  return (
    <div>
      <Navbar />
      <div className="container sorveteria">
        <h1> Sorveteria do Tião</h1>
        <p>Confira nosso cardápio de delícias geladas:</p>

        <table className="tabela">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço (R$)</th>
            </tr>
          </thead>
          <tbody>
            {produtosSorveteria.map((item) => (
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

export default Sorveteria;