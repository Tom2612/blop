import { useState } from 'react';
import Players from './Players';
import Cards from './Cards';

export default function SetUpForm() {
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState('');
    const [cardStart, setCardStart] = useState(false);
    const [maxCards, setMaxCards] = useState(52);
    const [cardCount, setCardCount] = useState(null);

    const handleChangeName = (e) => {
      setName(e.target.value);
    }

    const handleSubmitName = () => {
      setPlayers(prev => [...prev, name]);
      setName('');
      // setMaxCards(findMaxCards(players.length));
      console.log(findMaxCards(players.length))
    }

    const handleRemoveName = (e) => {
      setPlayers(prev  => prev.filter(name => name !== e.target.textContent));
    }

    const handleSubmitPlayers = () => {
      setCardStart(prev => !prev);
      setMaxCards(findMaxCards(players.length));
    }

    const handleCardChange = () => {

    }

    const findMaxCards = (players) => {
      for (let i = 52; i > 0; i--) {
        if (i * players <= 52) {
          return i;
        }
      }
    }

    return (
      <div className='card'>
          <h2>Game set up:</h2>
          <Players 
            handleChangeName={handleChangeName}
            handleSubmitName={handleSubmitName}
            handleRemoveName={handleRemoveName} 
            name={name} 
          />
          <h3>Player names:</h3>
          <ul>
            {players && players.map((player, i) => {
                return <li key={'player' + i} onClick={handleRemoveName}>{ player }</li>
            })}
          </ul>
          <button onClick={handleSubmitPlayers}>Submit Players</button>
          {cardStart && <Cards handleCardChange={handleCardChange} maxCards={maxCards} />}
          {/* <label>Card count:</label>
          <select name='cardCount'>
            {[...Array(maxCards)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)}
          </select>
          <h1>MaxCardCount: {maxCards}</h1> */}
          <input type='number'></input>
          <button className='btn btn-success'>Start Game</button>
      </div>
    )
}
