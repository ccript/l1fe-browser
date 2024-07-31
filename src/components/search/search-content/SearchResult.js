import Link from "next/link";
import React from "react";
import MapResult from "./MapResult";
import Image from "next/image";

const SearchResult = ({ results }) => {
  return (
    <>
      <div className="p-6 text-neutral-600 font-normal">
        <div className="flex gap-2 item-center">
          {results?.meta_url.favicon && (
            <Image
              src={results?.meta_url?.favicon}
              height={30}
              width={30}
              style={{ width: "30px", height: "30px" }}
              alt={"search image"}
            />
          )}

          <div className="flex flex-col text-sm line-clamp-3">
            <p className="line-clamp-3 font-medium">
              {results?.profile?.name || results?.title}
            </p>
            <div className="text-neutral-500 font-medium ">
              <p className="line-clamp-3 text-xs">
                {results?.meta_url?.path || results?.meta_url?.netloc}
              </p>{" "}
            </div>
          </div>
        </div>
        <Link href={results?.url}>
          <h1 className="text-blue-700 text-lg hover:underline line-clamp-3">
            <p className=" line-clamp-3">{results?.title}</p>
          </h1>
        </Link>
        <div className="flex">
          <p
            className="text-neutral-600"
            dangerouslySetInnerHTML={{
              __html: `${results?.age ? `${results?.age} -` : ""} ${
                results?.description
              } `,
            }}
          />
        </div>

        {results?.cluster?.length > 0 && (
          <div className="grid grid-cols-2 gap-4 w-[80%] py-4">
            {results?.cluster.map((cluster, index) => (
              <div key={index} className="space-y-1 rounded">
                <Link
                  href={cluster?.url}
                  className="text-blue-700 hover:underline"
                >
                  <h2 className=" text-lg truncate">{cluster?.title}</h2>
                </Link>
                <p className="line-clamp-2">{cluster?.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* {results?.mapData?.length > 0 && <MapResult mapData={results?.mapData} />} */}
    </>
  );
};

export default SearchResult;
