import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-neutral-900 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center font-black text-amber-400 text-xs">
            AD
          </div>
          <div>
            <p className="text-white font-semibold">{personal.name}</p>
            <p className="text-[11px] text-neutral-400">Visual Graphic Designer & Creator</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.socials.email}
            className="hover:text-amber-400 transition-colors"
          >
            Email
          </a>
          <a
            href="#projects"
            className="hover:text-amber-400 transition-colors"
          >
            Projects
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-[11px] text-neutral-400">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
