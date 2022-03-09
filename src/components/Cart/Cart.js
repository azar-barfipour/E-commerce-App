import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const DUMMY_DATA = [
  { id: 1, title: "book1", price: 12 },
  { id: 2, title: "book2", prince: 14 },
];

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
