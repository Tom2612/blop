import { useState } from 'react';
import Header from './components/Header';
import SetUpForm from './components/SetUpForm';
import Gameboard from './components/Gameboard';

function App() {
  const [gameStart, setGameStart] = useState(false);

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
    setGame(
      {
        cards: cardCount,
        rounds: (cardCount * 2) -1,
        currentRound: 1,
        players: [
          players.map(player => {
            return {
              name: player,
              score: 0
            }
          })
        ]
      }
    );
    setGameStart(prev => !prev);
  }

  return (
    <div>
      <Header />
      {!gameStart && <SetUpForm startGame={startGame}/>}
      {gameStart && <Gameboard game={game}/>}
    </div>
    
  )
}

export default App
