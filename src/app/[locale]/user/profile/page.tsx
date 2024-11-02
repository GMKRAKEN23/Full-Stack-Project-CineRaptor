import LogoutButton from "@/components/Logout-button/Logout-button";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";
import { getHydrateMovies } from "@/utils/movieClient";
import MediaCard from "@/components/Media-card/MediaCard";
import { Session } from "next-auth"; 

interface UserLikes {
  id: number;
  movieId: string;
  userId: number;
}

interface UserWithLikes {
  email: string;
  movieLikes: UserLikes[];
}

interface CustomSession extends Session {
  user: {
    email: string;
  };
}

const ProfilePage = async ({ params }: { params: { locale: string } }) => {
  const session: CustomSession | null = await getServerSession();

  if (!session || !session.user) {
    return <div>Please log in to view your profile.</div>;
  }

  const user: UserWithLikes | null = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: {
      movieLikes: true,
    },
  });

  if (!user) {
    return <div>User not found.</div>;
  }

  const movieIds = user.movieLikes.map((like) => like.movieId);
  const movies = await getHydrateMovies(movieIds);

  return (
    <div>
      <div>
        <h1>Liste des films aimés</h1>
        <LogoutButton />
      </div>
      <div className="">
        {movies.map((movie) => (
          <MediaCard media={movie} locale={params.locale} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
