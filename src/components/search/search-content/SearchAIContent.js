import search_img_1 from "@/assets/images/search_image.svg";
import search_img_2 from "@/assets/images/Margin.svg";
import Image from "next/image";
const SearchAIContent = () => {
  return (
    <>
      {" "}
      <div className="container mx-auto px-3 md:px-20 2xl:px-6 text-start py-2 my-6">
        <div className="relative 2xl:max-w-screen-lg w-full space-y-12 px-6">
          <h1 className="text-3xl font-bold">
            Find top-rated web development companies in Dallas, Texas
          </h1>
          <button className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-50 h-9 px-5 rounded-xl text-blue-800 bg-blue-100">
            More from ADAM AI
          </button>
          <div className="grid grid-flow-row grid-cols-12 justify-center w-full gap-3">
            <div className="col-span-8 space-y-3 text-sm 2xl:text-base">
              <p>
                If you’re looking for top-notch web development services in
                Dallas, you’ve come to the right place. Here are some of the
                best web developers in Dallas, along with their contact
                information and a brief description of their services:
              </p>
              <ul className="space-y-3">
                <li>
                  <div>
                    <p>
                      <b>Big D Creative:</b> A full-service web development
                      agency offering custom web
                    </p>
                    <p>
                      design, development, and e-commerce solutions. Contact:
                      214.760.8862, bigdcreative.com
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      <b>Creatunity:</b> A digital agency specializing in web
                      development, e-commerce
                    </p>
                    <p>
                      solutions, and digital marketing. Contact: 18773607646,
                      creatunity.com
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      <b>Logo Design Marvel:</b> A web design and development
                      agency offering custom logo
                    </p>
                    <p>
                      design, development, and e-commerce solutions. Contact:
                      214.760.8862, bigdcreative.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-4 space-y-3 border-l px-4">
              <div className="flex flex-col">
                <div className="flex">
                  <div>
                    <Image
                      src={search_img_1}
                      width={161}
                      height={161}
                      alt={"search_img_1"}
                    />
                  </div>
                  <div>
                    <Image
                      src={search_img_2}
                      width={161}
                      height={161}
                      alt={"search_img_2"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-neutral-500 font-semibold">Follow Up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white via-white h-full"
        style={{ height: "100%", bottom: "0", width: "100%", opacity: "0.8" }}
      ></div>
    </>
  );
};

export default SearchAIContent;
