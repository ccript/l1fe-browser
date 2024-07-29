"use client";

import React, { useState } from "react";
import { DummySearchResults } from "@/const/DummySearchResults";
import Navbar from "@/components/navbar/Navbar";
import NavigationLinks from "@/components/navbar/NavigationLinks";
import SearchMain from "./SearchMain";
import NewsContent from "@/components/news/NewsContent";
import VideoContent from "./VideoContent";
import ImagesContent from "@/components/images-route/ImagesContent";

const SearchContent = ({ data }) => {
  const [activeTab, setActiveTab] = useState("all");

  console.log(data);

  // const relatedQueries = DummySearchResults?.relatedQueries;

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return <SearchMain data={data.web} />;
      case "images":
        return <ImagesContent query={data?.query?.original} />;
      case "news":
        return <NewsContent data={data.news} />;
      case "videos":
        return <VideoContent data={data.videos} />;
      default:
        return null;
    }
  };
  if (!data) {
    <div>loading...</div>;
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
