function Transporte() {
  function escolher() {
    const dist = parseInt(document.getElementById("inputDistancia").value);
    const resultado = document.getElementById("transporteResultado");

    if (isNaN(dist)) {
      resultado.innerText = "Digite uma distância válida";
      return;
    }

    let msg = "";
    if (dist < 5) msg = "Vá a pé ou bicicleta (5 min)";
    else if (dist < 20) msg = "Use ônibus (30 min)";
    else if (dist < 100) msg = "Use carro/táxi (1h)";
    else msg = "Use avião (2h)";

    resultado.innerText = msg;
  }

  return (
    <div>
      <h2>5 - Escolher Transporte</h2>
      <input type="number" id="inputDistancia" placeholder="Distância (km)" />
      <button onClick={escolher}>Ver transporte</button>
      <p id="transporteResultado"></p>
    </div>
  );
}

export default Transporte;