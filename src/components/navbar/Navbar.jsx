import NavbarSearch from "@/components/navbar/NavbarSearch";
import NavigationLinks from "@/components/navbar/NavigationLinks";

const Navbar = ({ searchParams }) => {
  return (
    <>
      <aside className="sticky top-0 shadow z-50 pr-3 md:p-0">
        <NavbarSearch searchParams={searchParams} />
      </aside>
      <aside className="border-b m-0 px-6 md:ps-36">
        <NavigationLinks searchParams={searchParams} />
      </aside>
    </>
  );
};

export default Navbar;
