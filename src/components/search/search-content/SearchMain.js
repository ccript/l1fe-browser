import SearchResult from "./SearchResult";
import AccordionResult from "./AccordionResult";
import NextButton from "@/components/shared/NextButton";
import { SearchInfoBox } from "./SearchInfoBox";
import NewsCarousel from "./NewsCarousel";
import VideosCarousel from "./VideosCarousel";

function SearchMain({ currentOffset, query, data }) {
  const renderMixedContent = () => {
    const content = [];
    let webGroup = [];

    data?.mixed?.main.forEach((item, index) => {
      if (item.type === "web") {
        webGroup.push(
          <div key={`web-${item.index}`} className="">
            <SearchResult results={data?.web?.results[item?.index]} />
          </div>
        );
      } else {
        if (webGroup.length > 0) {
          content.push(
            <div key={`web-group-${index}`} className=" p-6 border rounded-xl">
              {webGroup}
            </div>
          );
          webGroup = [];
        }
        switch (item.type) {
          case "news":
            content.push(
              <div key={`news-${index}`} className="">
                <NewsCarousel news={data?.news} />
              </div>
            );
            break;
          case "faq":
            content.push(
              <div key={`faq-${index}`} className="">
                <AccordionResult accordionData={data?.faq?.results} />
              </div>
            );
            break;
          case "videos":
            content.push(
              <div key={`videos-${index}`} className="">
                <VideosCarousel videos={data?.videos} />
              </div>
            );
            break;
          default:
            break;
        }
      }
    });
    if (webGroup.length > 0) {
      content.push(
        <div
          key={`web-group-end`}
          className="border space-y-6 rounded-lg p-6 mb-4"
        >
          {webGroup}
        </div>
      );
    }

    return content;
  };

  return (
    <section className="flex flex-col gap-4 text-start py-2 my-2">
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="text-sm 2xl:text-base space-y-4 w-full md:max-w-[672px]">
          {data?.mixed?.main?.length > 0 ? (
            renderMixedContent()
          ) : (
            <div className="flex w-full items-center justify-center py-6">
              No content available at the moment.
            </div>
          )}
        </div>
        {data?.infobox?.results?.length > 0 && (
          <div className="text-sm 2xl:text-base w-full md:max-w-[368px]">
            <SearchInfoBox
              infobox={data?.infobox?.results[0]}
              query={query}
              data={data}
              offset={currentOffset}
            />
          </div>
        )}
      </div>
      {data?.web?.results?.length > 0 && (
        <NextButton currentOffset={currentOffset} query={query} />
      )}
    </section>
  );
}

export default SearchMain;
