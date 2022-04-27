import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const login = useSelector((state) => state.login.isLoggedIn);
  useEffect(() => {
    const fetchShoppingData = async () => {
      const res = await fetch(
        "https://udemy-redux-99e3b-default-rtdb.firebaseio.com/shoppingItems.json"
      );
      let data = await res.json();
      data = data.items;
      let loadedShoppingItems = [];
      for (let key in data) {
        loadedShoppingItems.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
          imageUrl: data[key].imageUrl,
        });
      }
      setShoppingItems(loadedShoppingItems);
    };
    fetchShoppingData();
  }, []);
  return (
    <section className={classes.products}>
      {login && <Link to="/new-products">Add Products</Link>}
      <ul className={classes["products__list"]}>
        {shoppingItems &&
          shoppingItems.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default Products;
