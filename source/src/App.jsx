import React, { useState } from 'react';
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
