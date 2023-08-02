import { useState } from 'react'
import './App.css'

function App() {
  const [game, setGame] = useState({
    cards: 7,
    rounds: 13,
    currentRound: 1,
    players: [
      {
      name: 'x',
      score: 0
      },
      {
        name: 'y',
        score: 0,
      }
    ]
  });

  return (
    <h1>Hello</h1>
  )
}

export default App
