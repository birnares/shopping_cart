import React from "react";
import priceFormatter from "./../../Utils/priceFormatter";
import "./CartFooter.scss";

const CartFooter = ({ total }) => {
  const { count, price } = total;
  return (
    <>
      <footer className="cart-footer">
        <div className="cart-footer__count">{count} шт.</div>
        <div className="cart-footer__price">{priceFormatter(price)} руб.</div>
      </footer>
    </>
  );
};

export default CartFooter;
