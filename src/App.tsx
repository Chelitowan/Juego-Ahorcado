import { useState } from 'react';
import { HangImages } from './components/HangImages';
import { letters } from './herpers/letters';
import { getRandomWord } from './herpers/getRandomWord';
import './App.css';

function App() {

  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);

  // Se calcula directo desde el estado: sin efectos ni renders extra
  const lose = attempts >= 9;
  const won = hiddenWord.split(" ").join("") === word;

  const checkLetter = (letter: string) => {
    if (lose) return;
    if (won) return;
  
    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(" "));

  };

  const newGame = () => {
    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
  }
  return (

    <div className="App">
      <h1>Bienvenido al juego del AHORCADO</h1>
      <p>Esto es parte de un ejercicio</p>

      {/* imagenes */}
      <HangImages imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* contador */}
      <h3>Intentos: {attempts}</h3>

      {/* Mensaje de pérdida */}
      {
        (lose) ? <h2>Perdiste el juego</h2> : ""
      }

      {/* Mensaje de victoria */}
      {
        (won) ? <h2>Ganaste el juego!!</h2> : ""
      }

      {/* Botones de letras */}
      {
        letters.map((letter) => (
          <button
            onClick={ () => checkLetter(letter)}
           key={letter}>
            {letter}
          </button>
          ))
      }

      <br /><br />
      <button onClick={newGame}>Jugas otra vez?</button>

      <footer className="App-footer">Hecho por Chelitowan con amor 🫶</footer>

    </div>  
  )
}

export default App;
