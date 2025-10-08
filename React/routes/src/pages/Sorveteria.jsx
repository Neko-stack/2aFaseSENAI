import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Navbar from "../components/Navbar"

function sorveteria() {
  const { produtosSorveteria } = useContext(GlobalContext)

  return (
    <div>
      <Navbar />
      <h1>Sorveteria do Tião</h1>
      <h3>Lista de preços:</h3>
      <ul>
        {produtosSorveteria.map((item, i) => (
          <li key={i}>
            {item.nome} — R$ {item.valor.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default sorveteria