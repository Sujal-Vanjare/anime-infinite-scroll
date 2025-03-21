import Image from "next/image";

export default function Hero() {
  return (
    <header className="min-[1500px]:mt-6 min-[1500px]:rounded-xl bg-[url('/mobHero.webp')] sm:bg-[url('/hero.webp')]  bg-center bg-cover bg-no-repeat w-full h-[800px]  sm:h-[600px] sm:p-20 p-10 flex flex-col justify-between">
      <Image
        width={96}
        height={126.15}
        src="/logo.png"
        alt="logo"
        className="w-16 sm:w-24 h-auto"
      />
      <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
        Explore The <span className="red-gradient">Diverse Realms</span> of
        Anime Magic
      </h1>
    </header>
  );
}
