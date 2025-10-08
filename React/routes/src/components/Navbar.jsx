import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <Link to={'/'}>Home Page</Link>
        <Link to={'/material'}>Material de Construção</Link>
        <Link to={'/bar'}>Bar</Link>
        <Link to={'/sorveteria'}>Sorveteria</Link>
    </nav>
  )
}

export default Navbar