import VideoContent from "@/components/videos/VideoContent";

const Videos = ({ searchParams }) => {
  return (
    <section className="w-full text-start">
      <VideoContent searchParams={searchParams} />
    </section>
  );
};

export default Videos;
