import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Motivos from './components/Motivos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />

    <h1>pagina de react</h1>

    <Motivos/>
    </>
  )
}

export default App
