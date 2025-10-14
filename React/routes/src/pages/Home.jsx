import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Bem-vindo à Rede do Tião!</h1>
        <p>Escolha um de nossos estabelecimentos e confira nossos produtos e serviços:</p>

        <div className="cards-home">
          <div className="card-home material">
          
            <h2> Material de Construção</h2>
            <p>Tudo para sua obra com qualidade e preço justo.</p>
            <Link to="/material" className="btn-home">Ver produtos</Link>
          </div>

          <div className="card-home bar">
          
            <h2> Bar do Tião</h2>
            <p>Bebidas geladas e petiscos para todos os gostos!</p>
            <Link to="/bar" className="btn-home">Ver cardápio</Link>
          </div>

          <div className="card-home sorveteria">
           
            <h2> Sorveteria do Tião</h2>
            <p>Delícias geladas para refrescar o seu dia!</p>
            <Link to="/sorveteria" className="btn-home">Ver sabores</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;