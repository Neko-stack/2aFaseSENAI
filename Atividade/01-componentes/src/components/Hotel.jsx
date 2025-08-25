function Hotel() {
  function reservar() {
    const quarto = document.getElementById("quartoSelect").value;
    const resultado = document.getElementById("hotelResultado");

    const disponibilidade = { simples: true, duplo: true, suite: false };
    const precos = { simples: 100, duplo: 200, suite: 300 };

    if (!quarto) {
      resultado.innerText = "Escolha um quarto";
      return;
    }

    resultado.innerText = disponibilidade[quarto]
      ? "Disponível - Preço: R$ " + precos[quarto]
      : "Indisponível - Preço: R$ " + precos[quarto]
  }

  return (
    <div>
      <h2>4 - Reserva de Hotel</h2>
      <select id="quartoSelect" onChange={reservar}>
        <option value="">Selecione</option>
        <option value="simples">Simples</option>
        <option value="duplo">Duplo</option>
        <option value="suite">Suíte</option>
      </select>
      <p id="hotelResultado"></p>
    </div>
  );
}

export default Hotel;