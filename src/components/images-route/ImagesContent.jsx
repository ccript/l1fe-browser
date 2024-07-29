import { useState, useEffect } from "react";
import ImagesDisplay from "./ImagesDisplay";
import { SearchImageAction } from "../../../actions/search/SearchAction";

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

  return (
    <section className="flex flex-col gap-4 px-3 text-start">
      {loading ? (
        <div>loading...</div>
      ) : (
        imagesData?.results.length > 0 ? <ImagesDisplay imagesData={imagesData.results} /> : <div className='flex items-center justify-start'>No content available at the moment.</div>
      )}
    </section>
  );
};

export default ImagesContent;
