import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="gap-3 md:gap-6 w-screen h-auto md:h-9 border text-neutral-500 text-xs shadow flex flex-wrap md:flex-row justify-center items-center p-2">
      <Link className="hover:underline" href={`#`}>
        © L1FE USA, LLC.
      </Link>
      <Link className="hover:underline" href={`#`}>
        Advertise
      </Link>
      <Link className="hover:underline" href={`#`}>
        API
      </Link>
      <Link className="hover:underline" href={`#`}>
        FAQ
      </Link>
      <Link className="hover:underline" href={`#`}>
        Report a security issue
      </Link>
    </section>
  );
};

export default Footer;
