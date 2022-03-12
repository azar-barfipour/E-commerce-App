import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
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
    </Card>
  );
};

export default Cart;
