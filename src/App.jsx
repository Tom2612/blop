import { useState } from 'react';
import Header from './components/Header';
import SetUpForm from './components/SetUpForm';

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

  const startGame = (players, cardCount) => {
    console.log(players, cardCount);
  }

  return (
    <div>
      <Header />
      <SetUpForm startGame={startGame}/>
    </div>
    
  )
}

export default App
