import SearchMain from "./SearchMain";
const SearchContent = ({ data, query, offset = 0 }) => {
  const currentOffset = parseInt(offset) || 0;
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchMain
        web={data?.web}
        infobox={data?.infobox}
        faq={data?.faq}
        news={data?.news}
        videos={data?.videos}
        currentOffset={currentOffset}
        query={query}
      />
    </>
  );
};

export default SearchContent;
