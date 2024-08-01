import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";
import VideoContent from "@/components/videos/VideoContent";
import VideosSkeletonLoader from "@/components/skeleton/VideoSkeletonLoader";
const NewsPage = async ({ searchParams }) => {
  const { q, offset } = searchParams;

  return (
    <>
      <Navbar searchParams={searchParams} />
      <section className="w-full text-start">
        <div className="px-6 md:ps-36">
          <Suspense fallback={<VideosSkeletonLoader />}>
            <VideoContent query={q} offset={offset} />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
