import { useState } from 'react';
import Players from './Players';

export default function SetUpForm() {
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleSubmitName = () => {
        setPlayers(prev => [...prev, name]);
        setName('');
    }

    const handleRemoveName = (e) => {
        setPlayers(prev  => prev.filter(name => name !== e.target.textContent));
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
          <label>Card count:</label>
          <input type='number'></input>
          <button className='btn btn-success'>Start Game</button>
      </div>
    )
}
