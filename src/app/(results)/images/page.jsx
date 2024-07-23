import ImagesContent from "@/components/images-route/ImagesContent";

const Images = ({ searchParams }) => {
  return (
    <section className="w-full text-start">
      <ImagesContent searchParams={searchParams} />
    </section>
  );
};

export default Images;
