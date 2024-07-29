import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
const NextButton = ({ currentOffset = 1, query }) => {
  const nextOffset = currentOffset + 1;

  return (
    <div className="max-w-[630px] 2xl:max-w-[650px] text-center">
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
