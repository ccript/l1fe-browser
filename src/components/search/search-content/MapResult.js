import { MapPinIcon } from "lucide-react";
import mapImage from "@/assets/images/map-image.svg";
import Image from "next/image";

const MapResult = ({ mapData }) => {
  return (
    <div className="relative border-x border-t rounded-t-xl border-opacity-40 w-full">
      <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-50 h-9 px-5 rounded-xl text-blue-800 bg-blue-100 font-semibold">
        {`View All >`}
      </button>
      <div className="">
        <Image
          src={mapImage}
          className="object-cover w-full h-full rounded-t-xl"
          width={600}
          height={200}
          alt="map-image"
        />
      </div>

      <div className="flex flex-col">
        {mapData?.map((data) => {
          return (
            <div key={data?.id} className="border-b py-6">
              <div className="space-y-1 px-6">
                <div className="flex gap-3 items-center">
                  <h1 className="font-medium">{data?.name}</h1>
                  <p className="text-xs text-neutral-400">{data?.distance}</p>
                </div>
                <p className="flex gap-1 items-center text-xs text-neutral-400">
                  <MapPinIcon size={14} />
                  {data?.address}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapResult;
