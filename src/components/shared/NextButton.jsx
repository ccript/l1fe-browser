import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const NextButton = ({ currentOffset = 0, query }) => {
  const nextOffset = currentOffset + 1;
  const prevOffset = currentOffset - 1;
  return (
    <div className="max-w-[672px] py-4 text-center flex items-center justify-center space-x-4">
      {currentOffset > 0 && (
        <Button className="bg-white rounded-xl border text-neutral-600 hover:underline hover:bg-white">
          <Link
            href={`?q=${query}&offset=${prevOffset}`}
            className="flex items-center w-full"
          >
            <ArrowLeft size={20} className="me-2" /> Previous
          </Link>
        </Button>
      )}
      {currentOffset > 0 && (
        <span className="text-neutral-600">Page {currentOffset}</span>
      )}
      <Button className="bg-white rounded-xl border text-neutral-600 hover:underline hover:bg-white">
        <Link
          href={`?q=${query}&offset=${nextOffset}`}
          className="flex items-center w-full"
        >
          Next <ArrowRight size={20} className="ms-2" />
        </Link>
      </Button>
    </div>
  );
};

export default NextButton;
