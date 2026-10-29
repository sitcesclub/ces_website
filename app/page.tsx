import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
// import Domains from "@/components/home/Domains";
import Highlights from "@/components/home/Highlights";
import Upcoming from "@/components/home/Upcoming";
import GalleryPreview from "@/components/home/GalleryPreview";
import CTA from "@/components/home/CTA";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full bg-[linear-gradient(180deg,#050408_0%,#050408_38%,#0a0f2e_62%,#10163f_78%,#141b4a_100%)]">
        <Hero />
        <About />
      </div>

      <div className="w-full bg-[linear-gradient(180deg,#141b4a_0%,#10163f_18%,#0a0f2e_36%,#050408_60%,#050408_100%)]">
        {/* <Domains /> */}
        <Highlights />
        <Upcoming />
        <GalleryPreview />
        <CTA />
      </div>
    </div>
  );
}
