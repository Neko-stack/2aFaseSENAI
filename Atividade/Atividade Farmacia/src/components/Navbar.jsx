import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar-container">

          <section>
          <a href="" style={{color: "red"}}>
          <img src="./imagem/logo.PNG" alt="" class="icon1" /></a>
          <p className="title">Farmácia</p>
          </section>
        <a href="" >
          Inicio</a>
        <a href="" >
          Contato</a>
        <a href="" >Medicamentos</a>
    </nav>
  )
}

export default Navbar