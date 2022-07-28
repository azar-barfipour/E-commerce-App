import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const cartToggleHandler = (e) => {
    e.preventDefault();
    dispatch(uiActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>
        <FaShoppingCart />
      </span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
