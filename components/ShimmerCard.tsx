export default function ShimmerCard() {
  return (
    <div className="animate-pulse max-w-sm rounded relative w-full">
      <div className="bg-stone-700 rounded-xl relative w-full aspect-[2/3]"></div>
      <div className="py-4 flex flex-col gap-3 ">
        <div className="flex justify-between">
          <div className="bg-stone-700 h-7 w-[80%] rounded-md "></div>
          <div className="bg-stone-700 h-7 w-[10%] rounded-md"></div>
        </div>
        <div className=" bg-stone-700 h-6 w-[50%] rounded-md"></div>
      </div>
    </div>
  );
}
