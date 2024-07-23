import NextButton from "@/components/shared/NextButton";
import Image from "next/image";
import ImagesList from "./ImagesList";
import ImagesDisplay from "./ImagesDisplay";
const IMAGE_RESULTS = [
  {
    id: 1,
    source: "blog.hubspot.com",
    sourceLogo:
      "https://imgs.search.brave.com/0uePC3GMXuow0A1zd3BFa9o71A9K0E2xNfFdvNeZXIc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzY2NWQ3YTIx/NzhhZGM2MDAxNDhj/NGVhYWMyMDJiZjhl/OWNmYWRlMWVjYTEy/MDYzZTUwZDUzYTU3/ZTZkODM4Mi9ibG9n/Lmh1YnNwb3QuY29t/Lw",
    imageThumbnail:
      "https://imgs.search.brave.com/m9L8jX0Wip-nWwNVcLGRqIsHMfBX25MHqfCsDN17nqo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9rbm93/bGVkZ2UuaHVic3Bv/dC5jb20vaHMtZnMv/aHViZnMvQmVzdC1h/aS1mb3ItaW1hZ2Vz/LW1ldGEtYWkyLndl/YnA_d2lkdGg9NjUw/JmhlaWdodD00MzIm/bmFtZT1CZXN0LWFp/LWZvci1pbWFnZXMt/bWV0YS1haTIud2Vi/cA",
    desc: "Meta AI is some of the best AI for images.",
  },
  {
    id: 2,
    source: "hotpot.ai",
    sourceLogo:
      "https://imgs.search.brave.com/HpwIYbImI3JnjglGtyreoSPJGJU_LPm5-_0MXUs-WTg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ob3Rw/b3QuYWkvaW1hZ2Vz/L3NpdGUvYWkvaW1h/Z2VfZ2VuZXJhdG9y/L2FydF9tYWtlci90/ZWFzZXJfNDAwLmpw/Zw",
    imageThumbnail:
      "https://imgs.search.brave.com/HpwIYbImI3JnjglGtyreoSPJGJU_LPm5-_0MXUs-WTg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ob3Rw/b3QuYWkvaW1hZ2Vz/L3NpdGUvYWkvaW1h/Z2VfZ2VuZXJhdG9y/L2FydF9tYWtlci90/ZWFzZXJfNDAwLmpw/Zw",
    desc: "AI Art Generator: turn text to art with AI. Generate images with AI using only text.",
  },
  {
    id: 3,
    source: "bulitin.com",
    sourceLogo:
      "https://imgs.search.brave.com/vJRqbEbBgIVhcn7VjIAVFouNy78uT9-Sb8H8jIJO3Yo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzlhMWMxZWMw/MmY5NDE1NDk3NzFl/ZmNmYTg0ZTYxZWNk/MzcxNmEwYjY0MzZl/NzQ0NDlkYzNhMTgy/NzdlMmI1OS9idWls/dGluLmNvbS8",
    imageThumbnail:
      "https://imgs.search.brave.com/klrQGYwbMsDcaa7YZO18D0SAa_MNnLYE4ZWI64oyBO4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWls/dGluLmNvbS9zaXRl/cy93d3cuYnVpbHRp/bi5jb20vZmlsZXMv/c3R5bGVzL2NrZWRp/dG9yX29wdGltaXpl/L3B1YmxpYy9pbmxp/bmUtaW1hZ2VzL2hp/c3RvcnktYXJ0aWZp/Y2lhbC1pbnRlbGxp/Z2VuY2UtYWkuanBn",
    desc: "history of AI",
  },
  {
    id: 4,
    source: "semrush.com",
    sourceLogo:
      "https://imgs.search.brave.com/GD33FCUvgaE06wSpBlq37RG8dOGTO6C0uaNB3IpujoQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWEwYzE4MTRi/M2QxZGZmMGMwNmJl/MGYxNzgzZjIzMzMz/OTNlMjEzMjdjY2Qy/M2M1ODE5NmMxMmE5/MTI4NmQ4YS93d3cu/c2VtcnVzaC5jb20v",
    imageThumbnail:
      "https://imgs.search.brave.com/Z8ojki9VzZci4yq0cAZOOhGewRvfDDb394hzaNemdlM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VtcnVzaC5jb20v/Z29vZGNvbnRlbnQv/X25leHQvaW1hZ2Uv/P3VybD1odHRwczov/L3N0YXRpYy5zZW1y/dXNoLmNvbS9nb29k/Y29udGVudC91cGxv/YWRzL21lZGlhL2Jl/c3QtYWktaW1hZ2Ut/Z2VuZXJhdG9yL2lt/YWdlXzI3X2ViOGRk/M2Y2MmYucG5nJnc9/MTkyMCZxPTc1.jpeg",
    desc: "As new roles are created and existing ones evolve, what will the future of work look like?...",
  },
  {
    id: 5,
    source: "pixlr.com",
    sourceLogo:
      "https://imgs.search.brave.com/eLGxhg-YrnV6fBCFAwJ5vrW8dXLLJ_H39YZaYnOMsFM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmJmNjczNjA1/MTlkMzlmNTc5YzQw/NDI1NGFhZWVjODhi/ODZlMGY0ODZmZDhm/ZTU2NzdlNTJhOWIz/MjNjNWZlNi9waXhs/ci5jb20v",
    imageThumbnail:
      "https://imgs.search.brave.com/VP6-RoM8aPu_DIaJ2vHeeu885wE8RBzsb0aEA2R8mJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci9o/b3ctdG8tZ2VuZXJh/dGUud2VicA",
    desc: "As new roles are created and existing ones evolve, what will the future of work look like?...",
  },
  {
    id: 6,
    source: "en.wikipedia.org",
    sourceLogo:
      "https://imgs.search.brave.com/m6XxME4ek8DGIUcEPCqjRoDjf2e54EwL9pQzyzogLYk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjQwNGZhZWY0/ZTQ1YWUzYzQ3MDUw/MmMzMGY3NTQ0ZjNj/NDUwMDk5ZTI3MWRk/NWYyNTM4N2UwOTE0/NTI3ZDQzNy9lbi53/aWtpcGVkaWEub3Jn/Lw",
    imageThumbnail:
      "https://imgs.search.brave.com/QcoqANHeeUmLrL_Xl0vzotIJXevpHRbfexStMhsjnbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM2L1ZpY2VfUHJl/c2lkZW50X0hhcnJp/c19hdF90aGVfZ3Jv/dXBfcGhvdG9fb2Zf/dGhlXzIwMjNfQUlf/U2FmZXR5X1N1bW1p/dC5qcGc",
    desc: "As new roles are created and existing ones evolve, what will the future of work look like?...",
  },
  {
    id: 7,
    source: "pixlr.com",
    sourceLogo:
      "https://imgs.search.brave.com/eLGxhg-YrnV6fBCFAwJ5vrW8dXLLJ_H39YZaYnOMsFM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmJmNjczNjA1/MTlkMzlmNTc5YzQw/NDI1NGFhZWVjODhi/ODZlMGY0ODZmZDhm/ZTU2NzdlNTJhOWIz/MjNjNWZlNi9waXhs/ci5jb20v",
    imageThumbnail:
      "https://imgs.search.brave.com/ELraHVFhaaIvYzDvAkgAXZ4mIcKlSY10rDMyl2bmNFA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2luZGV4L2FpLWdl/bmVyYXRpdmUtZmls/bC1hZnRlci53ZWJw",
    desc: "As new roles are created and existing ones evolve, what will the future of work look like?...",
  },
];

const ImagesContent = ({ searchParams }) => {
  return (
    <>
      <section className="flex flex-col gap-4 px-3 text-start">
        <ImagesDisplay imagesData={IMAGE_RESULTS} />
      </section>
    </>
  );
};

export default ImagesContent;
