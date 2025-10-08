import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Navbar from "../components/Navbar"

function material() {
  const { servicosMaterial } = useContext(GlobalContext)

  console.log(servicosMaterial)
  return (
    <div>
      <Navbar />
      <h1>Material de Construção do Tião</h1>
      <h3>Lista de preços:</h3>
      <ul>
        {servicosMaterial.map((item, i) => (
          <li key={i}>
            {item.nome} — R$ {item.valor.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default material