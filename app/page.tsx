import Link from "next/link";
import ProductCard from "./components/ProductCard";

const page = () => {
  return (
    <div>
      <h1>Hello Bitch</h1>
      <Link href={"/users"}>Users</Link>
      <ProductCard />
    </div>
  );
};
export default page;
