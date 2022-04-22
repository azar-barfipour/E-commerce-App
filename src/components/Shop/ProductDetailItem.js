import classes from "./ProductDetailItem.module.css";

const ProductDetailItem = ({ name, imageUrl, description, price }) => {
  return (
    <div className={classes["detail-wrapper"]}>
      <div className={classes["detail-wrapper_img"]}>
        <img
          src={imageUrl}
          alt="productItem"
          className={classes["detail_img"]}
        ></img>
      </div>
      <div>
        <div className={classes["detail-wrapper_all-info"]}>
          <div className={classes["detail-wrapper_info"]}>
            <p className={classes["detail_title"]}>{name}</p>
            <p>{`Price: $${price?.toFixed(2)}`}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
