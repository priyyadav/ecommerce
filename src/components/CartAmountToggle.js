import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button  style={{padding:"4px 6px 0px 6px", backgroundColor:"black"}} onClick={() => setDecrease()}>
          <FaMinus/>
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()} style={{padding:"4px 6px 0px 6px",backgroundColor:"black"}}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;