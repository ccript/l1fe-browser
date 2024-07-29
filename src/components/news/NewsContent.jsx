import Image from "next/image";
import Link from "next/link";
const NewsContent = ({ data }) => {
  return (
    <div className="w-full space-y-4 container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">

      {data?.results?.length > 0 ? (
        data?.results?.map((news, index) => {
          return (
            <div key={index} className="max-w-[730px] 2xl:max-w-[730px] border rounded-2xl">
              <div className="flex gap-4 p-5">
                <div className="">
                  <Link href={news?.url} className="text-xs text-gray-400 flex items-center gap-x-2">
                    <Image
                      src={news?.meta_url?.favicon}
                      alt="logo"
                      width={16}
                      height={16}
                    />
                    <div className="flex items-center">
                      <span> {news.meta_url.hostname}</span>
                      {/* <span>
                        <Dot size={25} />
                      </span>
                      <span>{news?.meta_url?.path}</span> */}
                    </div>
                  </Link>
                  <Link href={news?.url} className=" text-lg text-[#7697E3]">{news.title}</Link>
                  <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: news?.description }} />
                </div>
                {
                  news.thumbnail && (
                    <div className="min-w-[100px]">
                      <Image
                        width={100}
                        height={80}
                        src={news?.thumbnail?.src}
                        alt="news-thumbnail"
                        className="w-[100px] h-[80px] object-cover rounded-lg"
                      />
                    </div>
                  )
                }

              </div>
            </div>
          );
        })
      ) : (
        <div className='flex items-center justify-start mt-6'>No content available at the moment.</div>
      )}
    </div>
  );
};

export default NewsContent;
