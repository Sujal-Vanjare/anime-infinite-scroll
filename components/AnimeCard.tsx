import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full aspect-[2/3]">
        <Image
          unoptimized
          fill
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          className="absolute inset-0 rounded-xl  object-cover w-full h-full  bg-stone-800"
        />
      </div>
      <div className="py-4 flex flex-col gap-3 ">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              unoptimized
              width={20}
              height={20}
              src="./episodes.svg"
              alt="episodes"
              className="object-contain h-5 w-5"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              unoptimized
              width={18}
              height={18}
              src="./star.svg"
              alt="star"
              className="object-contain bg h-[18px] w-[18px}"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
