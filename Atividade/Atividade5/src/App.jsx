import { useState } from "react";
import Button from "./components/Button";
import Box from "./components/Box";
import "./App.css";

function App() {
  const oracoes = {
    "Oração do Desenvolvedor Web":
      "Divino Stack Overflow, que estais na nuvem,Santificado seja o nosso deploy. Venha a nós o CSS alinhado, Seja feita a responsividade, Assim no Chrome como no Firefox.O código nosso de cada dia nos dai hoje, Perdoai os nossos console.log, Assim como nós perdoamos os commits sem mensagem. Não nos deixei cair em callback hell, Mas livrai-nos dos bugs de produção. Amém, amém, git commit -m Aleluia ",

    "Oração do Frontend":
      "Ave CSS, cheia de bugs, O framework é convosco, Bendita sois vós entre as telas, E bendito é o fruto do vosso DOM: o pixel perfeito. Santa Documentação, mãe da UI, Rogai por nós, devs visuais, Agora e na hora do push final. Hover.",
      
    "Oração do Backend":
      "Nosso código que está no servidor, Santificado seja o teu endpoint, Venha a nós o teu JSON, Seja feita tua lógica, Assim na API como no banco. O token nosso de cada dia nos dai hoje, Perdoai nossas queries mal otimizadas, Assim como nós perdoamos quem nos envia POST sem body. E não nos deixes cair em loops infinitos, Mas livrai-nos do downtime. Amém, amém, status 200.",

    "Oração do Fullstack":
      "Senhor Git, dai-me forças para subir a branch certa, Coragem para lidar com o merge, E sabedoria para entender o código que eu mesmo escrevi ontem. Concedei-me domínio sobre o front, o back, e o café. Protegei minha stack das atualizações quebradoras, E dai-me fé nos testes automatizados. Pois teu é o commit, O build e a glória do log, Agora e para sempre, `npm run dev`.",

    "Oração do Programador":
      "O Senhor é meu debug, nada me faltará. Em loops tranquilos me faz deitar, e me guia pelas threads seguras da lógica. Ainda que eu ande pelo vale dos sistemas legados, não temerei o código antigo, pois tu estás comigo: tua stack e teu terminal me consolam. Preparas um café diante de mim na presença dos meus erros. Unge minha cabeça com boas práticas, e o meu Git transborda. Certamente a sintaxe limpa e o deploy estável me seguirão todos os commits da minha vida, e habitarei no repositório sagrado para todo o sempre. **Ctrl + S. Amém.",
  };

  const [oracao, setOracao] = useState("");

  return (
    <div className="container">
      <h1>Painel de Orações</h1>
      <p>
        Clique em uma oração para exibi-la na tela e poder ser lida pelos fiéis.
      </p>

      <div className="buttons">
        {Object.entries(oracoes).map(([title, text]) => (
          <Button key={title} title={title} onClick={() => setOracao(text)} />
        ))}
      </div>

      <Box prayer={oracao} />
    </div>
  );
}

export default App;