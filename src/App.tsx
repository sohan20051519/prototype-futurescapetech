import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Menu,
  X,
  Building2,
  Cpu,
  Globe,
  Smartphone,
  Layers,
  ShieldCheck,
  Award,
  Users,
  BarChart3,
  Calendar,
  Send,
  HelpCircle,
  Clock,
  ExternalLink,
  ChevronDown,
  LayoutGrid,
  Utensils,
  DoorOpen,
  ShoppingBag,
  Share2,
  Star,
  Quote
} from 'lucide-react';
import GradientWaves from './components/GradientWaves';
import { TestimonialsSection } from './components/ui/testimonial-v2';
import { SplineScene } from '@/components/ui/splite';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

    :root {
      --color-dark: #111827;
      --color-slate: #4b5563;
      --color-sage: #b5c2bc;
      --color-white: #ffffff;
      --color-offwhite: #f4f3f3;
    }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--color-offwhite);
      color: #111827;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
    }

    .font-heading {
      font-family: 'Space Grotesk', sans-serif;
    }

    /* Keyframes */
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(1deg); }
    }

    @keyframes pulseSoft {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }

    @keyframes noiseAnim {
      0%, 100% { background-position: 0 0; }
      20% { background-position: -5% 10%; }
      40% { background-position: 10% -15%; }
      60% { background-position: -15% 5%; }
      80% { background-position: 15% 15%; }
    }

    .animate-marquee {
      display: flex;
      width: 200%;
      animation: marquee 25s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(181, 194, 188, 0.35);
    }

    .glass-dark {
      background: rgba(51, 56, 39, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(181, 194, 188, 0.2);
    }

    .neumorph-btn {
      box-shadow: 4px 4px 10px rgba(131, 140, 140, 0.15), -4px -4px 10px rgba(255, 255, 255, 0.8);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .neumorph-btn:hover {
      box-shadow: 2px 2px 5px rgba(131, 140, 140, 0.2), -2px -2px 5px rgba(255, 255, 255, 0.9);
      transform: translateY(-1px);
    }
    .neumorph-btn:active {
      box-shadow: inset 2px 2px 5px rgba(131, 140, 140, 0.25), inset -2px -2px 5px rgba(255, 255, 255, 0.7);
      transform: translateY(1px);
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f4f3f3;
    }
    ::-webkit-scrollbar-thumb {
      background: #b5c2bc;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #838c8c;
    }

    /* Hide scrollbar for horizontal scrolling containers */
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}</style>
);

const NoiseOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-50 opacity-[0.035]" 
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const Logo = ({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 select-none flex-shrink-0 min-w-0 ${className}`}>
    <div className="flex items-center text-[11px] xs:text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] font-black tracking-tight leading-none truncate">
      <span className={light ? "text-white" : "text-neutral-900"}>FUTURESCAPE</span>
      <span className="text-[#5ba4cf] font-bold">TECHNOLOGY</span>
    </div>
    <div className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 ${
      light ? "border-white text-white" : "border-neutral-900 text-neutral-900"
    }`}>
      <span className="font-normal text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-tight leading-none">
        FS
      </span>
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-2.5 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-1.25rem)] sm:w-[94%] max-w-7xl z-50 transition-all">
      <div className="bg-white/95 sm:bg-white/95 rounded-full py-1.5 px-3 sm:p-2 sm:pl-5 sm:pr-2 flex items-center justify-between gap-2 shadow-xl border border-[#b5c2bc]/40 backdrop-blur-md">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center flex-shrink min-w-0 py-1">
          <Logo />
        </a>

        {/* Middle Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {['About', 'Services', 'Careers', 'Blogs', 'Testimonials', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="px-2.5 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold text-neutral-800 hover:text-[#036c99] hover:bg-neutral-100/80 transition-colors rounded-full whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side CTA & Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Direct CTA Button - visible on sm screens and up */}
          <a 
            href="#appointment" 
            className="hidden sm:flex items-center justify-center gap-1 bg-[#036c99] hover:bg-[#025275] text-white px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md whitespace-nowrap"
          >
            <span>Book Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2.5} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="lg:hidden p-2 sm:p-2.5 rounded-full bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-200 transition-colors focus:outline-none flex items-center justify-center" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white/98 rounded-3xl p-5 flex flex-col gap-1 shadow-2xl border border-neutral-200 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pb-3 border-b border-neutral-100 mb-2 flex justify-between items-center">
            <Logo />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-neutral-100 text-neutral-600 hover:text-neutral-900"
              aria-label="Close Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {['About', 'Services', 'Careers', 'Blogs', 'Testimonials', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-[14px] font-bold text-neutral-800 hover:text-[#036c99] transition-colors rounded-xl hover:bg-neutral-100"
            >
              {link}
            </a>
          ))}
          <div className="mt-2 pt-3 border-t border-neutral-100 flex flex-col gap-3">
            <a 
              href="#appointment" 
              onClick={() => setIsOpen(false)}
              className="flex sm:hidden items-center justify-center gap-2 bg-[#036c99] hover:bg-[#025275] text-white px-5 py-3 rounded-full text-sm font-bold transition-all shadow-md"
            >
              <span>Book Demo</span>
              <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
            </a>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700 px-3 py-1">
              <Phone className="w-3.5 h-3.5 text-[#036c99]" />
              <span>022 45740221</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-20 bg-[#036c99]">
      {/* GradientWaves Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GradientWaves
          horizonColor="#036c99"
          waveColor="#838c8c"
          crestColor="#b5c2bc"
          speed={0.35}
          amplitude={2.2}
          waveScale={0.6}
          waveRatio={0.9}
          swell={30}
          turbulence={18}
          tilt={1.11}
          zoom={1.0}
          height={5.5}
          fogDepth={15}
          detail="low"
          brightness={1.2}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.4}
          grain={false}
        />
      </div>

      {/* Full-Screen 3D Interactive Spline Layer across Hero - Hidden on mobile, visible on lg+ */}
      <div className="hidden lg:flex absolute inset-0 z-[2] w-full h-full pointer-events-none lg:pointer-events-auto items-center justify-end overflow-visible">
        <div className="w-full h-full lg:w-[62%] xl:w-[58%] lg:ml-auto flex items-center justify-center overflow-visible pointer-events-none lg:pointer-events-auto">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full cursor-grab active:cursor-grabbing pointer-events-none lg:pointer-events-auto"
            fullScreenHover={true}
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[500px] lg:min-h-[560px]">
          
          {/* Left Column: Balanced center header/actions on mobile with left-aligned trust points */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 pointer-events-auto mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#b5c2bc] text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-[#b5c2bc]" />
              <span>Enterprise IT & Automation Pioneer</span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#ffffff] leading-[1.08] text-center lg:text-left">
              Easing Efforts & <br className="hidden sm:inline lg:inline" />
              Multiplying Profits.
            </h1>

            {/* CTA Buttons - Centered stack on mobile, inline on desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <a
                href="#appointment"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-neutral-950 font-extrabold rounded-2xl shadow-xl hover:bg-neutral-100 transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base group hover:scale-105 active:scale-95 pointer-events-auto"
              >
                Make an Appointment
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#036c99]/80 backdrop-blur-sm text-[#ffffff] border border-white/30 font-bold rounded-2xl shadow-sm hover:bg-[#025275] transition-all flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-105 active:scale-95 pointer-events-auto"
              >
                Explore Products
                <ChevronDown className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Trust highlights - clean pills/chips on mobile */}
            <div className="pt-4 border-t border-white/15 w-full max-w-lg flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-white/90 mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>145+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>100+ Winning Awards</span>
              </div>
            </div>

          </div>

          {/* Right Column Spacer on Desktop */}
          <div className="hidden lg:block lg:col-span-5 min-h-[300px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '12+', label: 'Years of Experience', sub: 'Pioneers since 2011' },
    { value: '50+', label: 'Happy Clients', sub: 'Across multiple domains' },
    { value: '145+', label: 'Projects Completed', sub: 'On-time execution' },
    { value: '100+', label: 'Winning Awards', sub: 'Recognized excellence' },
  ];

  return (
    <section className="py-12 bg-[#ffffff] border-y border-[#b5c2bc]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col p-6 rounded-2xl bg-[#f4f3f3] border border-[#b5c2bc]/30 hover:border-neutral-900/30 transition-all hover:shadow-md"
            >
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900">
                {stat.value}
              </span>
              <span className="mt-2 text-sm sm:text-base font-bold text-neutral-900">
                {stat.label}
              </span>
              <span className="text-xs text-neutral-600 font-medium mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Visual Bento */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="p-5 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#036c99] text-[#ffffff] shadow-xl relative overflow-hidden text-left flex flex-col items-start">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#b5c2bc]/10 rounded-full blur-2xl" />
              <div className="inline-block p-2.5 sm:p-3 bg-[#b5c2bc]/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#b5c2bc]" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2.5 sm:mb-3 text-[#ffffff] leading-tight text-left">
                Headquartered in Vashi, Navi Mumbai
              </h3>
              <p className="text-xs sm:text-sm text-[#b5c2bc] leading-relaxed text-left">
                Operating out of Cyber One, Sector 30A. We thrive on an ambitious mission to empower business domains with modern automation.
              </p>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-[#b5c2bc]/20 flex items-center justify-between text-xs text-white/80 w-full">
                <span className="truncate pr-2">Plot No. 4 & 6, Sector 30A</span>
                <span className="font-mono text-[#b5c2bc] flex-shrink-0">Est. 2010</span>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#b5c2bc]/40 shadow-sm text-left flex flex-col items-start">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#036c99] mb-1.5 sm:mb-2" />
                <h4 className="font-bold text-xs sm:text-sm text-neutral-900">Client First</h4>
                <p className="text-[11px] sm:text-xs text-neutral-600 font-medium mt-1 leading-normal text-left">Dedicated support team for seamless integration.</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-[#b5c2bc]/20 border border-[#b5c2bc]/40 text-left flex flex-col items-start">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#036c99] mb-1.5 sm:mb-2" />
                <h4 className="font-bold text-xs sm:text-sm text-neutral-900">Product Driven</h4>
                <p className="text-[11px] sm:text-xs text-neutral-600 font-medium mt-1 leading-normal text-left">Pre-built solutions ready to deploy.</p>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#036c99]/10 border border-[#036c99]/20 text-xs font-bold text-[#036c99] uppercase tracking-wider mx-auto lg:mx-0">
              Company Overview
            </div>

            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight text-center lg:text-left">
              Bridging the gap between business domains and the IT industry since 2010.
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal text-left sm:text-center lg:text-left">
              Futurescape Technologies Private Limited was founded with a clear vision: to seamlessly integrate modern software engineering into specific business management processes. Our prime objective is to make technology simple, reliable, and accessible for businesses of all scales.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal text-left sm:text-center lg:text-left">
              With over a decade of hands-on experience and having empowered more than 100 businesses, we stand as a trusted pioneer in developing automated management systems tailored to acquire specific process requirements and deliver optimal efficiency.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 w-full justify-items-start sm:justify-items-center lg:justify-items-start">
              {[
                'Tailored IT Solutions',
                'Dedicated Client Support',
                'Proven Automation Process',
                'Product & Custom Development',
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-start gap-2.5 sm:gap-3 w-full sm:w-auto">
                  <div className="w-5 h-5 rounded-full bg-[#036c99] text-[#ffffff] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 sm:pt-6 w-full flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#036c99] transition-colors border-b-2 border-neutral-900 pb-1"
              >
                Learn More About Our Methodology
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



const ProductsSection = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickySection = rootRef.current?.querySelector('.sticky-cards');
    if (!stickySection) return;

    const ctx = gsap.context(() => {
      const cards = stickySection.querySelectorAll(".gsap-card");
      const totalCards = cards.length;
      const segmentSize = 1 / totalCards;
      const cardYOffset = 5;
      const cardScaleStep = 0.075;

      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50 + i * cardYOffset,
          scale: 1 - i * cardScaleStep,
        });
      });

      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? Math.min(window.innerHeight * 3, 2400) : Math.min(window.innerHeight * 4.5, 3600);

      ScrollTrigger.create({
        trigger: stickySection,
        start: "top top",
        end: `+=${scrollDistance}px`,
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.min(Math.floor(progress / segmentSize), totalCards - 1);
          const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

          cards.forEach((card, i) => {
            if (i < activeIndex) {
              gsap.set(card, { yPercent: -250, rotationX: 35 });
            } else if (i === activeIndex) {
              gsap.set(card, {
                yPercent: gsap.utils.interpolate(-50, -200, segProgress),
                rotationX: gsap.utils.interpolate(0, 35, segProgress),
                scale: 1,
              });
            } else {
              const behindIndex = i - activeIndex;
              const currentYOffset = (behindIndex - segProgress) * cardYOffset;
              const currentScale = 1 - (behindIndex - segProgress) * cardScaleStep;
              gsap.set(card, {
                yPercent: -50 + currentYOffset,
                rotationX: 0,
                scale: currentScale,
              });
            }
          });
        }
      });
    }, rootRef);

    return () => {
      ctx.revert();
      const cards = rootRef.current?.querySelectorAll(".gsap-card");
      if (cards) gsap.set(cards, { clearProps: "all" });
      ScrollTrigger.refresh();
    };
  }, []);

  const cardsData = [
    { 
      eyebrow: "Product", 
      title: "oneapp", 
      desc: "Paying bills, buying groceries, ordering food, connecting to the society office, tracking visitors, video chatting - manage everything with oneapp.",
      img: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/oneapp_95dd446b92.png" 
    },
    { 
      eyebrow: "Product", 
      title: "onesociety", 
      desc: "Digital solutions for administrative management of cooperative housing societies & control over areas like billing, accounting, vendor management, and more.",
      img: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/soc_5e1ec7c97c.png" 
    },
    { 
      eyebrow: "Product", 
      title: "onefooddialer", 
      desc: "One of its kind, onefooddialer is an all encompassing order management software to automate and manage subscription-based businesses most efficiently.",
      img: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/onefood_fe85fbae59.png" 
    },
    { 
      eyebrow: "Product", 
      title: "onegate", 
      desc: "The best visitor and gate management system to manage visitors and enhance security in the gated premises.",
      img: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/onegate_077bab1af1.png" 
    },
    { 
      eyebrow: "Product", 
      title: "oneresto", 
      desc: "oneresto is a specialized business management solution developed to manage and run the restaurant and cafe businesses.",
      img: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/one_restaurant_dark_ff8360fa70.png" 
    },
    { 
      eyebrow: "Product", 
      title: "oneretail", 
      desc: "oneretail is a specialized business management solution developed to manage and run retail businesses.",
      img: "https://image-transform-service.cubeonebiz.com/o:webp?image=https://cms.futurescapetech.com/uploads/one_retail_dark_7607915467.png" 
    }
  ];

  return (
    <div ref={rootRef} id="products" className="sticky-cards-section-wrapper">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100..900;1,100..900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap");

        .sticky-cards-section-wrapper {
          --base-1: #ffffff;
          --base-2: #f8fafc;
          --base-3: #ffffff;
          --base-4: #f8fafc;
          --base-5: #ffffff;
          --base-6: #f8fafc;
          width: 100%;
          position: relative;
        }
        
        .sticky-cards-section-wrapper .sticky-cards {
          position: relative;
          width: 100%;
          height: 100svh;
          overflow: hidden;
          background-color: #f1f3f4;
          perspective: 1000px;
        }

        .sticky-cards-section-wrapper .intro {
          position: relative;
          width: 100%;
          height: 24svh;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #f1f3f4;
          z-index: 10;
          padding: 1rem 1rem 0;
        }

        .sticky-cards-section-wrapper .intro .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          background-color: #036c99;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .sticky-cards-section-wrapper .intro h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #111827;
          margin: 0;
        }

        @media (min-width: 640px) {
          .sticky-cards-section-wrapper .intro h2 {
            font-size: 2.75rem;
          }
          .sticky-cards-section-wrapper .intro {
            height: 28svh;
          }
        }

        .sticky-cards-section-wrapper .gsap-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 85%;
          max-width: 900px;
          height: 55%;
          max-height: 480px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          gap: 1.75rem;
          padding: 2.25rem;
          border-radius: 1.5rem;
          color: #111827;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04);
          transform-origin: center bottom;
          will-change: transform;
          container-type: inline-size;
          overflow: hidden;
        }

        .sticky-cards-section-wrapper .gsap-card .col {
          height: 100%;
          min-width: 0;
          display: flex;
        }

        .sticky-cards-section-wrapper .gsap-card .col:nth-child(1) {
          flex: 1.4;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0.25rem;
          min-width: 0;
        }
        
        .sticky-cards-section-wrapper .gsap-card .col:nth-child(2) {
          flex: 1;
          border-radius: 1.25rem;
          overflow: hidden;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          min-width: 0;
        }

        .sticky-cards-section-wrapper .gsap-card h1 {
          text-transform: uppercase;
          font-family: "Barlow Condensed", sans-serif;
          font-size: clamp(1.75rem, 5cqw, 3.25rem);
          font-weight: 800;
          line-height: 1;
          margin: 0;
          color: #036c99;
          white-space: nowrap;
        }

        .sticky-cards-section-wrapper .gsap-card p {
          text-transform: uppercase;
          font-family: "DM Mono", monospace;
          font-size: 0.75rem;
          margin: 0;
          color: #64748b;
          letter-spacing: 0.05em;
        }

        .sticky-cards-section-wrapper .gsap-card img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 0.5rem;
        }

        #card-1 { background-color: var(--base-1); z-index: 7; }
        #card-2 { background-color: var(--base-2); z-index: 6; }
        #card-3 { background-color: var(--base-3); z-index: 5; }
        #card-4 { background-color: var(--base-4); z-index: 4; }
        #card-5 { background-color: var(--base-5); z-index: 3; }
        #card-6 { background-color: var(--base-6); z-index: 2; }

        @media (max-width: 767px) {
          .sticky-cards-section-wrapper .gsap-card {
            width: calc(100% - 2.5rem);
            max-width: 380px;
            height: auto;
            min-height: unset;
            max-height: 68svh;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            top: 50%;
            padding: 1.25rem 1.25rem 1.25rem;
            gap: 0.75rem;
            border-radius: 1.25rem;
          }
          .sticky-cards-section-wrapper .gsap-card .col {
            width: 100%;
            height: auto;
          }
          .sticky-cards-section-wrapper .gsap-card .col:nth-child(1) {
            flex: initial;
            padding: 0;
            gap: 0.5rem;
            justify-content: flex-start;
          }
          .sticky-cards-section-wrapper .gsap-card .col:nth-child(1) h1 {
            font-size: 1.75rem !important;
            margin-top: 0.1rem !important;
            margin-bottom: 0.35rem !important;
          }
          .sticky-cards-section-wrapper .gsap-card .col:nth-child(1) p.card-desc {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .sticky-cards-section-wrapper .gsap-card .col:nth-child(1) .btn-wrap {
            margin-top: 0.25rem;
          }
          .sticky-cards-section-wrapper .gsap-card .col:nth-child(1) .btn-wrap a {
            padding: 0.45rem 1.15rem !important;
            font-size: 0.75rem !important;
          }
          .sticky-cards-section-wrapper .gsap-card .col:nth-child(2) {
            flex: initial;
            width: 100%;
            height: 100px;
            max-height: 110px;
            padding: 0.5rem 0.75rem;
            border-radius: 0.75rem;
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
          }
          .sticky-cards-section-wrapper .gsap-card .col:nth-child(2) img {
            max-height: 85px;
          }
        }
      `}</style>
      
      <section className="intro">
        <div className="badge">
          Proprietary Software
        </div>
        <h2>Product Portfolio</h2>
      </section>

      <section className="sticky-cards">
        {cardsData.map((card, idx) => (
          <div key={idx} className="gsap-card" id={`card-${idx + 1}`}>
            <div className="col">
              <div>
                <p>{card.eyebrow}</p>
                <h1 style={{ marginTop: '0.25rem', marginBottom: '0.75rem' }}>{card.title}</h1>
                <p className="card-desc" style={{ textTransform: 'none', fontFamily: 'inherit', fontWeight: '500', lineHeight: '1.5', color: '#334155' }}>{card.desc}</p>
              </div>
              <div className="btn-wrap">
                <a href="#appointment" style={{ 
                  display: 'inline-block',
                  padding: '0.65rem 1.4rem',
                  backgroundColor: '#036c99',
                  color: '#ffffff',
                  borderRadius: '99px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontFamily: 'inherit',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  letterSpacing: '0.025em'
                }}>Learn more</a>
              </div>
            </div>
            <div className="col">
              <img src={card.img} alt={card.title} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-14 sm:py-20 md:py-28 bg-[#f4f3f3] text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#036c99]/10 border border-[#036c99]/20 text-[#036c99] text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
              Dedicated Support & Experience
            </div>
            
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight text-center lg:text-left">
              12 Years of Experience Empowering Businesses
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal text-left sm:text-center lg:text-left">
              With over a decade of hands-on technical evolution, having empowered more than 100 businesses, we are one of the pioneer technology solution providers dedicated to helping you maximize operational profit.
            </p>

            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#b5c2bc]/40 shadow-sm space-y-2 sm:space-y-3 text-left flex flex-col items-start w-full">
              <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#036c99] flex-shrink-0" />
                <span>Dedicated Client Support Team</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal text-left">
                Our client support team is always present to ensure that your experience with our agency and software solutions is smooth, pleasant, and fruitful.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#b5c2bc]/40 shadow-sm flex flex-col items-start justify-between min-h-[140px] sm:h-48 hover:shadow-md transition-all">
                <div className="p-2.5 sm:p-3 bg-[#036c99]/10 w-fit rounded-xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#036c99]" />
                </div>
                <div className="mt-3 sm:mt-0 text-left">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">50+</span>
                  <p className="text-xs text-neutral-600 font-semibold mt-0.5 sm:mt-1">Happy Clients</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#b5c2bc]/40 shadow-sm flex flex-col items-start justify-between min-h-[140px] sm:h-48 hover:shadow-md transition-all">
                <div className="p-2.5 sm:p-3 bg-[#036c99]/10 w-fit rounded-xl">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#036c99]" />
                </div>
                <div className="mt-3 sm:mt-0 text-left">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">145+</span>
                  <p className="text-xs text-neutral-600 font-semibold mt-0.5 sm:mt-1">Projects Completed</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#b5c2bc]/40 shadow-sm flex flex-col items-start justify-between min-h-[150px] sm:h-48 sm:col-span-2 hover:shadow-md transition-all">
                <div className="flex flex-row items-center justify-between w-full gap-2">
                  <div className="p-2.5 sm:p-3 bg-[#036c99]/10 rounded-xl">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#036c99]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#036c99] bg-[#036c99]/10 px-2.5 sm:px-3 py-1 rounded-full">
                    Industry Recognized
                  </span>
                </div>
                <div className="mt-3 sm:mt-0 text-left w-full">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 block mb-0.5">100+</span>
                  <h4 className="font-bold text-sm sm:text-base text-neutral-900">Winning Awards &amp; Recognition</h4>
                  <p className="text-xs text-neutral-600 mt-1 font-normal leading-relaxed text-left">
                    Recognized industry-wide for excellence in automated management systems and enterprise software innovation.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', notes: '' });
    }, 5000);
  };

  return (
    <section id="appointment" className="py-14 sm:py-20 md:py-28 bg-[#f4f3f3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-[#ffffff] border border-[#b5c2bc]/50 shadow-2xl p-5 xs:p-7 sm:p-10 md:p-12 lg:p-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading and Text */}
            <div className="lg:col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#036c99] text-[#ffffff] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 mx-auto lg:mx-0">
                Free Demonstration
              </div>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight text-center lg:text-left">
                Make an Appointment & Request Demo
              </h2>
              <p className="mt-3 sm:mt-5 text-sm xs:text-base sm:text-lg text-neutral-700 leading-relaxed font-normal text-left sm:text-center lg:text-left">
                What to expect from the free demo? Our experts will walk you through live software workflows tailored specifically to your domain requirements.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#b5c2bc]/20 border border-[#b5c2bc] text-center space-y-3 animate-in fade-in duration-300 h-full flex flex-col justify-center min-h-[260px] sm:min-h-[300px]">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#036c99] text-[#ffffff] rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900">Appointment Request Sent!</h3>
                  <p className="text-xs sm:text-base text-neutral-700">
                    Thank you, <span className="font-bold text-neutral-900">{formData.name || 'Valued Client'}</span>. Our client support team will reach out shortly at your preferred contact detail to schedule your live walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5 sm:mb-2 text-left">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-neutral-50 border border-[#b5c2bc]/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all text-left"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5 sm:mb-2 text-left">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-neutral-50 border border-[#b5c2bc]/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all text-left"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5 sm:mb-2 text-left">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="022 45740221"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-neutral-50 border border-[#b5c2bc]/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all text-left"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5 sm:mb-2 text-left">
                      Additional Notes or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your process requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-neutral-50 border border-[#b5c2bc]/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all resize-none text-left"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#b5c2bc]/20">
                    <span className="text-xs text-neutral-600 font-medium text-left">
                      * No obligation, 100% free product demonstration.
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#036c99] text-[#ffffff] font-bold text-sm rounded-xl shadow-md hover:bg-[#036c99]/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap hover:scale-105 active:scale-95"
                    >
                      Submit Request
                      <Send className="w-4 h-4 text-[#b5c2bc]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What services does Futurescape Technology provide?',
      a: 'Futurescape Technology is a product based software company. We have a host of already existing products (such as oneapp, onesociety, onefooddialer) and we are brainstorming new solutions everyday to help automate and streamline various management processes. We also provide full custom web/app development, digital marketing, and branding services.',
    },
    {
      q: 'What are the Futurescape Technology products?',
      a: 'Our wide array of software products includes: oneapp (flagship community & management app), onesociety (housing society billing & ERP), onefooddialer (tiffin & food delivery automation), onegate (digital visitor security), oneresto (restaurant POS & order workflow), and oneretail (retail POS & inventory control).',
    },
    {
      q: 'oneapp is a user-targeted app. How can it help in business management?',
      a: 'oneapp connects end users directly with business management systems. For instance, in gated communities or local ecosystems, it enables instant digital approvals, automated billing, service booking, and streamlined resident-business communication in real-time.',
    },
    {
      q: 'Can I request a free demonstration for one specific product?',
      a: 'Yes, absolutely! You can select any product from our portfolio (or custom requirement) and request a free live demo using our online appointment form or by contacting our team at 022 45740221.',
    },
    {
      q: 'What to expect from the free demo?',
      a: 'During the free demo, our technical experts will present a step-by-step walk-through of the software interface, showcase real-world management workflows, demonstrate administrative controls, and answer all questions regarding integration with your specific operations.',
    },
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-[#ffffff] relative border-t border-[#b5c2bc]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#036c99]/10 border border-[#036c99]/20 text-xs font-bold text-[#036c99] uppercase tracking-wider mb-2.5 sm:mb-3">
            Got Questions?
          </div>
          <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-medium">
            Everything you need to know about our products, services, and demo process.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#f4f3f3] border border-[#b5c2bc]/40 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-heading font-bold text-sm xs:text-base sm:text-lg text-neutral-900 hover:text-black hover:bg-neutral-200/50 transition-colors"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal border-t border-[#b5c2bc]/20 bg-[#ffffff]/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

const BlogSection = () => {
  const articles = [
    {
      date: 'July 02, 2026',
      author: 'Futurescape Technology',
      title: 'Edge AI vs Cloud AI: Which Will Dominate Smart Applications in 2026?',
      snippet: 'Exploring local processing efficiency vs centralized cloud computing for enterprise software automation and real-time smart apps.',
      tag: 'Artificial Intelligence',
    },
    {
      date: 'May 22, 2026',
      author: 'Futurescape Technology',
      title: 'AI Agents in Enterprise Automation: Transforming Business Operations in 2026',
      snippet: 'How autonomous software agents are replacing manual repetitive operational workflows across housing societies, retail, and hospitality.',
      tag: 'Enterprise Automation',
    },
    {
      date: 'May 14, 2026',
      author: 'Futurescape Technology',
      title: 'The Impact of Generative AI on Future Search Rankings',
      snippet: 'Understanding search engine evolution, generative summaries, and how digital marketing strategies must adapt for maximum visibility.',
      tag: 'Digital Marketing',
    },
  ];

  return (
    <section id="blog" className="py-14 sm:py-20 md:py-28 bg-[#f4f3f3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 text-center md:text-left items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#036c99] text-[#ffffff] text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 mx-auto md:mx-0">
              Industry Insights
            </div>
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-extrabold text-neutral-900 text-center md:text-left">
              Read Our Latest News & Blog
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="rounded-2xl sm:rounded-3xl bg-[#ffffff] border border-[#b5c2bc]/40 p-4 sm:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group text-left"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3 sm:mb-4 font-medium">
                  <span className="font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-md text-[11px] sm:text-xs">
                    {art.tag}
                  </span>
                  <span className="text-[11px] sm:text-xs">{art.date}</span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#036c99] transition-colors leading-snug mb-2 sm:mb-3 text-left">
                  {art.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4 sm:mb-6 font-normal text-left">
                  {art.snippet}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#b5c2bc]/20 flex items-center justify-between text-xs w-full">
                <span className="font-medium text-neutral-600 text-[11px] sm:text-xs">by {art.author}</span>
                <a
                  href="#blog"
                  className="font-bold text-neutral-900 group-hover:text-[#036c99] flex items-center gap-1 group-hover:translate-x-1 transition-transform text-xs"
                >
                  Read Article
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-500" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#036c99] text-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl font-bold">
            Get Our News and Updates in Your Inbox
          </h2>
          <p className="text-xs sm:text-sm text-[#b5c2bc] max-w-lg mx-auto">
            Subscribe to receive periodic updates on software releases, management strategies, and technology trends.
          </p>

          {subscribed ? (
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#b5c2bc]/20 border border-[#b5c2bc]/40 text-xs sm:text-sm font-semibold text-[#ffffff] animate-in fade-in">
              🎉 Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#ffffff]/10 border border-[#b5c2bc]/30 text-xs sm:text-sm text-[#ffffff] placeholder-white/50 focus:outline-none focus:border-[#b5c2bc]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-[#ffffff] text-neutral-950 font-bold text-xs sm:text-sm rounded-xl hover:bg-neutral-100 transition-all flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#036c99]/10 border border-[#036c99]/20 text-xs font-bold text-[#036c99] uppercase tracking-wider mx-auto lg:mx-0">
              Contact & Location
            </div>

            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight text-center lg:text-left">
              Headquartered at Vashi, Navi Mumbai
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal text-left sm:text-center lg:text-left">
              <strong>Futurescape Technologies Private Limited</strong> is located at Cyber One, 1904, Plot No. 4 &amp; 6, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703. We thrive on an ambitious mission to empower businesses with cutting-edge software and automation.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 w-full">
              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f3f3] border border-[#b5c2bc]/30 text-left">
                <div className="p-2.5 sm:p-3 bg-[#036c99] text-[#ffffff] rounded-xl flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900">Corporate Address</h4>
                  <p className="text-xs text-neutral-700 mt-0.5 sm:mt-1 leading-relaxed font-normal">
                    Cyber One, 1904, Plot No. 4 &amp; 6, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f3f3] border border-[#b5c2bc]/30 text-left">
                <div className="p-2.5 sm:p-3 bg-[#036c99] text-[#ffffff] rounded-xl flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900">Direct Phone Contact</h4>
                  <a href="tel:02245740221" className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#036c99] hover:underline mt-0.5 block">
                    022 45740221
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f3f3] border border-[#b5c2bc]/30 text-left">
                <div className="p-2.5 sm:p-3 bg-[#036c99] text-[#ffffff] rounded-xl flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900">Official Email</h4>
                  <a href="mailto:contact@futurescapetech.com" className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#036c99] hover:underline mt-0.5 block">
                    contact@futurescapetech.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 w-full text-left">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-1">
                Office Working Hours
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Monday – Saturday: 9:30 AM – 6:30 PM IST<br />
                Sunday: Closed (Support available via email)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-[#f4f3f3] border border-[#b5c2bc]/40 p-3.5 sm:p-6 shadow-sm overflow-hidden flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-1 sm:pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    Official Office Location
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] sm:text-xs bg-white border border-[#b5c2bc]/40 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono text-neutral-800 font-semibold">
                    Cyber One • Vashi
                  </span>
                  <span className="text-[11px] sm:text-xs bg-[#036c99] text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono font-bold">
                    Zoom 18
                  </span>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-[260px] xs:h-[300px] sm:h-[360px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-300 shadow-inner bg-neutral-100 relative">
                <iframe
                  title="Futurescape Google Map Location"
                  className="w-full h-full"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  scrolling="no"
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=futurescape&t=&z=18&ie=UTF8&iwloc=B&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1 text-left">
                <div className="text-xs text-neutral-700 text-left">
                  <span className="font-bold text-neutral-900 block sm:inline">Futurescape Technologies Private Limited</span>
                  <p className="text-[11px] text-neutral-500 mt-0.5">1904, Cyber One, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703</p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="https://maps.google.com/maps?q=futurescape+technologies+cyber+one+vashi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#036c99] text-white text-xs font-bold rounded-xl shadow hover:bg-[#036c99]/90 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#036c99] text-[#ffffff] pt-16 pb-12 border-t border-[#b5c2bc]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-[#b5c2bc]/20 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-start text-left">
            <div className="flex items-center justify-start">
              <Logo light />
            </div>
            <p className="text-xs text-[#b5c2bc] leading-relaxed max-w-sm text-left">
              We are a renowned technology service provider headquartered at Cyber One, 1904, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703, thriving with ambition to empower business domains with technology and automation.
            </p>
            <div className="pt-2 text-xs text-white/80 text-left">
              Phone: <a href="tel:02245740221" className="text-[#ffffff] hover:underline">022 45740221</a><br />
              Email: <a href="mailto:contact@futurescapetech.com" className="text-[#ffffff] hover:underline">contact@futurescapetech.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="font-heading font-bold text-sm text-[#ffffff] uppercase tracking-wider mb-4 text-left">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b5c2bc] text-left">
              <li><a href="#about" className="hover:text-[#ffffff] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#ffffff] transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-[#ffffff] transition-colors">Testimonials</a></li>
              <li><a href="#why-us" className="hover:text-[#ffffff] transition-colors">Why Choose Us</a></li>
              <li><a href="#blog" className="hover:text-[#ffffff] transition-colors">Blogs & News</a></li>
              <li><a href="#faq" className="hover:text-[#ffffff] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#ffffff] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Products List */}
          <div className="flex flex-col items-start">
            <h4 className="font-heading font-bold text-sm text-[#ffffff] uppercase tracking-wider mb-4 text-left">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b5c2bc] text-left">
              <li><a href="#products" className="hover:text-[#ffffff] transition-colors font-semibold text-[#ffffff]">oneapp</a></li>
              <li><a href="#products" className="hover:text-[#ffffff] transition-colors">onesociety</a></li>
              <li><a href="#products" className="hover:text-[#ffffff] transition-colors">onefooddialer</a></li>
              <li><a href="#products" className="hover:text-[#ffffff] transition-colors">onegate</a></li>
              <li><a href="#products" className="hover:text-[#ffffff] transition-colors">oneresto</a></li>
              <li><a href="#products" className="hover:text-[#ffffff] transition-colors">oneretail</a></li>
            </ul>
          </div>

          {/* Contact Info Box */}
          <div className="flex flex-col items-start">
            <h4 className="font-heading font-bold text-sm text-[#ffffff] uppercase tracking-wider mb-4 text-left">
              Headquarters
            </h4>
            <div className="p-4 rounded-2xl bg-[#ffffff]/5 border border-[#b5c2bc]/20 text-xs text-[#b5c2bc] space-y-2 text-left max-w-sm w-full">
              <p className="font-semibold text-[#ffffff]">Cyber One Tower</p>
              <p>1904, Plot No. 4 &amp; 6, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703.</p>
              <div className="pt-2 flex justify-start">
                <a
                  href="#appointment"
                  className="inline-block px-3 py-1.5 bg-[#b5c2bc]/20 text-[#ffffff] font-bold rounded-lg text-[11px] hover:bg-[#b5c2bc] hover:text-neutral-900 transition-all"
                >
                  Book Office Visit
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 text-center sm:text-left">
          <p>© 2026 All Rights Reserved by Futurescape Technology .</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="hover:text-[#ffffff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ffffff] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#ffffff] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default function App() {
  useEffect(() => {
    // Initialize Lenis for premium inertial smooth scrolling on wheel while preserving native 120Hz touch scroll on mobile
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 0, // Disable touch hijacking to allow 100% native butter-smooth mobile touch scrolling
      syncTouch: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(500, 33);

    // Handle anchor links manually since we removed native scroll-behavior: smooth
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -60, duration: 1.2 });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick as any));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick as any));
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f3f3] text-neutral-900 relative selection:bg-neutral-900 selection:text-white">
      <CustomStyles />
      <NoiseOverlay />

      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <TestimonialsSection />
        <AppointmentSection />
        <FAQSection />
        <BlogSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
