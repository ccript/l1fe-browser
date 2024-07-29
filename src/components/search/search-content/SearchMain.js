import React from "react";
import SearchResult from "./SearchResult";
import AccordionResult from "./AccordionResult";

function SearchMain({ web, faq }) {

  return (
    <section className="flex flex-col gap-4 container mx-auto px-3 md:px-20 2xl:px-6 text-start py-2 my-6">
      <div className="grid grid-flow-row grid-cols-12 justify-center w-full gap-2 py ">
        <div className="col-span-full md:col-span-7 text-sm 2xl:text-base">
          {web?.results?.length > 0 ? (
            web?.results?.map((results, index) => (
              <div
                key={index}
                className={`${index === 0
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
      </div>
    </section>
  );
}

export default SearchMain;
