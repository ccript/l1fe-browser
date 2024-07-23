import SearchAIContent from "./SearchAIContent";
import SearchResult from "./SearchResult";
import { DummySearchResults } from "@/const/DummySearchResults";
import RelatedQueries from "@/components/search/search-content/RelatedQueries";

const SearchContent = ({ searchParams }) => {
  const aiResultsData = DummySearchResults?.aiResultsData;
  const searchResults = DummySearchResults?.searchResults;
  const relatedQueries = DummySearchResults?.relatedQueries;

  const currentFilter = searchParams?.filter;

  return currentFilter === "Videos" ? (
    <div className="w-full container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">
      <div className="max-w-[630px] 2xl:max-w-[650px] border rounded-2xl p-5">
        <h1>Video Results</h1>
      </div>
    </div>
  ) : (
    <>
      <section className="relative w-full border-b border-opacity-30">
        <SearchAIContent aiResultsData={aiResultsData} />
      </section>
      <section className="flex flex-col gap-4 container mx-auto px-3 md:px-20 2xl:px-6 text-start py-2 my-6">
        <div className="text-sm my-6 px-6">
          <h4 className="">
            Showing results for <b>Dallas, TX, US</b>
          </h4>
        </div>

        <div className="grid grid-flow-row grid-cols-12 justify-center w-full gap-2 py ">
          <div className="col-span-full md:col-span-7 text-sm 2xl:text-base">
            {searchResults.map((results, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index == 0
                      ? "border-x border-t rounded-t-xl border-opacity-40"
                      : ""
                  }`}
                >
                  <SearchResult results={results} />
                </div>
              );
            })}
            <div className="pb-24">
              <RelatedQueries relatedQueries={relatedQueries} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchContent;
