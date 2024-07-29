import React from "react";
import Image from "next/image";

import Link from "next/link";


const VideoContent = ({ data }) => {
  return (
    <div className="w-full container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">

      {data?.results?.length > 0 ? (
        data?.results.map((video, index) => {
          return (
            <div key={index} className="max-w-[730px] 2xl:max-w-[730px] border rounded-2xl">
              <div className="flex gap-4 p-5">
                <Link href={video.url} className="min-w-[192px]">
                  <Image
                    width={192}
                    height={128}
                    src={video?.thumbnail?.src}
                    alt="video-thumbnail"
                    className="w-[192px] h-[128px] object-cover rounded-lg"
                  />
                </Link>
                <div className="">
                  <Link href={video?.url} className="text-xs text-gray-400 flex items-center gap-x-3">
                    <Image
                      src={video?.meta_url?.favicon}
                      alt="logo"
                      width={16}
                      height={16}
                      priority
                    />
                    {video?.meta_url?.hostname}{" "}{video?.meta_url?.path}
                  </Link>
                  <Link href={video?.url} className="text-lg text-[#7697E3]">{video.title}</Link>
                  <div className="text-sm text-gray-400">{video.description}</div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className='flex items-center justify-start mt-6'>No content available at the moment.</div>
      )
      }
    </div>
  );
};

export default VideoContent;
