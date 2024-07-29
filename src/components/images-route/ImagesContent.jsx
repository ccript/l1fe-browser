import { useState, useEffect } from "react";
import ImagesDisplay from "./ImagesDisplay";
import { SearchImageAction } from "../../../actions/search/SearchAction";
import ImagesSkeletonLoader from "../skeleton/ImageSkeletonLoader";
const ImagesContent = ({ query }) => {
  const [imagesData, setImagesData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        setLoading(true);
        const data = await SearchImageAction(query);
        setImagesData(data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [query]);

  console.log(imagesData);

  return (
    <section className="flex flex-col gap-4 px-3 text-start">
      {loading ? (
        <ImagesSkeletonLoader />
      ) : imagesData?.results.length > 0 ? (
        <ImagesDisplay imagesData={imagesData.results} />
      ) : (
        <div className="flex items-center mt-8 lg:container lg:ml-16 ">
          No content available at the moment.
        </div>
      )}
    </section>
  );
};

export default ImagesContent;
