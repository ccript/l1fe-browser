import React from "react";
import SearchResult from "./SearchResult";

function SearchMain({ web, mixed, data }) {
  // Initialize an empty array for the final results
  const resultsArray = [];

  // Loop through each item in the mixed array
  mixed.main.forEach((item) => {
    if (item.type === "web" && web?.results[item.index]) {
      resultsArray.push(web.results[item.index]);
    } else if (item.type === "infobox" && data.infobox[item.index]) {
      resultsArray.push(data.infobox[item.index]);
    } else if (item.type === "news" && data.news.results) {
      resultsArray.push(data.news.results[item.index]);
    } else if (item.type === "videos" && data.videos.results) {
      resultsArray.push(data.videos.results[item.index]);
    } else if (item?.type === "faq" && data?.faq?.results) {
      resultsArray.push(data?.faq?.results[item.index]);
    }
  });
  // console.log(web);
  return (
    <section className="flex flex-col gap-4 container mx-auto px-3 md:px-20 2xl:px-6 text-start py-2 my-6">
      <div className="grid grid-flow-row grid-cols-12 justify-center w-full gap-2 py ">
        <div className="col-span-full md:col-span-7 text-sm 2xl:text-base">
          {web?.results?.length > 0 ? (
            web?.results?.map((results, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "border-x border-t rounded-t-xl border-opacity-40"
                    : ""
                }`}
              >
                <SearchResult results={results} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-start">
              No content available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchMain;
