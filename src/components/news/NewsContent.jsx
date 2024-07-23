import Image from "next/image";
import { Dot } from "lucide-react";
import NextButton from "../shared/NextButton";
const NEWS_RESULTS = [
  {
    id: 1,
    source: "hbr.org",
    sourceLogo:
      "https://imgs.search.brave.com/mHZ9aLzlIEMq8B5oIaNFC8RLidfAaTSNmXnH9U3OPQo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODAxZWFhMmQx/YmQ4NjUyMjgyODMw/MzYyZjg3MTVjNTQ2/NTAwMTNmNDE4Mzcy/ODlhODFlMWZhMzZh/MWEzNThiMi9oYnIu/b3JnLw",
    newsThumbnail:
      "https://imgs.search.brave.com/swhg2nR9wQn7LZHwwPRQjhpfhPZlNfjZzPHDllTGa2w/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9oYnIu/b3JnL3Jlc291cmNl/cy9pbWFnZXMvYXJ0/aWNsZV9hc3NldHMv/MjAyNC8wNy9KdWwy/NF8yM18xMjU0NjQ2/MTM5LmpwZw",
    title: "Gen AI is Coming for Remote Workers First",
    desc: "However, generative AI is changing this narrative. Remote workers are now more susceptible to automation due to their tasks being digital and thus more easily automated, but also indicates large potential productivity benefits. But three larger forces are going to drive far more extensive gen ...",
    date: "8 hours ago",
  },
  {
    id: 2,
    source: "cnet.com",
    sourceLogo:
      "https://imgs.search.brave.com/mWlG-6ikaw-opvXdUS2O5Ia2lYTwH6MNnfeV64-Abho/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWVkNmIyYmM4/MmJlODJlZDJjYTBh/MWE2MmMwMmVkOTdk/OThhMmU4ZjE0MTY4/MzAxYTcyNjI5OGI5/OGJhN2NmYS93d3cu/Y25ldC5jb20v",
    newsThumbnail:
      "https://imgs.search.brave.com/EeaKs2XRddgzyB3MDdHLgAilum6Ki3s4zCE0tHRmChA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzVl/NWQ3ZmU4Mzg0ZjFh/ZmE3NGU4NjJiNzdk/ZTUxNGYzOGViNDAz/NWEvaHViLzIwMjQv/MDcvMTkvMmM1MjUw/YjAtZjZmYS00MGZi/LWFjMmEtNDUyNTNl/MWExMDcxL2dldHR5/aW1hZ2VzLTE3Nzgx/NzYzMzMuanBnP2F1/dG89d2VicCZmaXQ9/Y3JvcCZoZWlnaHQ9/Njc1JndpZHRoPTEy/MDA",
    title:
      "Calling BS on AI Hallucinations, YouTube Transcripts Co-opted by Big Tech as Training Fodder - CNET",
    desc: "Get up to speed on the rapidly evolving world of AI with our roundup of the week's developments.",
    date: "20 hours ago",
  },
  {
    id: 3,
    source: "theguardian.com",
    sourceLogo:
      "https://imgs.search.brave.com/rC70n-17a9InstnH-PH4YuXbWwFkdbesPtRJKvIQAwQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGRmYTNkMTZl/NmJhYTQwYmQ4NDRj/MzQ4NDZkNGQ0YTgy/ZWRlZDM4YWVkMzM4/NmM0Y2Y2NTgyMTQ5/NzQxOTExYy93d3cu/dGhlZ3VhcmRpYW4u/Y29tLw",
    newsThumbnail:
      "https://imgs.search.brave.com/4xdx71d2kR25P_VFcUGokU2cofTRdUDZZiIZxO7z3qw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzU0MzFj/MTJjZWFkMzJjZjlm/NzlhNWI0OGI2YTM0/N2FiOTEzYjNkYzAv/MV8wXzQ5OTlfMzAw/MC9tYXN0ZXIvNDk5/OS5qcGc_d2lkdGg9/MTIwMCZoZWlnaHQ9/NjMwJnF1YWxpdHk9/ODUmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/b3ZlcmxheS1hbGln/bj1ib3R0b20lMkNs/ZWZ0Jm92ZXJsYXkt/d2lkdGg9MTAwcCZv/dmVybGF5LWJhc2U2/ND1MMmx0Wnk5emRH/RjBhV012YjNabGNt/eGhlWE12ZEdjdGIz/QnBibWx2Ym5NdWNH/NW4mZW5hYmxlPXVw/c2NhbGUmcz00ZTU2/NzllNDBkYTY3MGU0/YzMxNDA4Mjc0MmQw/NTFmMg",
    title:
      "Not yet panicking about AI? You should be – there's little time left to rein it in | Daniel Kehlmann",
    desc: "Only a handful of people grasp the magnitude of the changes that are about to hit us. They’re exciting – and terrifying, says playwright Daniel Kehlmann",
    date: "12 hours ago",
  },
];
const NewsContent = ({ searchParams }) => {
  return (
    <div className="w-full space-y-4 container mx-auto px-3 md:px-24 2xl:px-6 text-start py-2">
      <div className="max-w-[630px] 2xl:max-w-[650px] border rounded-2xl">
        {NEWS_RESULTS.map((news, index) => {
          return (
            <div key={index} className="flex gap-4 p-5">
              <div className="">
                <div className="text-xs text-gray-400 flex items-center gap-x-2">
                  <Image
                    src={news.sourceLogo}
                    alt="logo"
                    width={16}
                    height={16}
                  />
                  <div className="flex items-center">
                    <span> {news.source}</span>
                    <span>
                      <Dot size={25} />
                    </span>
                    <span>{news.date}</span>
                  </div>
                </div>
                <div className=" text-lg text-[#7697E3]">{news.title}</div>
                <div className="text-sm text-gray-400">{news.desc}</div>
              </div>
              <div className="min-w-[100px]">
                <Image
                  width={100}
                  height={80}
                  src={news.newsThumbnail}
                  alt="news-thumbnail"
                  className="w-[100px] h-[80px] object-cover rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
      <NextButton />
    </div>
  );
};

export default NewsContent;
