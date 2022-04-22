import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductDetailItem from "./ProductDetailItem";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const getProductDetailData = async () => {
      const res = await fetch(
        `https://udemy-redux-99e3b-default-rtdb.firebaseio.com/shoppingItems/items/${productId}.json`
      );
      const productDetailData = await res.json();
      setProductDetail(productDetailData);
    };
    getProductDetailData();
  }, []);

  return (
    <>
      {productDetail && (
        <ProductDetailItem
          key={productDetail.id}
          name={productDetail.name}
          price={productDetail.price}
          description={productDetail.description}
          imageUrl={productDetail.imageUrl}
        />
      )}
    </>
  );
};

export default ProductDetail;
