import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

const UserDetails = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetails {id}</div>;
};
export default UserDetails;
