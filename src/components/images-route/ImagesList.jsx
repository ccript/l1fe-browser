import Image from "next/image";

const ImagesList = ({ imagesData, selectedImage, setSelectedImage }) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 space-y-3">
      {imagesData?.map((image, index) => (
        <div
          key={image.id}
          className={`cursor-pointer p-2 border rounded-xl transition-transform duration-300 ${
            selectedImage.id === image.id
              ? "border-neutral-400"
              : "border-transparent hover:scale-105"
          }`}
          onClick={() => setSelectedImage(image)}
        >
          <div className="flex flex-col gap-2 rounded-xl">
            <Image
              src={image?.imageThumbnail}
              width={500}
              height={338}
              className="rounded-xl object-cover w-full max-h-[500px] items-stretch"
              alt={`thumbnail-${index}`}
            />
            <div className="flex items-center gap-1">
              <Image
                src={image?.sourceLogo}
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
