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

  console.log(words);

  return (
    <div className="App">

      {/* Direcionando usuário para os componentes caso a condição seja true */}
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  );
}

export default App;
