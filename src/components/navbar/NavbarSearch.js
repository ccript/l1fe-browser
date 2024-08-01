import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import setting_ico from "@/assets/icons/setting_ico.svg";
import Link from "next/link";
import SearchBar from "../home/SearchBar";
const NavbarSearch = ({ searchParams }) => {
  return (
    <section className=" bg-white gap-12 w-full h-18 text-neutral-500 text-xs flex items-center px-2 py-3">
      <div className=" flex w-full items-center gap-2">
        <div className="flex min-w-32 justify-center">
          <Link href={`/`} className="cursor-pointer">
            <Image src={logo} width={35} height={35} alt={"logo"} />
          </Link>
        </div>
        <div className="relative flex justify-start w-full md:w-[672px] h-14 text-lg">
          <SearchBar
            searchValue={searchParams?.q}
            placeHolder={"Start searching..."}
            customClass={
              "w-full h-full px-5 placeholder:text-neutral-600 rounded-2xl border border-opacity-55 shadow-md"
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

export default NavbarSearch;
