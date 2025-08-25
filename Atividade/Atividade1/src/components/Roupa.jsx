function Roupa() {
  function sugerirRoupa() {
    const temp = parseInt(document.getElementById("inputTemp").value);
    const resultado = document.getElementById("roupaResultado");

    if (isNaN(temp)) {
      resultado.innerText = "Digite uma temperatura válida";
      return;
    }

    let sugestao = "";
    if (temp < 10) sugestao = "Use casaco pesado";
    else if (temp < 20) sugestao = "Use blusa de manga longa";
    else if (temp < 30) sugestao = "Use camiseta e calça";
    else sugestao = "Use shorts e regata";

    resultado.innerText = sugestao;
  }

  return (
    <div>
      <h2>3 - Escolher Roupa</h2>
      <input type="number" id="inputTemp" placeholder="Temperatura" />
      <button onClick={sugerirRoupa}>Ver sugestão</button>
      <p id="roupaResultado"></p>
    </div>
  );
}

export default Roupa;