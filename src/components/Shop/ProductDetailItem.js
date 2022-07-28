import Zoom from "react-img-zoom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./ProductDetailItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { backgroundActions } from "../../store/background-slice";

const ProductDetailItem = ({ name, imageUrl, description, price, id }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showDescHandler = (e) => {
    e.preventDefault();
    setShowDesc(!showDesc);
  };
  const addToCartHandler = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(
        cartActions.addToCartFromDetail({
          id,
          name,
          price,
          quantity,
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
  const increaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((prev) => prev - 1);
  };
  return (
    <div className={classes["detail-wrapper"]}>
      <Zoom
        img={imageUrl}
        className={classes["detail_img"]}
        zoomScale={3}
        width={500}
        height={400}
        transitionTime={0.5}
      ></Zoom>
      <div>
        <div className={classes["detail-wrapper-info"]}>
          <p className={classes["detail_title"]}>{name}</p>
          <p>{`$${price?.toFixed(2)}`}</p>
          <Button variant="light" onClick={showDescHandler}>
            Description
          </Button>
          {showDesc && <p>{description}</p>}
          <div className={classes.buttons}>
            <Button variant="info" onClick={increaseQuantity}>
              +
            </Button>
            <p className={classes.amount}>{quantity}</p>
            <Button variant="info" onClick={decreaseQuantity}>
              -
            </Button>
          </div>
          <Button onClick={addToCartHandler}>add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
