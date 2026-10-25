
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const domains = [
  {
    id: "01",
    title: "Hackathons & Innovation",
    desc: "Building real-world solutions under pressure in flagship events like SIT Hack-A-Verse and SIH.",
    image: "/domains/innovation.png",
    alt: "Hackathons and innovation",
  },
  {
    id: "02",
    title: "Cybersecurity",
    desc: "Exploring threat intelligence, digital defense systems, and cybersecurity challenges.",
    image: "/domains/cybersecurity.png",
    alt: "Cybersecurity",
  },
  {
    id: "03",
    title: "IoT & Hardware",
    desc: "Designing embedded systems and smart devices, from intelligent sensors to connected hardware.",
    image: "/domains/hardware.png",
    alt: "IoT and hardware",
  },
  {
    id: "04",
    title: "Web & App Development",
    desc: "Creating scalable applications using modern web frameworks and cross-platform technologies.",
    image: "/domains/development.png",
    alt: "Web and app development",
  },
  {
    id: "05",
    title: "Open Source",
    desc: "Contributing to public codebases and collaborating with developer communities.",
    image: "/domains/opensource.png",
    alt: "Open source development",
  },
  {
    id: "06",
    title: "Competitive Programming",
    desc: "Strengthening logical thinking and algorithmic problem-solving through DSA challenges.",
    image: "/domains/programming.png",
    alt: "Competitive programming",
  },
];

const subscribeReducedMotion = (callback: () => void) => {
  const mediaQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getReducedMotionServerSnapshot = () => false;

export default function Domains() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const activeVisible = prefersReducedMotion || isVisible;

  return (
    <section
      ref={sectionRef}
      id="domains"
      className="
        relative z-10
        w-full
        px-5 sm:px-6 lg:px-8
        py-16 sm:py-20 lg:py-24
        bg-transparent
        border-t border-white/[0.04]
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Original section heading */}
        <div
          className={`
            mb-10 sm:mb-14
            transition-all duration-700 ease-out
            ${
              activeVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-[3px] h-16 sm:h-20 bg-[#6FA8FF] rounded-full shrink-0 mt-1" />

              <div>
                <p className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[4px] text-[#9AA9D6]">
                  EXPLORE OUR
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.08] tracking-[-1px] text-[#E8EEFF]">
                  Technical Scope &amp;{" "}
                  <span className="text-[#6FA8FF]">
                    Focus Tracks
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive domain grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {domains.map((domain, index) => (
            <article
              key={domain.id}
              style={{
                transitionDelay: activeVisible
                  ? `${index * 70}ms`
                  : "0ms",
              }}
              className={`
                group relative flex min-w-0 flex-col justify-between
                min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]
                p-6 sm:p-7 lg:p-8
                bg-[#080D21]/80
                border border-white/[0.08]
                rounded-2xl
                hover:border-[#6FA8FF]/40
                hover:bg-[#0B122E]/90
                transition-all duration-300 ease-out
                overflow-hidden
                shadow-lg shadow-black/20
                ${
                  activeVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >

              {/* Centred image */}
              <div className="relative z-10 flex flex-1 items-center justify-center py-5 sm:py-6">
                <img
                  src={domain.image}
                  alt={domain.alt}
                  loading="lazy"
                  className="
                    block w-full max-w-[220px]
                    h-28 sm:h-32
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-[1.04]
                  "
                />
              </div>

              {/* Original title and description */}
              <div className="relative z-10">
                <h3
                  className="
                    text-xl sm:text-[22px]
                    font-medium leading-snug
                    text-[#E8EEFF]
                    group-hover:text-[#6FA8FF]
                    transition-colors duration-300
                  "
                >
                  {domain.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-[#8F9CC2]">
                  {domain.desc}
                </p>
              </div>

              {/* Original pixel decoration */}
              <div
                className="
                  absolute -right-4 -bottom-4
                  w-24 h-24
                  bg-[radial-gradient(rgba(111,168,255,0.08)_2px,transparent_2px)]
                  [background-size:10px_10px]
                  rounded-full
                  pointer-events-none
                  opacity-40
                  group-hover:opacity-80
                  transition-opacity duration-300
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
