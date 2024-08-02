import Image from "next/image";
import { SearchNewsAction } from "../../../actions/search/SearchAction";
import Link from "next/link";
import NextButton from "../shared/NextButton";
import { Dot } from "lucide-react";
const NewsContent = async ({ offset, query }) => {
  const data = await SearchNewsAction(query, offset);
  const currentOffset = parseInt(offset) || 0;
  return (
    <div className="w-full text-start max-w-[672px]">
      <div className="border my-3 rounded-2xl">
        {data?.results?.length > 0 ? (
          data?.results?.map((news, index) => {
            return (
              <div key={index} className="w-full">
                <div className="flex gap-4 p-5">
                  <div className="space-y-2">
                    <Link
                      href={news?.url}
                      className="text-xs text-gray-400 flex items-center gap-x-2"
                    >
                      <Image
                        src={news?.meta_url?.favicon}
                        alt="logo"
                        width={16}
                        height={16}
                      />
                      <div className="flex items-center text-sm">
                        <span> {news.meta_url.hostname}</span>
                        <span>
                          <Dot size={25} />
                        </span>
                        <span>{news?.age}</span>
                      </div>
                    </Link>
                    <Link
                      href={news?.url}
                      className=" text-lg text-blue-700 hover:underline"
                    >
                      {news.title}
                    </Link>
                    <p
                      className="text-sm text-gray-500 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: news?.description }}
                    />
                  </div>
                  {news.thumbnail && (
                    <div className="min-w-[100px]">
                      <Image
                        width={100}
                        height={80}
                        src={news?.thumbnail?.src}
                        alt="news-thumbnail"
                        className="w-[100px] h-[80px] object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex w-full items-center justify-center py-6">
            No content available at the moment.
          </div>
        )}
      </div>
      {data?.results?.length > 0 && (
        <NextButton currentOffset={currentOffset} query={query} />
      )}
    </div>
  );
};

export default NewsContent;
