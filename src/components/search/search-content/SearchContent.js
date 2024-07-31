"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import NavigationLinks from "@/components/navbar/NavigationLinks";
import SearchMain from "./SearchMain";
import NewsContent from "@/components/news/NewsContent";
import VideoContent from "./VideoContent";
import ImagesContent from "@/components/images-route/ImagesContent";
import { useSearchParams } from "next/navigation";

const SearchContent = ({ data, query }) => {
  const [activeTab, setActiveTab] = useState("all");
  const searchParams = useSearchParams();
  const offset = searchParams.get("offset");
  const currentOffset = parseInt(offset) || 0;

  // console.log(data);

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <SearchMain
            web={data?.web}
            infobox={data?.infobox}
            faq={data?.faq}
            currentOffset={currentOffset}
            query={query}
            setActiveTab={setActiveTab}
          />
        );
      case "images":
        return <ImagesContent query={data?.query?.original} />;
      case "news":
        return (
          <NewsContent
            data={data?.news}
            currentOffset={currentOffset}
            query={query}
          />
        );
      case "videos":
        return (
          <VideoContent
            data={data?.videos}
            currentOffset={currentOffset}
            query={query}
          />
        );
      default:
        return null;
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar defaultSearch={data?.query?.original} />
      <NavigationLinks activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </>
  );
};

export default SearchContent;
