import './Game.css'
import { useState, useRef } from 'react';

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {

    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterInputRef.current.focus(); // manter o foco no input, usando o useRef, ele fica com a sinalização dentro do input na qual mostra que esta preparado para receber mais letras

    }

    return (
        <div className='game'>
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra</h1>
            <h3 className='tip'>
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você tem {guesses} tentativa(s)</p>

            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className='letter'>{letter}</span>
                    ) : (
                        <span key={i} className='blankSquare'></span>
                    )
                ))};
            </div>

            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra: </p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
                    <button>Jogar!</button>
                </form>
            </div>

            <div className="wrongLettersContainer">
                <p>Letras já usadas: </p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter},</span>
                ))}
            </div>

        </div>
    )
}

export default Game