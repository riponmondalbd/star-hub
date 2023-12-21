import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let salary = 0;
    for (const player of cart) {
        salary = salary + player.salary;
    }

    return (
        <div className='cart-container'>
            <h2>Star Rate</h2>
            <p>Selected Player: {cart.length}</p>
            <ol>
                {
                    cart.map(player => (
                        <li key={player.id}>{player.name} - Salary: ${player.salary}</li>
                    ))
                }
            </ol>
            <p>Total Salary: ${salary}</p>
        </div>
    );
};

export default Cart;