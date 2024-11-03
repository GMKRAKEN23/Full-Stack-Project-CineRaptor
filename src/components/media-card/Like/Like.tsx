"use client";

import { useSession, signIn } from "next-auth/react";
import { FaHeart } from "react-icons/fa";

type LikeProps = {
  mediaId: string;
};

export default function Like({ mediaId }: LikeProps) {
  const { data: session } = useSession();

  const handleLikeClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!session) {
      signIn();
    }

    fetch(`api/like/${mediaId}`, {
      method: "POST",
    });
  };

  return (
    <div onClick={handleLikeClicked} className="z-10 absolute -top-1 -right-1 z-10 cursor-pointer text-red-500 hover:text-sky-600 duration-200 ease-in-out transform">
      <FaHeart />
    </div>
  );
}
