import './App.css';
import { useCallback, useEffect, useState } from "react";
import { wordsList } from "./data/Words";
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

// estágios do jogo
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {

  // inicializando o estado com o primeiro estágio do jogo "start"
  const [gameStage, setGameStage] = useState(stages[0].name);

  // Esse estado vai armazenar o array de palavras para o jogo
  const [words] = useState(wordsList);

  // função para iniciar o jogo 
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  // função para processar a letra de entrada (Finalizar jogo)
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // reiniciar o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">

      {/* Direcionando usuário para os componentes caso a condição seja true */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
