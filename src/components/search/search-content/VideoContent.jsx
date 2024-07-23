import React from "react";
import Image from "next/image";

import { Eye } from "lucide-react";

const VIDEO_RESULTS = [
  {
    id: 1,
    source: "YouTube > BBC News",
    sourceLogo:
      "https://imgs.search.brave.com/Ux4Hee4evZhvjuTKwtapBycOGjGDci2Gvn2pbSzvbC0/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTkyZTZiMWU3/YzU3Nzc5YjExYzUy/N2VhZTIxOWNlYjM5/ZGVjN2MyZDY4Nzdh/ZDYzMTYxNmI5N2Rk/Y2Q3N2FkNy93d3cu/eW91dHViZS5jb20v",
    videoThumbnail:
      "https://imgs.search.brave.com/adJd_HAmCmwNe5FGAFfe5VIavMv334-ILcgzyJNebe8/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9x/VVc2VC0xWWpQWS9t/YXhyZXNkZWZhdWx0/LmpwZw",
    title: "Is AI an existential threat to human jobs? | BBC News",
    desc: "As new roles are created and existing ones evolve, what will the future of work look like?...",
    date: "1 year ago",
    views: "1.2M",
  },
];
const VideoContent = () => {
  return (
    <div className="w-full container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">
      <div className="max-w-[630px] 2xl:max-w-[650px] border rounded-2xl p-5">
        {VIDEO_RESULTS.map((video, index) => {
          return (
            <div key={index} className="flex gap-4 py-2">
              <div className="min-w-[192px]">
                <Image
                  width={192}
                  height={128}
                  src={video.videoThumbnail}
                  alt="video-thumbnail"
                  className="w-[192px] h-[128px] object-cover rounded-lg"
                />
              </div>
              <div className="">
                <div className="text-xs text-gray-400 flex items-center gap-x-3">
                  <Image
                    src={video.sourceLogo}
                    alt="logo"
                    width={16}
                    height={16}
                  />
                  {video.source}
                </div>
                <div className="text-lg text-[#7697E3]">{video.title}</div>
                <div className="text-sm text-gray-400">{video.desc}</div>
                <div className="flex items-center gap-x-3">
                  <div className="text-xs text-gray-400">{video.date}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-x-1">
                    <Eye size={18} />
                    {video.views}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContent;
