import React from 'react';
import Player from './Player';

export default function Gameboard(props) {
    const { game } = props;
    return (
        <div>
            <h2>Play Blop!</h2>
            <h3>Current Round: {game.currentRound}</h3>
            {game.players[0].map((player, index) => {
                return <Player key={player + index} player={player} />
            })}
        </div>
    )
}
