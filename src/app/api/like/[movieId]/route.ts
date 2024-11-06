import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server"; 
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const pathname = request.nextUrl.pathname;
  const movieId = pathname.split("/").pop(); 

  if (!movieId || typeof movieId !== 'string') {
    return NextResponse.json({ message: "Invalid movieId" }, { status: 400 });
  }

  const existingLike = await prisma.movieLike.findFirst({
    where: {
      movieId: movieId,
      user: {
        email: token.email as string,
      },
    },
  });

  let user;
  if (existingLike) {
    await prisma.movieLike.delete({
      where: {
        id: existingLike.id,
      },
    });
    user = { message: "Movie removed from likes" };
  } else {
    user = await prisma.user.update({
      where: {
        email: token.email as string,
      },
      data: {
        movieLikes: {
          create: [{ movieId }],
        },
      },
    });
  }

  return NextResponse.json(user);
}
