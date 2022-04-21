import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { FaShoppingCart } from "react-icons/fa";

const ProductItem = (props) => {
  const { id, title, price, imageUrl } = props;
  const cartDespatch = useDispatch();
  const addToCartHandler = () => {
    cartDespatch(
      cartActions.addToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <div className={classes["img-wrapper"]}>
        <img
          src={imageUrl}
          alt="handy-craft"
          className={classes["card-image"]}
        ></img>
      </div>
      <div className={classes.actions}>
        <p className={classes.title}>{title}</p>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <button onClick={addToCartHandler} className={classes.cart}>
        <FaShoppingCart />
      </button>
    </li>
  );
};

export default ProductItem;
