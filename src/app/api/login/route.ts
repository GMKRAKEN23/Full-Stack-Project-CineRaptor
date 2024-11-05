import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const {...rest } = user;
    return NextResponse.json(rest);
  }

  return NextResponse.json(null);
}