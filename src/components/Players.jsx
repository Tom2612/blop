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

    const handleRemovePlayer = (e) => {
        console.log(e.target.textContent)
        setPlayers(prev  => prev.filter(name => name !== e.target.textContent));
        console.log(players)
    }

    return (
        <div>
            <label htmlFor='player-name'>Add Player:</label>
            <input type='text' name='player-name' value={name} onChange={handleChange} />
            <button onClick={handleSubmit}>Add player</button>
            <h3>Player names:</h3>
            <ul>
                {players && players.map((player, i) => {
                    return <li key={'player' + i} onClick={handleRemovePlayer}>{ player }</li>
                })}
            </ul>
        </div>
    )
}
