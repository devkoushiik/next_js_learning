import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <div className="overflow-x-auto">
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <Link href={"/users?sortOrder=name"}>Name</Link>
            </th>
            <th>
              <Link href={"/users?sortOrder=email"}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((item) => (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <ul></ul>
    </div>
  );
};
export default UserTable;
