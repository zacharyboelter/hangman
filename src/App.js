import React, { useEffect, useState } from "react";
import Hangman from "./components/Hangman";




const App = () => {
  const [wordToGuess, setWordToGuess] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [incorrectGuesses, setIncorrectGuesses] = useState(0)

  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch('./data.json')
      const data = await response.json()
      // Logic to randomly select a word (add later)
    }
    fetchWords()
  }, [])

  return (
    <div className='game-container'>
      <Hangman />
    </div>
  )
}

export default App;
