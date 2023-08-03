import { useState } from 'react';

export default function Players() {
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        setPlayers(prev => [...prev, name]);
        setName('');
    }

    return (
        <div>
            <label htmlFor='player-name'>Player names:</label>
            <input type='text' name='player-name' value={name} onChange={handleChange} />
            <button onClick={handleSubmit}>Add player</button>
            <h3>Display players:</h3>
            <ul>
                {players && players.map((player, i) => {
                    return <li key={'player' + i}>{ player }</li>
                })}
            </ul>
        </div>
    )
}
