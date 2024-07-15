import Link from "next/link";
import search_filter_ico from "@/assets/icons/search-filter-ico.svg";
import Image from "next/image";

const NavigationLinks = () => {
  return (
    <div className="flex w-full container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">
      <div className="flex items-center w-full justify-between max-w-[630px] 2xl:max-w-[650px]">
        <div className="flex gap-3 text-neutral-400">
          <Link
            href={`#`}
            className="text-[#06D6A0] px-2 border-b-4 border-b-[#06D6A0] pb-3"
          >
            All
          </Link>
          <Link href={`#`} className="px-1 pb-3">
            Images
          </Link>
          <Link href={`#`} className="px-1 pb-3">
            News
          </Link>
          <Link href={`#`} className="px-1 pb-3">
            Videos
          </Link>
          <Link href={`#`} className="px-1 pb-3">
            Googles
          </Link>
        </div>
        <div className="flex gap-3 text-neutral-400">
          {" "}
          <Link href={`#`} className=" pb-3">
            <Image
              src={search_filter_ico}
              width={18}
              height={18}
              alt={"setting_ico"}
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationLinks;
