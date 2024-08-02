"use client";
import React from "react";
import Image from "next/image";
import search_filter_ico from "@/assets/icons/search-filter-ico.svg";
import { ImagesIcon, Newspaper, Film, SearchIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const NavigationLinks = ({ searchParams }) => {
  const pathname = usePathname();

  const updatePathname = (newPathname) => {
    const params = new URLSearchParams(searchParams);
    return `${newPathname}?${params.toString()}`;
  };

  return (
    <div className="flex w-full text-start pt-2">
      <div className="flex items-center w-full justify-between max-w-[672px] 2xl:max-w-[672px]">
        <div className="flex gap-3 text-neutral-400">
          <Link
            href={updatePathname("/search")}
            className={`flex gap-1 items-center px-1 pb-2  ${
              pathname.includes("search")
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : "border-transparent"
            }`}
          >
            <SearchIcon size={16} />
            All
          </Link>
          <Link
            href={updatePathname("/images")}
            className={`flex gap-1 items-center px-1 pb-2 ${
              pathname.includes("images")
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : ""
            }`}
          >
            <ImagesIcon size={16} />
            <span>Images</span>
          </Link>
          <Link
            href={updatePathname("/news")}
            className={`flex gap-1 items-center px-1 pb-2 ${
              pathname.includes("news")
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : ""
            }`}
          >
            <Newspaper size={16} />
            <span>News</span>
          </Link>
          <Link
            href={updatePathname("/videos")}
            className={`flex gap-1 items-center px-1 pb-2 ${
              pathname.includes("videos")
                ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4"
                : ""
            }`}
          >
            <Film size={16} />
            <span>Videos</span>
          </Link>
        </div>
        {/* <div className="flex gap-3 text-neutral-400">
          <Link className="pb-3">
            <Image
              src={search_filter_ico}
              width={18}
              height={18}
              alt={"setting_ico"}
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default NavigationLinks;
