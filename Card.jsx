import "./Card.css";

function Card({ valor }) {
  return (
    <div className="result-card">
      <h2>Orçamento:</h2>
      <p>R$ {valor.toFixed(2)}</p>
    </div>
  );
}

export default Card;