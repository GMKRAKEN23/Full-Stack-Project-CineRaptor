import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
      const { password, ...userWithoutPassword } = user;
      return NextResponse.json(userWithoutPassword, { status: 200 });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}