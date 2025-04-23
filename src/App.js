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

  // palavra escolhida
  const [pickedWord, setPickedWord] = useState("");

  // categoria escolhida
  const [pickedCategory, setPickedCategory] = useState("");

  // lista de letras
  const [letters, setLetters] = useState([]);

  // letras adivinhadas
  const [guessedLetters, setGuessedLetters] = useState([]);

  // letras erradas
  const [wrongLetters, setWrongLetters] = useState([]);

  // tentativas possíveis
  const [guesses, setGuess] = useState(3);

  // pontuação de acerto
  const [score, setScore] = useState(0);

  // função para escolher palavra e categoria
  const pickWordAndCategory = () => {
    // escolhendo categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; // percorrendo para trazer uma categoria aleatória
    console.log(category);

    // Escolhendo palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return { word, category };
  };

  // função para iniciar o jogo 
  const startGame = () => {
    const { word, category } = pickWordAndCategory(); // escolher a palavra e categoria de forma desestruturada

    let wordLetters = word.split(""); // quebra a string em uma array de letras
    wordLetters = wordLetters.map((l) => l.toLowerCase()); // troca letras maiúsculas por minúsculas

    console.log(word, category);
    console.log(wordLetters);

    // preencher estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  // função para processar a letra de entrada (Finalizar jogo)
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    // verficando se a letra já foi usada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // pegar letra adivinhada ou remover
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter,
      ]);
    }
    console.log(guessedLetters);
    console.log(wrongLetters);
  };

  // reiniciar o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">

      {/* Direcionando usuário para os componentes caso a condição seja true */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
