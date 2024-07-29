"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

const SearchBar = ({ searchValue, placeHolder, customClass }) => {
  const [input, setInput] = useState(searchValue);
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

  const handleSearchButton = (e) => {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("q", input.trim());
    router.push(`/search?${queryParams.toString()}`);
  };

  return (
    <>
      <input
        className={customClass}
        placeholder={placeHolder}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearchButton}
        className="absolute top-4 right-4 text-neutral-500"
      >
        <Search size={25} />
      </button>
    </>
  );
};

export default SearchBar;
