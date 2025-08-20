import "./Corpo.css"
import Textao from "./Textao"
import Texto from "./Texto"
import Titulo1 from "./Titulo1"
import Titulo2 from "./Titulo2"

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
        <Titulo1 />
        <Titulo2 texto={"Primeiro pedaço de página"} emoji={"💩"}/>
        <Texto texto={"tenxto é aquilo tudo"}/>
        <Titulo2 texto={"Segundo pedação de página"} emoji={"😂"}/>
        <Textao texto={"Tentao enviado para componente pelas props que sao sla oq"}/>
        <img src="./imagem/download.png" alt="" class="imagem-corpo"/>
        <button onClick={logar} >login fake</button>
    </div>
  )
}

export default Corpo