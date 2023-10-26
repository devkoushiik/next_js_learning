import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: number };
}

// getting object.
export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (!user) {
    return NextResponse.json({ error: "UserNot Found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
// put or replacing object
export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  // validation
  const validation = schema.safeParse(body);
  // validation will return success object or error object
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // finding user
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  // if not found
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  // if found -> updater
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}
// deleting object.
export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
}
