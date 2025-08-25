function Pizza() {
  function mostrarPreco() {
    const select = document.getElementById("pizzaSelect").value;
    const resultado = document.getElementById("pizzaResultado");
    const precos = { pequeno: 20, medio: 30, grande: 40 };

    resultado.innerText = select
      ? "Preço: R$ " + precos[select]
      : "Selecione uma pizza";
  }

  return (
    <div>
      <h2>1 - Escolher Pizza</h2>
      <select id="pizzaSelect" onChange={mostrarPreco}>
        <option value="">Selecione</option>
        <option value="pequeno">Pequeno</option>
        <option value="medio">Médio</option>
        <option value="grande">Grande</option>
      </select>
      <p id="pizzaResultado"></p>
    </div>
  );
}

export default Pizza;