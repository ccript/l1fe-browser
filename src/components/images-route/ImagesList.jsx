import Image from "next/image";

const ImagesList = ({
  imagesData,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 2xl:columns-4 space-y-3">
      {imagesData?.map((image, index) => (
        <div
          key={index} // Using index as key
          className={`cursor-pointer p-2 border rounded-xl transition-transform duration-300 break-inside-avoid ${
            selectedImageIndex === index
              ? "border-neutral-400"
              : "border-transparent hover:scale-105"
          }`}
          onClick={() => setSelectedImageIndex(index)}
        >
          <div className="flex h-full flex-col gap-2 rounded-xl">
            <Image
              src={image?.thumbnail.src}
              width={500}
              height={338}
              className="rounded-xl object-cover w-full h-full items-stretch"
              alt={`thumbnail-${index}`}
            />
            <div className="flex items-center gap-1">
              <Image
                src={image?.meta_url.favicon}
                width={16}
                height={16}
                className="rounded size-4"
                alt={`src-icon-${index}`}
              />
              <p className="text-neutral-400 text-xs">{image?.source}</p>
            </div>
            <div className="truncate text-neutral-700">{image?.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
