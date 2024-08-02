import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";
import NewsContent from "@/components/news/NewsContent";
import NewsSkeletonLoader from "@/components/skeleton/NewsSeletonLoader";
const NewsPage = async ({ searchParams }) => {
  const { q, offset } = searchParams;

  return (
    <>
      <Navbar searchParams={searchParams} />
      <section className="w-full text-start">
        <div className="px-6 md:ps-36">
          <Suspense fallback={<NewsSkeletonLoader />}>
            <NewsContent query={q} offset={offset} />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
