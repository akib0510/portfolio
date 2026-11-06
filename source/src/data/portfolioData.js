import allProjects from './all_projects.json';

export const portfolioData = {
  personal: {
    name: "Akib Hossian Dipu",
    title: "Remote Graphic Designer & Visual Content Specialist",
    tagline: "Crafting conversion-driven social media ad creatives, high-CTR YouTube thumbnails, brand visual identities, and commercial print assets.",
    location: "Dhaka, Bangladesh (UTC+6)",
    email: "akibdipu79@gmail.com",
    phone: "+880 1612064436",
    whatsapp: "https://wa.me/8801612064436",
    availableForHire: true,
    cvPdfUrl: "Akib_Hossian_Dipu_Graphic_Designer_CV.pdf",
    socials: {
      linkedin: "https://www.linkedin.com/in/akib-hossian-dipu/",
      email: "mailto:akibdipu79@gmail.com",
      whatsapp: "https://wa.me/8801612064436",
    },
    about: `Creative Graphic Designer and Visual Content Specialist with a formal background in Communication & Multimedia Journalism from Islamic University. Experienced in crafting conversion-driven social media ad creatives, multi-slide educational carousels, brand identities, and promotional visual assets at PsyCoach Bangladesh and for global remote clients. 

Skilled in translating abstract brand and marketing ideas into clean, scroll-stopping visuals using Adobe Photoshop, Canva Pro, and Illustrator. Self-directed, highly responsive in async workflows, and committed to fast design turnarounds.`,
    stats: [
      { label: "Thumbnails & Designs", value: "67+" },
      { label: "Organic Engagement", value: "+40%" },
      { label: "On-time Delivery", value: "100%" },
      { label: "Years Experience", value: "3+ Yrs" },
    ],
  },

  skills: [
    {
      category: "Software & Creative Tools",
      items: ["Adobe Photoshop", "Canva Pro", "Adobe Illustrator", "Premiere Pro", "CapCut Pro", "Figma Basics"],
    },
    {
      category: "Design Disciplines",
      items: [
        "Social Media Ad Creatives (Meta/IG)",
        "Carousel Infographics & Decks",
        "Brand Identity & Style Guidelines",
        "High-CTR YouTube Thumbnails",
        "Layout Composition & Typography",
        "Short-Form Video Motion Graphics",
        "Commercial Banners & Posters",
      ],
    },
    {
      category: "Remote Collaboration & Workflow",
      items: ["Slack", "Notion", "Trello", "Google Workspace", "Async Communication", "Fast Turnarounds"],
    },
  ],

  experiences: [
    {
      period: "March 2026 - Present",
      role: "Commercial Advertising & Brand Designer",
      company: "Pacco Bangladesh",
      description: "Leading visual advertising campaigns, parcel pickup & delivery posters, tiffin service collaterals, and digital promotional assets across Jashore district.",
    },
    {
      period: "2023 - Present",
      role: "Lead Visual & Thumbnail Designer",
      company: "PsyCoach Bangladesh (Remote / Hybrid)",
      description: "Directing high-converting social media creatives, promotional posters, and ad banners. Engineered custom YouTube thumbnail concepts with dramatic lighting, bold typography, and emotive subject framing (+40% organic engagement).",
    },
    {
      period: "2022 - 2023",
      role: "Digital Media & Advocacy Designer",
      company: "Community Initiatives & Independent Creators (Remote)",
      description: "Created youth campaign posters, public health advocacy infographics, and community event collaterals with clean, purpose-driven visual layouts.",
    },
  ],

  education: [
    {
      degree: "Bachelor of Social Science (BSS) in Communication & Multimedia Journalism",
      institution: "Islamic University, Kushtia, Bangladesh",
      period: "2022 - Present",
      details: "Relevant Courses: Visual Communication, Media Production, Digital Media Dynamics, Public Relations.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Business Studies",
      institution: "Notre Dame College (NDC), Dhaka, Bangladesh",
      period: "Completed",
      details: "Academic foundation in business principles and visual communication.",
    },
  ],

  categories: [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial & Posters" },
    { id: "thumbnails", label: "YouTube Thumbnails" },
    { id: "reels", label: "Reels & Shorts" },
    { id: "social", label: "Social Media Posts" },
  ],

  projects: allProjects,
};
