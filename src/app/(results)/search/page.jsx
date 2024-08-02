import SearchContent from "@/components/search/search-content/SearchContent";
import { SearchAction } from "../../../../actions/search/SearchAction";
import Navbar from "@/components/navbar/Navbar";
const Search = async ({ searchParams }) => {
  const { q, offset } = searchParams;

  const data = await SearchAction(q, offset);
  return (
    <>
      <div className=" md:min-w-[1250px]">
        <Navbar searchParams={searchParams} />
      </div>
      <section className="w-full text-start">
        <div className="px-6 md:ps-36 md:min-w-[1250px]">
          <SearchContent data={data} query={q} offset={offset} />
        </div>
      </section>
    </>
  );
};

export default Search;
