import { Skeleton } from "../ui/skeleton";

const NewsSkeletonLoader = () => {
  return (
    <div className="w-full text-start max-w-[672px]">
      <div className="border my-3 rounded-2xl">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-full">
            <div className="flex gap-4 p-5">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-x-2 text-xs text-gray-400">
                  <Skeleton className="rounded-full w-4 h-4" />
                  <Skeleton className="w-[150px] h-[16px] rounded-full" />
                </div>
                <Skeleton className="w-full h-[24px] rounded-full" />
                <Skeleton className="w-full h-[60px] rounded-lg" />
              </div>
              <div className="min-w-[100px]">
                <Skeleton className="w-[100px] h-[80px] object-cover rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSkeletonLoader;
