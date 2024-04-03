import React, { useState } from "react";
import Hangman from "./components/Hangman";




const App = () => {
  const [wordToGuess, setWordToGuess] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [incorrectGuesses, setIncorrectGuesses] = useState(0)


  return (
    <div className='game-container'>
      <Hangman />
    </div>
  )
}

export default App;
