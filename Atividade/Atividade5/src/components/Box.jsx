function Box({ prayer }) {
  return (
    <div className="prayer-box">
      {prayer ? <p>{prayer}</p> : <p>Selecione uma oração para exibir aqui 🙏</p>}
    </div>
  );
}

export default Box;