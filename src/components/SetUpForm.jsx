import { useState } from 'react';
import Players from './Players';
import Cards from './Cards';

export default function SetUpForm(props) {
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState('');
    const [cardStart, setCardStart] = useState(false);
    const [maxCards, setMaxCards] = useState(52);
    const [cardCount, setCardCount] = useState(0);

    const handleChangeName = (e) => {
      setName(e.target.value);
    }

    const handleSubmitName = () => {
      setPlayers(prev => [...prev, name]);
      setName('');
      setCardCount(0);
    }

    const handleRemoveName = (e) => {
      setPlayers(prev  => prev.filter(name => name !== e.target.textContent));
      setCardCount(0);
    }

    const handleSubmitPlayers = () => {
      setCardStart(prev => !prev);
      setMaxCards(findMaxCards(players.length));
    }

    const handleCardChange = (e) => {
      setCardCount(e.target.value);
    }

    const findMaxCards = (players) => {
      for (let i = 52; i > 0; i--) {
        if (i * players <= 52) {
          return i;
        }
      }
    };

    return (
      <div className='card'>
          <h2>Game set up:</h2>

          {!cardStart && <Players 
            handleChangeName={handleChangeName}
            handleSubmitName={handleSubmitName}
            handleRemoveName={handleRemoveName} 
            name={name} 
          />}

          <h3>Player names:</h3>
          <ul>
            {players && players.map((player, i) => {
                return <li key={'player' + i} onClick={handleRemoveName}>{ player }</li>
            })}
          </ul>

          <button onClick={handleSubmitPlayers}>{cardStart ? 'Edit Players' : 'Submit Players'}</button>

          {cardStart && <Cards handleCardChange={handleCardChange} maxCards={maxCards} />}

          <h2>Chosen Card Count = {cardCount}</h2>

          <button className='btn btn-success' onClick={() => props.startGame(players, cardCount)}>Start Game</button>
      </div>
    )
}
