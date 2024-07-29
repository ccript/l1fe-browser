import Navbar from "@/components/navbar/Navbar";
import NavigationLinks from "@/components/navbar/NavigationLinks";
import { Suspense } from "react";

export default function ResultsLayout({ children }) {
  return (
    <main className="relative w-full h-full border overflow-y-auto">
      {/* <div className="sticky top-0 z-10 bg-white">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <aside className="w-full border-b h-12 ">
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationLinks />
        </Suspense>
      </aside> */}
      {children}
    </main>
  );
}
