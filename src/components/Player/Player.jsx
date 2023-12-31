import React from 'react';
import './Player.css'

const Player = (props) => {
    const { id, picture, salary, name, company } = props.player;
    const addToCart = props.addToCart;
    return (
        <div className='single-player'>
            <img src={picture} alt="" />
            <div className='player-details'>
                <h3>{name}</h3>
                <p>Salary: ${salary}</p>
                <p>Club: {company}</p>
            </div>
            <button onClick={() => addToCart(props.player)} className='btn-to-list'>Add To List</button>
        </div>
    );
};

export default Player;