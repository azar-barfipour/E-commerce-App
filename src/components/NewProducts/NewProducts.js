import { useSelector } from "react-redux";

import NewProductItems from "./NewProductItems";

const NewProducts = () => {
  const data = useSelector((state) => state.products.items);
  return (
    <div>
      {data.map((product, inx) => {
        return (
          <NewProductItems
            key={inx}
            title={product.title}
            des={product.desc}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default NewProducts;
