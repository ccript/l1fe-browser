import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionResult = ({ accordionData }) => {
  return (
    <div className="relative border-x border-t rounded-t-xl border-opacity-40 w-full">
      <div className="p-6 pt-12">
        <h1 className="text-base font-semibold text-neutral-500">
          People also ask
        </h1>
      </div>
      <Accordion type="multiple" collapsible className="border-y">
        {accordionData.map((data) => {
          return (
            <AccordionItem
              key={data?.id}
              value={data?.id}
              className="px-6 py-2"
            >
              <AccordionTrigger>{data?.title}</AccordionTrigger>
              <AccordionContent>{data?.content}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionResult;
