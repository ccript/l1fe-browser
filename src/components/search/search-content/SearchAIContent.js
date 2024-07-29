"use client";

import { useState } from "react";
import Image from "next/image";

const SearchAIContent = ({ aiResultsData }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleButtonClick = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className="container mx-auto px-3 md:px-20 2xl:px-6 text-start py-2 my-6">
        <div className="relative 2xl:max-w-screen-lg w-full space-y-12 px-6">
          <h1 className="text-3xl font-bold">{aiResultsData?.title}</h1>
          {showOverlay && (
            <button
              onClick={handleButtonClick}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-50 h-9 px-5 rounded-xl text-blue-800 bg-blue-100 font-semibold"
            >
              More from ADAM AI
            </button>
          )}
          <div className="grid grid-flow-row grid-cols-12 justify-center w-full gap-3">
            <div className="col-span-8 space-y-3 text-sm 2xl:text-base">
              <p>{aiResultsData?.description}</p>
              <ul className="space-y-3 max-w-[70%]">
                {/* {aiResultsData?.companies.map((company, index) => (
                  <li key={index} className="">
                    <div>
                      <p>
                        <b>{company?.name}</b> {company?.description}
                      </p>
                    </div>
                  </li>
                ))} */}
              </ul>
            </div>
            {/* <div className="col-span-4 space-y-3 border-l px-4">
              <div className="flex flex-col">
                <div className="flex">
                  <div>
                    <Image
                      src={aiResultsData?.images[0]}
                      width={161}
                      height={161}
                      alt={"search_img_1"}
                    />
                  </div>
                  <div>
                    <Image
                      src={aiResultsData?.images[1]}
                      width={161}
                      height={161}
                      alt={"search_img_2"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-neutral-500 font-semibold">Follow Up</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {showOverlay && (
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white via-white h-full"
          style={{ height: "100%", bottom: "0", width: "100%", opacity: "0.8" }}
        ></div>
      )}
    </>
  );
};

export default SearchAIContent;
