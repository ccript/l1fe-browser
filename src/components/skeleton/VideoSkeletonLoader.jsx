import { Skeleton } from "../ui/skeleton";

const VideosSkeletonLoader = () => {
  return (
    <div className="w-full text-start max-w-[672px]">
      <div className="border my-3 rounded-2xl">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-full">
            <div className="flex gap-4 p-5">
              <div className="min-w-[192px]">
                <Skeleton className="w-[192px] h-[128px] object-cover rounded-lg" />
              </div>
              <div className="flex flex-col justify-between text-gray-500 flex-1">
                <div className="flex items-center gap-x-3 text-sm text-gray-400">
                  <Skeleton className="rounded-full w-4 h-4" />
                  <Skeleton className="w-[200px] h-[16px] rounded-full" />
                </div>
                <Skeleton className="w-full h-[24px] rounded-lg" />
                <Skeleton className="w-full h-[40px] rounded-lg" />
                <div className="flex items-center gap-x-1 text-neutral-400 text-sm">
                  <Skeleton className="w-[50px] h-[16px] rounded-full" />
                  <Skeleton className="w-[60px] h-[16px] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosSkeletonLoader;
