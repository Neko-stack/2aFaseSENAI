function Clima() {
  function prever() {
    const input = document.getElementById("climaInput");
    const out = document.getElementById("climaResultado");
    if (!input || !out) return;

    const cidade = input.value.toLowerCase().trim();

    const climaFake = {
      "sp": "Ensolarado 28°C",
      "rj": "Quente 32°C",
      "sc": "Frio 14°C",
    };

    out.innerText =
      climaFake[cidade] ||
      "Cidade não encontrada"
  }

  return (
    <div>
      <h2>6 - Previsão do Tempo</h2>
      <p style={{marginBottom: "20px"}}>Escolha entre sp, rj e sc (digite em minusculo)</p>
      <input
        type="text"
        id="climaInput"
        placeholder="Digite a cidade"
        
      />
      <button onClick={prever}>Ver previsão</button>
      <p id="climaResultado"></p>
    </div>
  );
}

export default Clima;