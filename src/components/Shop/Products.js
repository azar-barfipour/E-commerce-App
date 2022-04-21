import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
  { id: "p1", title: "book1", price: 12, description: "first book" },
  { id: "p2", title: "book2", price: 14, description: "second book" },
];

const Products = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  useEffect(() => {
    const fetchShoppingData = async () => {
      const res = await fetch(
        "https://udemy-redux-99e3b-default-rtdb.firebaseio.com/shoppingItems.json"
      );
      const data = await res.json();
      setShoppingItems(data);
    };
    fetchShoppingData();
  }, []);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul className={classes["products__list"]}>
        {shoppingItems.items &&
          shoppingItems.items.map((product) => {
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
