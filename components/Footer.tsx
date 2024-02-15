export default function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap ">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
      <img src="/logo.png" alt="logo" className="object-contain w-7 h-7" />
      <div className="flex items-center gap-6">
        <img src="./tiktok.svg" alt="logo" className="object-contain" />
        <img src="./instagram.svg" alt="logo" className="object-contain" />
        <img src="./twitter.svg" alt="logo" className="object-contain" />
      </div>
    </footer>
  );
}
