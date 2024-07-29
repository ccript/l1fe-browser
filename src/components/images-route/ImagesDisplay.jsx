"use client";

import { useState } from "react";
import ImagesList from "./ImagesList";
import ImageSummary from "./ImageSummary";

const ImagesDisplay = ({ imagesData }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      <div className="grid grid-flow-row grid-cols-8 justify-center w-full gap-2">
        <div className="col-span-5 2xl:col-span-6 text-sm 2xl:text-base py-4">
          <ImagesList
            imagesData={imagesData}
            setSelectedImageIndex={setSelectedImageIndex}
            selectedImageIndex={selectedImageIndex}
          />
        </div>
        <div className="relative col-span-3 2xl:col-span-2 text-sm 2xl:text-base border-s py-6 px-3">
          <ImageSummary selectedImage={imagesData[selectedImageIndex]} />
        </div>
      </div>
    </>
  );
};

export default ImagesDisplay;
