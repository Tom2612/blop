import { useState } from 'react';
import Header from './components/Header';
import SetUpForm from './components/SetUpForm';
import Players from './components/Players';

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

  const startGame = (e) => {
    
  }

  return (
    <div>
      <Header />
      <SetUpForm startGame={startGame}/>
      {/* <Players /> */}
      <h1>Hello</h1>
    </div>
    
  )
}

export default App
