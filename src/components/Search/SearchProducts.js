import { useState } from "react";
import Form from "react-bootstrap/Form";
import classes from "./Search.module.css";

const SearchProducts = ({ shoppingItems, onSetFiltered }) => {
  const [entered, setEntered] = useState("");

  const searchHandler = (e) => {
    setEntered(e.target.value);
    const filtered = shoppingItems.filter(
      (item) =>
        item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    onSetFiltered(filtered);
  };
  return (
    <Form className={classes.form}>
      <Form.Group className="mt-5 w-50 mx-auto">
        <Form.Control
          type="search"
          placeholder="search"
          onChange={searchHandler}
          value={entered}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchProducts;
