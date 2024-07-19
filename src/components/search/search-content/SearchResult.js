import Link from "next/link";
import React from "react";
import MapResult from "./MapResult";
import Image from "next/image";
import AccordionResult from "./AccordionResult";

const SearchResult = ({ results }) => {
  return (
    <>
      <div className="p-6">
        <div className="flex gap-3 item-center">
          <div className="size-[40px] border bg-blue-200 rounded-lg" />
          <div className="flex flex-col text-xs gap-1">
            <div>
              <p>{results?.title}</p>
            </div>
            <div className="text-neutral-500 font-medium">{results?.path} </div>
          </div>
        </div>
        <Link href={`#`}>
          <h1 className="text-blue-700 text-lg hover:underline">
            {results?.linkTitle}{" "}
          </h1>
        </Link>
        <div className="flex">
          <p>{results?.description}</p>
          {results?.image && (
            <Image
              src={results?.image}
              className="object-contain"
              width={100}
              height={75}
              alt={"search_img_1"}
            />
          )}
        </div>
        {results?.contact && (
          <div className="flex flex-col gap-2  text-sm">
            <div className="flex justify-between w-full gap-2 mt-4">
              <div className="w-1/2">
                <span className="font-semibold">Price: </span>{" "}
                {results?.contact?.price}
              </div>
              <div className="w-1/2">
                <span className="font-semibold"> Call: </span>
                <span className="hover:underline cursor-pointer text-blue-700">
                  {results?.contact?.phone}
                </span>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="w-1/2">
                <span className="font-semibold">Address:</span>{" "}
                {results?.contact?.address}
              </div>
            </div>
          </div>
        )}
      </div>
      {results?.mapData?.length > 0 && <MapResult mapData={results?.mapData} />}
      {results?.accordionData?.length > 0 && (
        <AccordionResult accordionData={results?.accordionData} />
      )}
    </>
  );
};

export default SearchResult;
