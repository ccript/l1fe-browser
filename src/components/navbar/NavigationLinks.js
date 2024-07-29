"use client";
import React from "react";
import Image from "next/image";
import search_filter_ico from "@/assets/icons/search-filter-ico.svg";
import { ImagesIcon, Newspaper, Film } from "lucide-react";

const NavigationLinks = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex w-full container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">
      <div className="flex items-center w-full justify-between max-w-[630px] 2xl:max-w-[650px]">
        <div className="flex gap-3 text-neutral-400">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-2 pb-3 ${activeTab === "all" ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4" : "border-transparent"}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`flex gap-1 items-center px-1 pb-3 ${activeTab === "images" ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4" : ""}`}
          >
            <ImagesIcon size={16} />
            <span>Images</span>
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`flex gap-1 items-center px-1 pb-3 ${activeTab === "news" ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4" : ""}`}
          >
            <Newspaper size={16} />
            <span>News</span>
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex gap-1 items-center px-1 pb-3 ${activeTab === "videos" ? "text-[#06D6A0] border-b-[#06D6A0] border-b-4" : ""}`}
          >
            <Film size={16} />
            <span>Videos</span>
          </button>
        </div>
        {/* <div className="flex gap-3 text-neutral-400">
          <button className="pb-3">
            <Image
              src={search_filter_ico}
              width={18}
              height={18}
              alt={"setting_ico"}
            />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NavigationLinks;
