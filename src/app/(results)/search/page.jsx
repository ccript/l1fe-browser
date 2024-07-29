import SearchContent from "@/components/search/search-content/SearchContent";
import { SearchAction } from "../../../../actions/search/SearchAction";

const Search = async ({ searchParams }) => {
  const { q, offset } = searchParams;
  const data = await SearchAction(q, offset);
  return (
    <section className="w-full text-start">
      <SearchContent data={data} query={q} />
    </section>
  );
};

export default Search;
