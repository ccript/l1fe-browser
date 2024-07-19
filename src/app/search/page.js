import Navbar from "@/components/navbar/Navbar";
import NavigationLinks from "@/components/navbar/NavigationLinks";
import SearchContent from "@/components/search/search-content/SearchContent";
const Search = ({ searchParams }) => {
  return (
    <main className="relative space-y-3 w-full h-full border overflow-y-auto">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>
      <aside className="w-full border-b h-12 ">
        <NavigationLinks searchParams={searchParams} />
      </aside>
      <section className="w-full text-start">
        <SearchContent />
      </section>
    </main>
  );
};

export default Search;
