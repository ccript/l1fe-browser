import { Skeleton } from "../ui/skeleton";

const ImagesSkeletonLoader = () => {
  return (
    <div className="grid grid-flow-row grid-cols-8 justify-center w-full gap-2">
      <div className="col-span-5 2xl:col-span-6 text-sm 2xl:text-base py-4">
        <div className="columns-1 md:columns-2 lg:columns-3 2xl:columns-4 space-y-3">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="p-2 border rounded-xl transition-transform duration-300 break-inside-avoid border-neutral-200"
            >
              <div className="flex h-full flex-col gap-2 rounded-xl">
                <Skeleton className="rounded-xl object-cover w-full h-40" />
                <div className="flex items-center gap-1">
                  <Skeleton className="rounded size-4 w-4 h-4" />
                  <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </div>
                <Skeleton className="truncate w-full h-[20px] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative col-span-3 2xl:col-span-2 text-sm 2xl:text-base border-s py-6 px-3">
        <div className="sticky top-20 max-h-[calc(100vh-8rem)] 2xl:max-h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar pb-3 space-y-8">
          <Skeleton className="w-full h-[20px] rounded-full mb-2" />
          <div className="flex items-center gap-1 mb-6">
            <Skeleton className="rounded size-4 w-4 h-4" />
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          </div>
          <Skeleton className="rounded-xl object-cover w-full h-60" />
          <div className="ms-2 flex items-center justify-start gap-8 text-blue-600 mt-6">
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                className="rounded-full shadow-xl ring-1 ring-opacity-15 ring-neutral-500 p-3 w-[40px] h-[40px]"
              />
            ))}
          </div>
          <Skeleton className="p-5 border rounded-full w-full h-[50px] text-start text-sm mt-6" />
        </div>
      </div>
    </div>
  );
};

export default ImagesSkeletonLoader;
