import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <ul className={classes.cart}>
      {cartItems?.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.name,
              price: cartItem.price,
              total: cartItem.totalPrice,
              quantity: cartItem.quantity,
            }}
          />
        );
      })}
    </ul>
  );
};

export default Cart;
