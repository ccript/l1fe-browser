import Link from "next/link";
import React from "react";
import MapResult from "./MapResult";
import Image from "next/image";

const SearchResult = ({ results }) => {
  return (
    <>
      <div className=" text-neutral-600 font-normal">
        <div className="flex gap-2 items-center">
          {results?.meta_url.favicon && (
            <div className=" w-[26px] h-[26px] flex items-center justify-center rounded bg-neutral-200">
              <Image
                src={results?.meta_url?.favicon}
                height={20}
                width={20}
                style={{ width: "16px", height: "16px" }}
                alt={"search image"}
              />
            </div>
          )}

          <div className="flex flex-col text-sm line-clamp-3">
            <p className="line-clamp-3 font-medium">
              {results?.profile?.name || results?.title}
            </p>
            <div className="text-neutral-500 font-medium ">
              <p className="line-clamp-3 text-xs">
                {results?.meta_url?.netloc} {results?.meta_url?.path}
              </p>{" "}
            </div>
          </div>
        </div>
        <Link href={results?.url}>
          <h1 className="text-blue-700 text-lg hover:underline line-clamp-3">
            <p className=" line-clamp-3 text-lg">{results?.title}</p>
          </h1>
        </Link>
        <div className="flex">
          <p
            className="text-neutral-600 text-sm"
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
                <p
                  className="line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: `${cluster?.description} `,
                  }}
                />
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
