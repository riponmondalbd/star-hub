import React, { useEffect, useState } from 'react';
import './Shop.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;