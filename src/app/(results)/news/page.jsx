import NewsContent from "@/components/news/NewsContent";
const News = ({ searchParams }) => {
  return (
    <section className="mt-2 w-full text-start">
      <NewsContent searchParams={searchParams} />
    </section>
  );
};

export default News;
