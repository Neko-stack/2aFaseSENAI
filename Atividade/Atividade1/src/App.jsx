import Pizza from "./components/Pizza";
import Moeda from "./components/Moeda";
import Roupa from "./components/Roupa";
import Hotel from "./components/Hotel";
import Transporte from "./components/Transporte";
import Clima from "./components/Clima";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Atividades Separadas</h1>
      <section>
        <Pizza />
      </section>
      <hr />
      <section>
        <Moeda />
      </section>
      <hr />
      <section>
        <Roupa />
      </section>
      <hr />
      <section>
        <Hotel />
      </section>
      <hr />
      <section>
        <Transporte />
      </section>
      <hr />
      <section>
        <Clima />
      </section>
    </div>
  );
}
export default App
