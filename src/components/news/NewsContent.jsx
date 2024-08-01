import Image from "next/image";
import Link from "next/link";
import NextButton from "../shared/NextButton";
import { Dot } from "lucide-react";
const NewsContent = ({ data, currentOffset, query }) => {
  return (
    <div className="w-full space-y-4 text-start py-2">
      {data?.results?.length > 0 ? (
        data?.results?.map((news, index) => {
          return (
            <div key={index} className="max-w-[672px] border rounded-2xl">
              <div className="flex gap-4 p-5">
                <div className="">
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
                    <div className="flex items-center">
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
                    className="text-sm text-gray-400"
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
        <div className="flex items-center justify-start mt-6">
          No content available at the moment.
        </div>
      )}
      {data?.results?.length > 0 && (
        <NextButton currentOffset={currentOffset} query={query} />
      )}
    </div>
  );
};

export default NewsContent;
