"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ExternalLink,
  BookOpen,
  FileText,
  Terminal
} from "lucide-react";

/* ==========================================================================
   Clean Custom Vector System
   ========================================================================== */

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 12a9 9 0 0 1 9-9h1a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9h-1a9 9 0 0 1-9-9z" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

/* ==========================================================================
   Main Component
   ========================================================================== */

export default function Footer() {
  const currentYear = 2026;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Achievements", href: "/achievements" },
    { label: "Members", href: "/members" },
    { label: "Alumni", href: "/alumni" },
    { label: "Talks", href: "/talks" },
    { label: "Vision", href: "/vision" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/sitcesclub", icon: GithubIcon },
    { label: "Instagram", href: "https://instagram.com/sitcesclub", icon: InstagramIcon },
    { label: "YouTube", href: "https://www.youtube.com/@cesclubsit", icon: YoutubeIcon },
  ];

  const resourceLinks = [
    { label: "Society Magazine", href: "#", icon: BookOpen },
    // { label: "Annual Brochure", href: "#", icon: FileText },
    { label: "Open Source Repos", href: "https://github.com", icon: Terminal },
  ];

  return (
    <footer className="w-full bg-[#050814] border-t border-white/[0.05] relative overflow-hidden font-sans">
      
      {/* Subtle Ambient Gold Radiance */}
      <div className="absolute bottom-0 right-[15%] w-[600px] h-[600px] bg-[#F4B41A]/[0.03] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20 relative z-10">
        
        {/* Top Section: Brand Info + Links Grid */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16 pb-12 sm:pb-16 border-b border-white/[0.05]">
          
          {/* Column 1: Organization Branding */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 sm:space-y-10">
            <div className="space-y-6">
              
              {/* Responsive Alignment: Centered on phones, left-aligned from tablet/desktop up */}
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-5">
                
                {/* Official CES Logo Image */}
                <div className="relative h-16 w-16 sm:h-14 sm:w-14 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center shrink-0 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#F4B41A]/50">
                  <Image 
                    src="/ces-logo-main.png" 
                    alt="CES Logo" 
                    fill
                    sizes="(min-width: 640px) 56px, 64px"
                    className="object-contain p-1"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-[10px] font-bold tracking-wider text-[#F4B41A]/80 font-mono">LOGO</span>';
                    }}
                  />
                </div>

                <div className="w-full overflow-hidden">
                  {/* Single Line Brand Name */}
                  <Link 
                    href="/" 
                    className="font-serif text-[22px] sm:text-[28px] lg:text-[34px] xl:text-4xl text-[#F0F4F8] tracking-tight hover:text-[#F4B41A] active:scale-[0.98] active:text-[#F4B41A]/80 origin-center sm:origin-left transition-all duration-200 block whitespace-nowrap"
                  >
                    Computer Engineers&apos; Society.
                  </Link>
                  <p className="text-[10px] font-semibold text-[#F4B41A] uppercase tracking-[0.2em] mt-2.5">
                    Siliguri Institute of Technology
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 pt-2 text-center sm:text-left">
                <p className="text-sm font-medium text-[#7A8AA3] leading-relaxed max-w-sm mx-auto sm:mx-0">
                  Empowering innovators through hands-on learning, algorithmic problem-solving, and collaboration under Techno India Group.
                </p>
              </div>
            </div>

            {/* Social Icon Row */}
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 sm:p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#7A8AA3] hover:text-[#050814] hover:bg-[#F4B41A] hover:border-[#F4B41A] hover:shadow-[0_0_15px_rgba(244,180,26,0.3)] active:scale-90 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5 sm:h-4 sm:w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="sm:col-span-4 lg:col-span-2 mt-4 lg:mt-0 text-center sm:text-left">
            <h3 className="text-[10px] font-bold text-[#7A8AA3] tracking-[0.2em] uppercase mb-5 sm:mb-6">
              Explore
            </h3>
            <ul className="space-y-4 sm:space-y-3.5 flex flex-col items-center sm:items-start">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm font-medium text-[#8B9BB4] hover:text-[#F4B41A] active:scale-95 active:text-[#F4B41A]/80 origin-center sm:origin-left transition-all duration-200"
                  >
                    <span className="w-0 overflow-hidden text-[#F4B41A] group-hover:w-3 transition-all duration-300 hidden sm:inline-block">
                      ›
                    </span>
                    <span className="sm:group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="sm:col-span-4 lg:col-span-3 text-center sm:text-left mt-2 lg:mt-0">
            <h3 className="text-[10px] font-bold text-[#7A8AA3] tracking-[0.2em] uppercase mb-5 sm:mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5 sm:space-y-5 text-sm font-medium text-[#8B9BB4] flex flex-col items-center sm:items-start">
              <li className="group flex flex-col items-center sm:items-start">
                <strong className="text-[10px] text-[#5C6D8A] tracking-[0.1em] uppercase block mb-1">Email</strong>
                <a href="mailto:ces@sittechno.edu.in" className="text-[#F0F4F8] hover:text-[#F4B41A] active:scale-95 active:text-[#F4B41A]/80 origin-center sm:origin-left transition-all duration-200 break-all inline-block">
                  ces@sittechno.edu.in
                </a>
              </li>
              <li className="group flex flex-col items-center sm:items-start">
                <strong className="text-[10px] text-[#5C6D8A] tracking-[0.1em] uppercase block mb-1">Phone</strong>
                <a href="tel:+919472002938" className="text-[#F0F4F8] hover:text-[#F4B41A] active:scale-95 active:text-[#F4B41A]/80 origin-center sm:origin-left transition-all duration-200 inline-block">
                  +91-9472002938
                </a>
              </li>
              <li className="flex flex-col items-center sm:items-start">
                <strong className="text-[10px] text-[#5C6D8A] tracking-[0.1em] uppercase block mb-1">Address</strong>
                <span className="text-[#F0F4F8] leading-relaxed block max-w-[200px] sm:max-w-none">
                  SIT Campus, Sukna<br />Darjeeling – 734009
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="sm:col-span-4 lg:col-span-2 flex flex-col justify-between gap-10 sm:gap-0 mt-2 lg:mt-0">
            <div className="text-center sm:text-left">
              <h3 className="text-[10px] font-bold text-[#7A8AA3] tracking-[0.2em] uppercase mb-5 sm:mb-6">
                Resources
              </h3>
              <ul className="space-y-4 sm:space-y-3.5 flex flex-col items-center sm:items-start">
                {resourceLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group w-fit text-sm font-medium text-[#8B9BB4] hover:text-[#F4B41A] active:scale-95 active:text-[#F4B41A]/80 origin-center sm:origin-left flex items-center gap-2.5 transition-all duration-200"
                      >
                        <Icon className="h-4 w-4 text-[#5C6D8A] group-hover:text-[#F4B41A] transition-colors" />
                        <span>{link.label}</span>
                        {link.href !== "#" && (
                          <ExternalLink className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 text-[#F4B41A] transition-all duration-300 hidden sm:block" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright Bar */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 text-xs font-medium text-[#5C6D8A] text-center sm:text-left">
          <p className="tracking-wide leading-relaxed">&copy; {currentYear} Computer Engineers&apos; Society.<br className="sm:hidden" /> All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-[#F4B41A] active:scale-95 transition-all duration-200">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#5C6D8A]" />
            <Link href="/terms" className="hover:text-[#F4B41A] active:scale-95 transition-all duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}