import { useState } from 'react'
import './App.css'

function App() {

  const [numero, setNumero] = useState(0)
  const [username, setUsername] = useState("")

function incrementar(){
  setNumero(numero + 1)
}

function decrementar(){
  setNumero(numero - 1)
}

function logar(){
 let nome = prompt("Digite o nome")
 setUsername(nome)
}

  return (
    <>
    

   {username && <p>render condicional</p>}
      <h1>Estado</h1>
      
      <p className='user'>Olá {username}</p>
      <button onClick={logar}>login</button>
      <p></p>
      <button onClick={decrementar}>-</button>
      {numero}
      <button onClick={incrementar}>+</button>

    </>
  )
}

export default App
