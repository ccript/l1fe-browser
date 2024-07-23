"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      const queryParams = new URLSearchParams(searchParams.toString());
      queryParams.set("q", input.trim());
      router.push(`/search?${queryParams.toString()}`);
    }
  };

  return (
    <>
      <input
        className="w-full md:w-[550px] h-14 px-4 placeholder:text-neutral-600 rounded-xl border border-opacity-55 shadow-md"
        placeholder="Search anything, with absolute privacy..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default SearchBar;
