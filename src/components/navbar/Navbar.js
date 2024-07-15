import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import setting_ico from "@/assets/icons/setting_ico.svg";

const Navbar = () => {
  return (
    <section className="sticky gap-12 w-full h-16 border text-neutral-500 text-xs shadow flex justify-center items-center p-2">
      <div className="grid w-full grid-cols-12 items-center">
        <div className="col-span-1 flex justify-center">
          <Image src={logo} width={30} height={20} alt={"logo"} />
        </div>
        <div className="col-span-10 flex justify-start w-full text-lg">
          <input
            className="w-full md:w-[650px] h-10 px-5 placeholder:text-neutral-600 rounded-xl border border-opacity-55 shadow-md"
            defaultValue={"dallas web developers"}
            placeholder="Start searching..."
          />
        </div>
        <div className="col-span-1 flex justify-center">
          {" "}
          <Image src={setting_ico} width={15} height={15} alt={"setting_ico"} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
