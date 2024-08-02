import SearchMain from "./SearchMain";
const SearchContent = ({ data, query, offset = 0 }) => {
  const currentOffset = parseInt(offset) || 0;
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchMain data={data} currentOffset={currentOffset} query={query} />
    </>
  );
};

export default SearchContent;
