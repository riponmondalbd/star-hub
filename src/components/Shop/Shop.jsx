import React, { useEffect, useState } from 'react';
import './Shop.css'
import Player from '../Player/Player';

const Shop = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('stardb.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    return (
        <div className='shop-container'>
            <div className="player-container">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                    ></Player>)
                }
            </div>
            <div className="player-rate">
                <h2>star rate</h2>
            </div>
        </div>
    );
};

export default Shop;