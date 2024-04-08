import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../ContextApi/StoreContext";

const Cart = () => {
  const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Titles</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />  
        {food_list.map((item, index)=>{
          if (cartItem[item._id]> 0 ){
            return (
             <div key={index} className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItem[item._id]}</p>
              <p>{item.price*cartItem[item._id]}</p>
              <p>x</p>
             </div>
            )
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
