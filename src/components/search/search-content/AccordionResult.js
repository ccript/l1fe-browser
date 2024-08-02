import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const AccordionResult = ({ accordionData }) => {
  return (
    <div className="relative border-x border-t rounded-t-xl border-opacity-40 w-full">
      <div className="p-6">
        <h1 className="text-base font-semibold text-neutral-500">
          People also ask
        </h1>
      </div>
      <Accordion type="multiple" collapsible className="border-y">
        {accordionData.map((data) => {
          return (
            <AccordionItem
              key={data?.question}
              value={data?.question}
              className="px-6 py-2"
            >
              <AccordionTrigger>{data?.question}</AccordionTrigger>
              <AccordionContent>
                <div dangerouslySetInnerHTML={{ __html: data?.answer }} />
                <div className="flex gap-3 item-center mt-3">
                  {data?.meta_url.favicon && (
                    <Image
                      src={data?.meta_url.favicon}
                      height={30}
                      width={30}
                      style={{ width: "30px", height: "30px" }}
                      alt={"search image"}
                    />
                  )}

                  <div className="flex flex-col text-xs gap-1">
                    <div className="text-neutral-500 font-medium">
                      {data?.meta_url?.path}{" "}
                    </div>
                  </div>
                </div>
                <Link href={data?.url}>
                  <h1 className="text-blue-700 text-lg hover:underline">
                    {data?.title}{" "}
                  </h1>
                </Link>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionResult;
