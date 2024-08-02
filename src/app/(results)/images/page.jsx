import { SearchImageAction } from "../../../../actions/search/SearchAction";
import Navbar from "@/components/navbar/Navbar";
import ImagesContent from "@/components/images-route/ImagesContent";
import { Suspense } from "react";
import ImagesSkeletonLoader from "@/components/skeleton/ImageSkeletonLoader";

const ImagesPage = async ({ searchParams }) => {
  const { q, offset } = searchParams;
  return (
    <>
      <Navbar searchParams={searchParams} />
      <section className="w-full text-start">
        <div className="px-6">
          <Suspense fallback={<ImagesSkeletonLoader />}>
            <ImagesContent query={q} offset={offset} />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default ImagesPage;
