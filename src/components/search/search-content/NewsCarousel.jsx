"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { NewspaperIcon } from "lucide-react";

const NewsCarousel = ({ news }) => {
  return (
    <div className="w-full md:max-w-[672px]">
      <h1 className="flex items-center gap-1 text-base font-semibold text-neutral-500 px-6 py-3">
        <NewspaperIcon size={15} /> In the News
      </h1>
      <Carousel className="relative w-full">
        <CarouselContent className="flex">
          {news?.results?.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3 max-w-[250px]">
              <Link href={item?.url} className="w-full">
                <div className="p-2 gap-2 flex flex-col border rounded-xl">
                  <Image
                    src={item?.thumbnail?.src}
                    className="object-cover w-[184px] h-[110px] rounded-xl"
                    width={184}
                    height={110}
                    alt="img"
                  />
                  <span className="flex items-center gap-1">
                    <Image
                      src={item?.meta_url?.favicon}
                      width={12}
                      height={12}
                      alt="img"
                    />
                    <p className="text-xs text-neutral-500">
                      {item?.meta_url?.netloc}
                    </p>
                  </span>
                  <h3 className="text-blue-700 text-xl line-clamp-3 hover:underline">
                    {item?.title}
                  </h3>
                  <span className="text-xs text-neutral-500">{item?.age}</span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 h-12 w-12" />
        <CarouselNext className="-right-6 h-12 w-12" />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
