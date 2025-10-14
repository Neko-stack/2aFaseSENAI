import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Navbar from "../components/Navbar"
import "./style.css";

function Material() {
  const { servicosMaterial } = useContext(GlobalContext);

  return (
    <div>
      <Navbar />
      <div className="container material">
        <h1> Material de Construção do Tião</h1>
        <p>Veja nossos principais materiais e preços atualizados:</p>

        <table className="tabela">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço (R$)</th>
            </tr>
          </thead>
          <tbody>
            {servicosMaterial.map((item) => (
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

export default Material;