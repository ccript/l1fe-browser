import SearchContent from "@/components/search/search-content/SearchContent";

const Search = ({ searchParams }) => {
  return (
    <section className="w-full text-start">
      <SearchContent searchParams={searchParams} />
    </section>
  );
};

export default Search;
