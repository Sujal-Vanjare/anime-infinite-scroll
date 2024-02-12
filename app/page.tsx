import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-16 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:gap-6 mx-auto">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}