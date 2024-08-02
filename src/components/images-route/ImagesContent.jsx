import ImagesDisplay from "./ImagesDisplay";
import { SearchImageAction } from "@/actions/search/SearchAction";

const ImagesContent = async ({ query, offset }) => {
  try {
    const data = await SearchImageAction(query, offset);

    return (
      <section className="flex flex-col gap-4 px-3 text-start">
        {data?.results.length > 0 ? (
          <ImagesDisplay imagesData={data.results} />
        ) : (
          <div className="flex items-center mt-8 lg:container lg:ml-16">
            No content available at the moment.
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error("Error fetching image data:", error);
    return (
      <section className="flex flex-col gap-4 px-3 text-start">
        <div className="flex items-center mt-8 lg:container lg:ml-16">
          Error loading images.
        </div>
      </section>
    );
  }
};

export default ImagesContent;
