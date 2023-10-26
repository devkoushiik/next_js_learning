import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";
interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const page = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <div>
      <h1>List of Users 👇 </h1>
      <Link className="btn py-3" href="/users/new">
        New User
      </Link>

      <UserTable sortOrder={sortOrder} />
    </div>
  );
};
export default page;
