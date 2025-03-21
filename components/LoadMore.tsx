"use client";

import { fetchAnime } from "@/app/action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";
import Image from "next/image";

let page = 2;

export type AnimeCard = JSX.Element;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  /// fetch anime server action called in , client side
  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-auto">
        {data}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            width={56}
            height={56}
            unoptimized
            src="./spinner.svg"
            alt="spinner"
            className="object-contain w-14 h-14"
          />
        </div>
      </section>
    </>
  );
}
