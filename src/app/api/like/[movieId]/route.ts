import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server"; 
import { NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: { movieId: string } }) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const { movieId } = params; 

  const user = await prisma.user.update({
    where: {
      email: token.email as string, 
    },
    data: {
      movieLikes: {
        create: [{ movieId }],
      },
    },
  });

  return NextResponse.json(user);
}
