import React, { useState, useEffect } from 'react';
import { Palette, FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCV, personal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 text-lg">
                AD
              </span>
            </div>
          </div>
          <div>
            <span className="font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              {personal.name}
            </span>
            <span className="block text-[11px] text-neutral-400 uppercase tracking-widest font-mono">
              Graphic Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hover:scale-105 transform duration-150"
          >
            Work & Projects
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hover:scale-105 transform duration-150"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hover:scale-105 transform duration-150"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hover:scale-105 transform duration-150"
          >
            About
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-xs font-semibold text-neutral-200 transition-all hover:border-neutral-500"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>View CV</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 font-bold text-xs shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:scale-105 transform"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            Work & Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-300 hover:text-amber-400"
          >
            About
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-2.5 rounded-lg border border-neutral-700 bg-neutral-900 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              View CV / Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 font-bold text-xs text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
