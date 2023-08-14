import React, { useState } from 'react';

export default function Player(props) {
    const [score, setScore] = useState(0);
    const [scoreHistory, setScoreHistory] = useState([0]);
    const [bet, setBet] = useState(0);
    const [tricks, setTricks] = useState(0);

    const updateScore = () => {
        if (bet === tricks) {
            setScore(prev => prev + 5 + tricks);
        } else if (bet !== tricks) {
            setScore(prev => prev + tricks);
        }
        setBet(0);
        setTricks(0);
        setScoreHistory(prev => [...prev, score]);
    }
    
    const decreaseScore = () => {
        setScore(prev => prev - 1);
    }

    const increaseScore = () => {
        setScore(prev => prev + 1);
    }

    return (
        <div>
            <h3>{props.player.name}</h3>
            <p>Score history: {scoreHistory}</p>
            <h3>{score}</h3>
            <button onClick={decreaseScore}>-1</button>
            <button onClick={increaseScore}>+1</button>
            <label htmlFor='bet'>Bet: </label>
            <input type='number' name='bet' value={bet} onChange={(e)=> setBet(parseInt(e.target.value))} />

            <label htmlFor='tricks'>Tricks: </label>
            <input type='number' name='tricks' value={tricks} onChange={(e)=> setTricks(parseInt(e.target.value))} />

            <button onClick={updateScore}>Update score</button>
        </div>
    )
}
