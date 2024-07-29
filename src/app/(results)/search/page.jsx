import SearchContent from "@/components/search/search-content/SearchContent";
import { SearchAction } from "../../../../actions/search/SearchAction";

const Search = async ({ searchParams }) => {
  const data = await SearchAction(searchParams.q)
  return (
    <section className="w-full text-start">
      <SearchContent data={data} />
    </section>
  );
};

export default Search;
