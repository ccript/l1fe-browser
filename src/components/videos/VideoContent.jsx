import Image from "next/image";

import Link from "next/link";
import { Eye } from "lucide-react";
import NextButton from "@/components/shared/NextButton";
import { SearchVideoAction } from "../../../actions/search/SearchAction";

const formatViewsCount = (count) => {
  if (count >= 1000 && count < 1000000) {
    return (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "k";
  } else if (count >= 1000000) {
    return (count / 1000000).toFixed(count % 1000000 === 0 ? 0 : 1) + "M";
  }
  return count;
};

const VideoContent = async ({ offset, query }) => {
  const data = await SearchVideoAction(query, offset);
  const currentOffset = parseInt(offset) || 0;

  return (
    <div className="w-full text-start max-w-[672px]">
      <div className="border my-3 rounded-2xl">
        {data?.results?.length > 0 ? (
          data?.results.map((video, index) => {
            return (
              <div key={index} className="w-full">
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
                  <div className="flex flex-col justify-between text-gray-500">
                    <Link
                      href={video?.url}
                      className="text-sm text-gray-400 flex items-center gap-x-3"
                    >
                      <Image
                        src={video?.meta_url?.favicon}
                        alt="logo"
                        width={16}
                        height={16}
                        priority
                      />
                      {video?.video?.publisher}{" "}
                      {video?.video?.creator ? " › " : ""}{" "}
                      {video?.video?.creator}
                    </Link>
                    <Link
                      href={video?.url}
                      className="text-xl line-clamp-2 text-blue-700 hover:underline"
                    >
                      {video.title}
                    </Link>
                    <div className="text-sm line-clamp-1">
                      {video.description}
                    </div>
                    <div className="text-neutral-400 flex text-sm gap-3">
                      <div className="">{video?.age}</div>
                      <div className="flex items-center gap-x-1">
                        <Eye size={10} />
                        {formatViewsCount(video?.video?.views)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex w-full items-center justify-center py-6">
            No content available at the moment.
          </div>
        )}
      </div>
      {data?.results?.length > 0 && (
        <NextButton currentOffset={currentOffset} query={query} />
      )}
    </div>
  );
};

export default VideoContent;
