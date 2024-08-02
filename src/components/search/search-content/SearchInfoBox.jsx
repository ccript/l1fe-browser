"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { useSearchParams } from "next/navigation";

const formatReviewCount = (count) => {
  if (count >= 1000 && count < 1000000) {
    return (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "k";
  } else if (count >= 1000000) {
    return (count / 1000000).toFixed(count % 1000000 === 0 ? 0 : 1) + "M";
  }
  return count;
};

function extractDomain(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}

export const SearchInfoBox = ({ infobox }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);
  const searchParams = useSearchParams();
  const isString = (value) => typeof value === "string";
  const updatePathname = (newPathname) => {
    const params = new URLSearchParams(searchParams);
    return `${newPathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col gap-2 border rounded-xl">
      <div className="border-b">
        <div className="space-y-3 p-6">
          <div className="flex gap-3 justify-between">
            <div className="space-y-1">
              <Link
                href={`${infobox?.url}`}
                className="text-2xl hover:text-blue-600 font-semibold"
              >
                {infobox?.title}
              </Link>
              {infobox?.description && (
                <p className="text-neutral-500 text-sm">
                  {infobox?.description}
                </p>
              )}
              {infobox?.website_url && (
                <Link
                  href={`${infobox?.website_url}`}
                  className="flex gap-1 items-center text-neutral-500"
                >
                  <Globe size={15} />{" "}
                  <span className="text-blue-600">
                    {extractDomain(infobox?.website_url)}
                  </span>
                </Link>
              )}
            </div>
            {infobox?.images?.length === 1 && (
              <Link
                href={updatePathname("/images")}
                className=" min-w-20 min-h-20 px-2 py-1 rounded-xl bg-neutral-100"
              >
                <Image
                  src={infobox?.images[0]?.src}
                  className=" size-20 object-contain rounded-xl"
                  width={80}
                  height={80}
                  alt={infobox?.images[0]?.alt}
                />
              </Link>
            )}
            <Link
              href={updatePathname("/images")}
              className=" block md:hidden min-w-20 min-h-20 px-2 py-1 rounded-xl bg-neutral-100"
            >
              <Image
                src={infobox?.images[0]?.src}
                className=" size-20 object-contain rounded-xl"
                width={80}
                height={80}
                alt={infobox?.images[0]?.alt}
              />
            </Link>
          </div>

          {infobox?.images?.length > 1 && (
            <Link
              href={updatePathname("/images")}
              className="hidden md:grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 sm:col-span-1 size-40 border content-center rounded-xl bg-neutral-100">
                <Image
                  src={infobox?.images[0]?.src}
                  className="object-contain rounded-xl w-full h-full"
                  width={160}
                  height={160}
                  alt={infobox?.images[0]?.alt}
                />
              </div>
              <div className="hidden md:grid grid-cols-2 gap-1 col-span-2 sm:col-span-1">
                {infobox?.images?.slice(1, 5).map((image, index) => (
                  <div key={index} className="col-span-1">
                    <Image
                      src={image?.src}
                      className="object-cover w-[72px] h-[76px] rounded-xl"
                      width={72}
                      height={76}
                      alt={image?.alt}
                    />
                  </div>
                ))}
              </div>
            </Link>
          )}

          <div className="text-neutral-600">
            <p className="space-x-1">
              {infobox.long_desc && `${infobox.long_desc} `}
              {infobox?.providers.length > 0 && (
                <Link
                  href={infobox?.providers[0]?.url}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {infobox?.providers[0]?.name}
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>

      {infobox?.ratings?.length > 0 && (
        <div className="space-y-2 py-2 px-6 border-b">
          <h1 className="font-bold text-lg text-neutral-500">Ratings</h1>
          <div className="flex flex-col gap-5">
            {infobox?.ratings.map((rating, index) => (
              <div key={index} className="flex gap-12 items-center">
                <h2 className="text-lg text-neutral-700 font-bold">{`${rating.ratingValue}/${rating.bestRating}`}</h2>
                <Link
                  href={rating?.profile?.url}
                  className="flex text-left justify-start gap-2 items-center"
                >
                  <Image
                    src={rating?.profile?.img}
                    className="object-contain rounded-xl"
                    width={30}
                    height={30}
                    alt={rating.profile.long_name}
                  />
                  <p className="text-blue-600 hover:underline">
                    {rating?.profile?.name}
                  </p>
                </Link>
                <div className="text-neutral-600 font-semibold text-xs">
                  {formatReviewCount(rating.reviewCount)} Votes
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {infobox?.attributes?.length > 0 && (
        <div className="space-y-2 py-2 px-6 border-b">
          <h1 className="font-bold text-lg text-neutral-500">Factsheet</h1>
          <div className="flex flex-col gap-5">
            {infobox?.attributes
              ?.slice(0, showMore ? infobox.attributes.length : 3)
              .map((item, index) => (
                <div key={index} className="flex flex-col">
                  <h2 className="font-semibold text-sm text-neutral-700">
                    {isString(item[0]) ? parse(item[0]) : item[0]}
                  </h2>
                  <div className="text-neutral-600 text-xs [&_a]:text-blue-600 [&_a:hover]:underline">
                    <p> {isString(item[1]) ? parse(item[1]) : item[1]}</p>
                  </div>
                </div>
              ))}
            {infobox?.attributes.length > 3 && (
              <button
                onClick={toggleShowMore}
                className="text-blue-600 flex items-center gap-1 hover:underline self-start my-2"
              >
                {showMore
                  ? `Show less about ${infobox?.title}`
                  : `Show more about ${infobox?.title}`}
                {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
        </div>
      )}

      {infobox?.profiles?.length > 0 && (
        <div className="space-y-2 py-2 px-6 border-b">
          <h1 className="font-semibold text-lg text-neutral-600">Profiles</h1>
          <div className="flex gap-2 items-center flex-wrap">
            {infobox?.profiles?.map((profile, index) => (
              <Link
                href={profile?.url}
                key={index}
                className="flex gap-2 text-sm items-center p-2 border rounded-lg px-3"
              >
                <Image
                  src={profile?.img}
                  width={12}
                  height={12}
                  alt="profile-src"
                />
                <p>{profile.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {infobox?.providers.length > 0 && (
        <div className="flex justify-between items-center p-6 text-xs">
          <p>
            {`Data from `}
            {infobox?.providers?.map((provider, index) => (
              <Link
                key={index}
                href={provider?.url}
                target="_blank"
                className="text-neutral-600 hover:underline"
              >
                {`${provider?.name} `}
              </Link>
            ))}
          </p>
          {/* <p>Feedback</p> */}
        </div>
      )}
    </div>
  );
};
