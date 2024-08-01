import SearchResult from "./SearchResult";
import AccordionResult from "./AccordionResult";
import NextButton from "@/components/shared/NextButton";
import { SearchInfoBox } from "./SearchInfoBox";

function SearchMain({ web, faq, infobox, currentOffset, query, setActiveTab }) {
  return (
    <section className="flex flex-col gap-4 text-start py-2 my-6">
      <div className="flex flex-col-reverse md:flex-row gap-3">
        <div className="text-sm 2xl:text-base w-full md:max-w-[672px]">
          {web?.results?.length > 0 ? (
            web?.results?.map((results, index) => (
              <div
                key={index}
                className={` ${
                  index === 0
                    ? "border-x border-t rounded-t-xl border-opacity-40"
                    : ""
                }`}
              >
                <SearchResult results={results} />
                {faq?.results.length > 0 && index === 1 && (
                  <AccordionResult accordionData={faq?.results} />
                )}
              </div>
            ))
          ) : (
            <div className="flex items-center justify-start">
              No content available at the moment.
            </div>
          )}
        </div>
        {infobox?.results?.length > 0 && (
          <div className="text-sm 2xl:text-base w-full md:max-w-[368px]">
            <SearchInfoBox
              infobox={infobox?.results[0]}
              setActiveTab={setActiveTab}
            />
          </div>
        )}
      </div>
      {web?.results?.length > 0 && (
        <NextButton currentOffset={currentOffset} query={query} />
      )}{" "}
    </section>
  );
}

export default SearchMain;
