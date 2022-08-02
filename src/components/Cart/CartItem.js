import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CartItem = (props) => {
  const [productDetail, setProductDetail] = useState({});
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        title,
        price,
        id,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <p>{title}</p>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <div className={classes["item__price"]}>
            <small>(${price.toFixed(2)}/item)</small>
          </div>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
