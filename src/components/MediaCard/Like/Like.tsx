"use client";

import { useSession, signIn } from "next-auth/react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

type LikeProps = {
  mediaId: string;
  isLiked: boolean;  
  forceRed?: boolean;
};

export default function Like({ mediaId, isLiked, forceRed = false }: LikeProps) {
  const { data: session } = useSession();
  const [liked, setLiked] = useState(isLiked); 
  const router= useRouter();

  const handleLikeClicked = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!session) {
      signIn();
      return;
    }

    await fetch(`/api/like/${mediaId}`, {
      method: "POST",
    });

    setLiked(!liked);
    router.refresh()

  };

  return (
    <div onClick={handleLikeClicked} className="z-20 absolute -top-1 -right-1.5 cursor-pointer text-red-500 hover:text-sky-600 duration-200 ease-in-out transform">
       <FaHeart color={forceRed || liked ? "red" : "grey"} />
    </div>
  );
}
