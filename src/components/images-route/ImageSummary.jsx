import Image from "next/image";
import { ArrowUpRight, Download, Copy } from "lucide-react";

const ImageSummary = ({ selectedImage }) => {
  return (
    <div className="sticky top-20 max-h-[calc(100vh-8rem)] 2xl:max-h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar pb-3 space-y-8">
      <div className="w-full">
        <div className="space-y-1">
          <h1 className="text-lg font-medium line-clamp-2">
            {selectedImage?.desc}
          </h1>
          <div className="flex items-center gap-1">
            <Image
              src={selectedImage?.sourceLogo}
              width={16}
              height={16}
              className="rounded size-4"
              alt={`src-icon`}
            />
            <p className="text-neutral-400 text-xs">{selectedImage?.source}</p>
          </div>
        </div>
        <Image
          src={selectedImage?.imageThumbnail}
          width={500}
          height={338}
          className="rounded-xl object-cover w-full my-6"
          alt={`thumbnail`}
        />
      </div>
      <div className="ms-2 flex items-center justify-start gap-8 text-blue-600">
        <div className="flex flex-col items-center">
          <button className="rounded-full shadow-xl ring-1 ring-opacity-15 ring-neutral-500 p-3">
            <ArrowUpRight className="size-4" />
          </button>
          <span className="mt-1 text-neutral-500">Visit</span>
        </div>
        <div className="flex flex-col items-center">
          <button className="rounded-full shadow-xl ring-1 ring-opacity-15 ring-neutral-500 p-3">
            <Download className="size-4" />
          </button>
          <span className="mt-1 text-neutral-500">Download</span>
        </div>
        <div className="flex flex-col items-center">
          <button className="rounded-full shadow-xl ring-1 ring-opacity-15 ring-neutral-500 p-3">
            <Copy className="size-4" />
          </button>
          <span className="mt-1 text-neutral-500">Copy</span>
        </div>
      </div>

      <div className="p-5 border rounded-full w-full text-start text-sm text-neutral-500">
        Images might be subject to copyright
      </div>
    </div>
  );
};

export default ImageSummary;
