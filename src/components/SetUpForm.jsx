import React from 'react';
import Players from './Players';

export default function SetUpForm() {
  return (
    <div className='card'>
        <h2>Game set up:</h2>
        <Players />
        <label>Card count:</label>
        <input type='number'></input>
    </div>
  )
}
