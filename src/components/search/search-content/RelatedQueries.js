import { Search } from "lucide-react";
import Link from "next/link";
const RelatedQueries = ({ relatedQueries }) => {
  return (
    <div className="space-y-2 w-full">
      <div className="p-6 pt-12">
        <h1 className="flex gap-3 items-center text-base font-semibold text-neutral-600">
          <Search size={16} className="" />
          Related queries
        </h1>
      </div>
      <div className="grid grid-cols-none md:grid-cols-2 gap-3">
        {relatedQueries?.map((queries, index) => {
          return (
            <div
              key={index}
              className="col-span-1 border rounded-xl px-6 h-12 content-center"
            >
              <Link
                href={`#`}
                className="flex gap-3 items-center text-base text-neutral-600"
              >
                <Search size={16} className="" /> {queries}
              </Link>
            </div>
          );
        })}
        {/* <div className="col-span-1 border rounded-xl px-6 h-12 content-center">
          <Link
            href={`#`}
            className="flex gap-3 items-center text-base text-neutral-600"
          >
            <Search size={16} className="" /> dallas design agency
          </Link>
        </div>
        <div className="col-span-1 border rounded-xl px-6 h-12  content-center">
          <Link
            href={`#`}
            className="flex gap-3 items-center text-base text-neutral-600"
          >
            <Search size={16} className="" /> dallas seo
          </Link>{" "}
        </div> */}
      </div>
    </div>
  );
};

export default RelatedQueries;
