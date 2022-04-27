import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import NewProducts from "./NewProducts";
import { productsActions } from "../../store/products-slice";
import { sendData } from "../../store/sendData";

const NewProductsForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  console.log(data);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      productsActions.addItems({
        title: title,
        desc: desc,
        price: price,
      })
    );
  };

  useEffect(() => {
    sendData(data);
  }, [data]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          name="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          name="des"
          placeholder="description"
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        <input
          name="price"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button>Add</button>
      </form>

      <NewProducts />
    </div>
  );
};

export default NewProductsForm;
