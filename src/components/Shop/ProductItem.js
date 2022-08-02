import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { backgroundActions } from "../../store/background-slice";

const ProductItem = (props) => {
  const { id, title, price, imageUrl } = props;
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();

  const addToCartHandler = () => {
    if (isLogin) {
      dispatch(
        cartActions.addToCart({
          id,
          title,
          price,
        })
      );
    } else {
      dispatch(
        backgroundActions.setBackground(
          "https://c4.wallpaperflare.com/wallpaper/163/916/916/cat-look-fluffy-persian-cat-wallpaper-preview.jpg"
        )
      );
      navigate("/login");
    }
  };
  return (
    <>
      <Card>
        <li className={classes.item}>
          <Link to={`/detail/${id}`} className={classes.link}>
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
          </Link>
          <button onClick={addToCartHandler} className={classes.cart}>
            <FaCartPlus />
          </button>
        </li>
      </Card>
    </>
  );
};

export default ProductItem;
