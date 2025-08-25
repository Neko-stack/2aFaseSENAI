function Moeda() {
  function converter() {
    const valor = parseFloat(document.getElementById("valorMoeda").value);
    const moeda = document.getElementById("moedaSelect").value;
    const resultado = document.getElementById("moedaResultado");

    const taxa = { real: 1, dolar: 5, euro: 6 };
    if (!valor) {
      resultado.innerText = "Digite um valor válido";
      return;
    }
    resultado.innerText = "Em reais: R$ " + (valor / taxa[moeda]).toFixed(2);
  }

  return (
    <div>
      <h2>2 - Conversão de Moedas</h2>
      <input type="number" id="valorMoeda" placeholder="Valor" />
      <select id="moedaSelect" onChange={converter}>
        <option value="real">Real</option>
        <option value="dolar">Dólar</option>
        <option value="euro">Euro</option>
      </select>
      <p id="moedaResultado"></p>
    </div>
  );
}

export default Moeda;