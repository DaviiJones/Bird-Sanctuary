import React from "react";
import bonusItems from "../data/bonusItems";

const Cart = ({ cart, total, handleRemoveFromCart}) => {
  const qualifyingBonusItems =
    total >= 100 && total < 300
      ? bonusItems.slice(0, 1)
      : (total >= 300) & (total < 500)
      ? bonusItems.slice(0, 2)
      : (total >= 500) & (total < 1000)
      ? bonusItems.slice(0, 3)
      : total >= 1000
      ? bonusItems
      : [];
  


  const discount = cart.length >= 3 ? 10 : 0;
  const multiplier = cart.length >= 3 ? 0.9 : 1;
  return (
    <div className="cart">
      <h3>Cart</h3>
      <h4>{`Discount: ${discount}%`}</h4>
      <h4>{`Total: $${total * multiplier}`}</h4>
      <ol>
        {cart.map((bird) => (
        <>
            <li>{`${bird.name} $${bird.amount}`}</li>
            <button onClick={() => handleRemoveFromCart(bird.id, bird.amount)}>Remove</button>
        </>
        ))}
      </ol>

      {cart.length >= 1 ? (
        <>
            <p>Your Donations have qualified you for the following items:</p>
            <ul>
                {qualifyingBonusItems.map((bonusItem)=><li>{bonusItem}</li>)}
            </ul>
        </>
      ) : null}
    </div>
  );
};

export default Cart;
