import LogoutButton from "@/components/Logout-button/Logout-button";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";
import { getHydrateMovies } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";
import { Session } from "next-auth";
import { getDictionary } from "@/utils/dictionaries";

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

interface ProfilePageParams {
  params: Promise<{
    locale: "en" | "fr"; 
  }>;
  
}

const ProfilePage = async ({ params }: ProfilePageParams) => {
  const { locale } = await params;
  const i18n = await getDictionary(locale);
  
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
      <div className="flex mx-6 mt-6 mb-4 px-10 flex-col sm:flex-row sm:justify-between items-center">
        <h2 className="font-semibold text-lg font-montserrat my-4 text-center md:text-start tracking-wider">{i18n.profilPage.title}</h2>
        <LogoutButton locale={locale} />
      </div>
      <div className="flex gap-10 px-16 pb-8 flex-wrap md:justify-start justify-center">
        {movies.map((movie) => (
          <MediaCard
            media={movie}
            locale={locale}
            key={movie.id}
            isLiked={user.movieLikes.some((like) => like.movieId === movie.id)}
            forceRed={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
