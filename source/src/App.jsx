import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGallery from './components/PortfolioGallery';
import ExperienceSkills from './components/ExperienceSkills';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import CVModal from './components/CVModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleNavigateProject = (direction) => {
    if (!selectedProject) return;
    const currentIndex = portfolioData.projects.findIndex(
      (p) => p.id === selectedProject.id
    );
    const total = portfolioData.projects.length;
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % total;
    } else {
      nextIndex = (currentIndex - 1 + total) % total;
    }
    setSelectedProject(portfolioData.projects[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        personal={portfolioData.personal}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero
          personal={portfolioData.personal}
          onOpenCV={() => setIsCVOpen(true)}
        />

        <PortfolioGallery
          projects={portfolioData.projects}
          categories={portfolioData.categories}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ExperienceSkills
          personal={portfolioData.personal}
          experiences={portfolioData.experiences}
          skills={portfolioData.skills}
        />

        <ContactSection personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />

      {/* Floating WhatsApp Action */}
      <a
        href={portfolioData.personal.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 transform transition-all duration-200 cursor-pointer"
        title="Direct Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-neutral-950" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>

      {/* Lightbox / Project Details Modal */}
      <LightboxModal
        project={selectedProject}
        projects={portfolioData.projects}
        onClose={() => setSelectedProject(null)}
        onNavigate={handleNavigateProject}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        personal={portfolioData.personal}
        experiences={portfolioData.experiences}
        skills={portfolioData.skills}
      />
    </div>
  );
}
