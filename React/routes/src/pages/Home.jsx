import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import "./Home.css"

function Home() {

  return (
    <div className="a">
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Home do Tião!</h1>

      </div>
      <p>Escolha um de nossos serviços</p>
        <br />
        <p>Temos Material de construção, Bar e Sorveteria!</p>
    </div>

  )
}

export default Home