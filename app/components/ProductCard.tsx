import AddtoCard from "./AddtoCard";
import style from "./ProductCart.module.css";
const ProductCard = () => {
  return (
    <div>
      ProductCard
      <h1 className={style.card}>This is product card</h1>
      <AddtoCard />
    </div>
  );
};
export default ProductCard;
