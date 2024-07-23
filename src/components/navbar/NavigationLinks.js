"use client";
import Link from "next/link";
import Image from "next/image";
import search_filter_ico from "@/assets/icons/search-filter-ico.svg";
import { ImagesIcon, Newspaper, Film, GlassesIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
const NavigationLinks = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <div className="flex w-full container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">
      <div className="flex items-center w-full justify-between max-w-[630px] 2xl:max-w-[650px]">
        <div className="flex gap-3 text-neutral-400">
          <Link
            href={`/search?q=${searchQuery}`}
            className={`px-2 pb-3 ${
              pathname.startsWith("/search")
                ? "text-[#06D6A0] border-b-[#06D6A0]  border-b-4"
                : "border-transparent"
            }`}
          >
            All
          </Link>
          <Link
            href={`/images?q=${searchQuery}`}
            className={`flex gap-1 items-center px-1 pb-3 ${
              pathname.startsWith("/images")
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : ""
            }`}
          >
            <ImagesIcon size={16} />
            <span>Images</span>
          </Link>
          <Link
            href={`/news?q=${searchQuery}`}
            className={`flex gap-1 items-center px-1 pb-3 ${
              pathname.startsWith("/news")
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : ""
            }`}
          >
            <Newspaper size={16} />
            <span>News</span>
          </Link>
          <Link
            href={`/videos?q=${searchQuery}`}
            className={`flex gap-1 items-center px-1 pb-3 ${
              pathname.startsWith("/videos")
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : ""
            }`}
          >
            <Film size={16} />
            <span>Videos</span>
          </Link>
          {/* <Link
            href={`/search?filter=Googles`}
            className={`flex gap-1 items-center px-1 pb-3 ${
              filter === "Googles"
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : ""
            }`}
          >
            <GlassesIcon size={16} />
            <span>Googles</span>
          </Link> */}
        </div>
        <div className="flex gap-3 text-neutral-400">
          <Link href={`#`} className="pb-3">
            <Image
              src={search_filter_ico}
              width={18}
              height={18}
              alt={"setting_ico"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationLinks;
