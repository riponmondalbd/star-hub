import React, { useEffect, useState } from 'react';
import './Shop.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('stardb.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const addToCart = (players) => {
        // const newCart = [...cart, players];
        // setCart(newCart);
        let newCart = [];
        const exists = cart.find(pl => pl.id === players.id);
        if (!exists) {
            newCart = [...cart, players];
            setCart(newCart);
        }
        else {
            alert('already exists')
        }
    }


    return (
        <div className='shop-container'>
            <div className="player-container">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        addToCart={addToCart}
                    ></Player>)
                }
            </div>
            <div className="player-rate">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;