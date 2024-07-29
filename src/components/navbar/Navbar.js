import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import setting_ico from "@/assets/icons/setting_ico.svg";
import Link from "next/link";
import SearchBar from "../home/SearchBar";
const Navbar = ({ defaultSearch }) => {
  return (
    <section className="sticky top-0 z-50 bg-white gap-12 w-full h-18 border text-neutral-500 text-xs shadow flex justify-center items-center p-2">
      <div className="grid w-full grid-cols-12 items-center gap-2">
        <div className="col-span-1 flex justify-center">
          <Link href={`/`} className="cursor-pointer">
            <Image src={logo} width={30} height={20} alt={"logo"} />
          </Link>
        </div>
        <div className="relative col-span-10 flex justify-start w-full md:w-[650px] h-14 text-lg">
          <SearchBar
            searchValue={defaultSearch}
            placeHolder={"Start searching..."}
            customClass={
              "w-full h-full px-5 placeholder:text-neutral-600 rounded-xl border border-opacity-55 shadow-md"
            }
          />
        </div>
        {/* <div className="col-span-1 flex justify-center">
          {" "}
          <Image src={setting_ico} width={15} height={15} alt={"setting_ico"} />
        </div> */}
      </div>
    </section>
  );
};

export default Navbar;
