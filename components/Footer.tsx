import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap ">
      <p className="text-base font-bold text-white">@2024 Anime Discovery</p>
      <Image
        width={70}
        height={92}
        src="/logo.png"
        alt="logo"
        className="object-contain w-7 h-7"
      />
      <div className="flex items-center gap-6">
        <Image
          width={16}
          height={18}
          src="./tiktok.svg"
          alt="logo"
          className="object-contain"
        />
        <Image
          width={19}
          height={19}
          src="./instagram.svg"
          alt="logo"
          className="object-contain"
        />
        <Image
          width={18}
          height={19}
          src="./twitter.svg"
          alt="logo"
          className="object-contain"
        />
      </div>
    </footer>
  );
}
