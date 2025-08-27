import "./Corpo.css"
import Titulo1 from "./Titulo1"
import Texto1 from "./Texto1"


function Corpo() {
  function logar(){
    let usuario = prompt("digite ai")
    if(usuario == "adm")
    alert("Logado ae")
  else{
    alert("deu boa nao")
  }
  }
  return (
    <div className="corpo-container">

        <Titulo1/>
        <div className="teste">
        <img src="./imagem/logoG.PNG" alt=""class="imagem-corpo"/>
        </div>

        <div className="teste1">
        <Texto1/>
        </div>

    </div>
  )
}

export default Corpo