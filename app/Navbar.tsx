import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex">
      <Link className="mr-2" href={"/"}>
        Next.JS
      </Link>
      <Link className="mr-2" href={"/admin"}>
        Admin
      </Link>
      <Link className="mr-2" href={"/users"}>
        User
      </Link>
    </div>
  );
};
export default Navbar;
