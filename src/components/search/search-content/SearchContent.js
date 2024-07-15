import search_img_1 from "@/assets/images/search_image.svg";
import search_img_2 from "@/assets/images/Margin.svg";
import Image from "next/image";
import SearchAIContent from "./SearchAIContent";
const SearchContent = () => {
  return (
    <>
      <section className="relative w-full border-b border-opacity-30">
        <SearchAIContent />
      </section>
      <section className="flex flex-col gap-4 container mx-auto px-3 md:px-20 2xl:px-6 text-start py-2 my-6">
        <div className="text-sm my-6 px-6">
          <h4 className="">
            Showing results for <b>Dallas, TX, US</b>
          </h4>
        </div>

        <div className="grid grid-flow-row grid-cols-12 justify-center w-full gap-3 py ">
          <div className="col-span-8 space-y-3 text-sm 2xl:text-base">
            {/* Search result 1 */}
            <div className="border-x border-t p-6 rounded-t-xl border-opacity-40 ">
              <div className="flex gap-3 item-center">
                <div className="size-[40px] border bg-blue-200 rounded-lg" />
                <div className="flex flex-col text-xs gap-1">
                  <div>
                    <p>Clutch</p>
                  </div>
                  <div className="text-neutral-500 font-medium">
                    clutch › web-developers › dallas
                  </div>
                </div>
              </div>
              <h1 className="text-blue-700 text-lg">
                Top Web Developers in Dallas - 2022 Reviews | Clutch.co
              </h1>
              <p>
                {`   November 18, 2020 - Outcome-driven development. At any scale.
                ... "Groove Jones brought up great ideas, but they were also
                able to evolve the product fairly quickly." Senior Interactive
                Producer, Youth Education Organization ... Transformative By
                Design. ... "They're more than just the vendors creating our
                website ...`}
              </p>
            </div>

            <div className="p-6">
              <div className="flex gap-3 item-center">
                <div className="size-[40px] border bg-blue-200 rounded-lg" />
                <div className="flex flex-col text-xs gap-1">
                  <div>
                    <p>Upwork</p>
                  </div>
                  <div className="text-neutral-500 font-medium">
                    upwork.com › hire › web-designers › us › dallas-tx{" "}
                  </div>
                </div>
              </div>
              <h1 className="text-blue-700 text-lg">
                27 Best Freelance Web Designers For Hire Near Dallas, TX -
                Upwork™{" "}
              </h1>
              <p>
                {`Hi, my name is Olivia! I am a freelance web designer based in Dallas, TX. I have been in the web development world for a while now. I got my marketing degree at Duke University and taught my self how to code while getting my degree. I love to adapt to different visions and help create a great ...`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchContent;
