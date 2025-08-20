import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar-container">
        <a href="">
          <img src="./imagem/solar--home-outline.svg" alt="" class="icon1" />
          Home</a>
        <a href="">
          <img src="./imagem/icon-park-solid--phone-call.svg" alt="" class="icon2" />
          Contato</a>
        <a href="">Dashboard</a>
    </nav>
  )
}

export default Navbar