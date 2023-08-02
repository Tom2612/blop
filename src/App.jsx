import { useState } from 'react';
import Header from './components/Header';
import Controller from './components/Controller';

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
    <div>
      <Header />
      <Controller />
      <h1>Hello</h1>
    </div>
    
  )
}

export default App
