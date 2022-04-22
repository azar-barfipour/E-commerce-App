import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import { cartActions } from "./store/cart-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import ProductDetail from "./components/Shop/ProductDetail";

let isInitial = true;

function App() {
  const cartVisible = useSelector((state) => state.ui.cartShow);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://udemy-redux-99e3b-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await res.json();
      console.log(data);
      dispatch(cartActions.replaceCart(data));
    };
    getData();
  }, []);

  useEffect(() => {
    const storeCart = async () => {
      dispatch(
        uiActions.notificationAlert({
          status: "pending",
          message: "data is sending....",
          error: "",
        })
      );
      try {
        const res = await fetch(
          "https://udemy-redux-99e3b-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );
        dispatch(
          uiActions.notificationAlert({
            status: "success",
            message: "data has been sent",
            error: "",
          })
        );
      } catch (err) {
        dispatch(
          uiActions.notificationAlert({
            status: "error",
            message: "sending data failed!!!",
            error: err.message,
          })
        );
      }
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    storeCart();
  }, [cart, dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
      </Routes>
      {cartVisible && <Cart />}
    </Layout>
  );
}

export default App;
