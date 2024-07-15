import Image from "next/image";
import text_logo from "@/assets/icons/l1fe-logo.svg";
import download_ico from "@/assets/icons/download-ico.svg";
export default function Home() {
  return (
    <main className="flex gap-12 h-full flex-col items-center justify-center container mx-auto p-6 md:p-24">
      <div className="">
        <Image src={text_logo} width={200} height={100} alt={"l1fe logo"} />
      </div>
      <div className="w-full">
        <input
          className="w-full md:w-[550px] h-14 px-4 placeholder:text-neutral-600 rounded-xl border border-opacity-55 shadow-md"
          placeholder="Search anything, with absolute privacy..."
        />
      </div>
      <div className="flex flex-col gap-5 items-center text-center">
        <p className="text-xs">
          We’re on a mission to Save America. Learn more by clicking below.
        </p>
        <button className="flex items-center justify-center rounded-xl gap-3 px-4 h-11 border hover:border-opacity-100 border-blue-300 border-opacity-50 shadow-lg">
          {" "}
          <Image
            className="size-4"
            src={download_ico}
            width={15}
            height={15}
            alt={"l1fe logo"}
          />
          <span className="text-sm font-semibold">ABOUT L1FE USA</span>
        </button>
      </div>
    </main>
  );
}
