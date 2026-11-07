import allProjects from './all_projects.json';

export const portfolioData = {
  personal: {
    name: "Akib Hossian Dipu",
    title: "Remote Graphic Designer & Visual Content Specialist",
    tagline: "Crafting conversion-driven commercial posters, high-CTR YouTube thumbnails, educational course creatives, and brand visual identities.",
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
    about: `Creative Graphic Designer and Visual Content Specialist with a formal background in Communication & Multimedia Journalism from Islamic University. Experienced in crafting conversion-driven commercial advertising posters, high-CTR YouTube thumbnails, brand visual identity systems, and educational carousel infographics.

Proven track record directing commercial print and digital campaigns at Pacco Bangladesh, driving organic audience growth at PyCoach Bangladesh, and designing academic course visual media for Al-Manarat Institute of Online Education. Skilled in translating marketing concepts into scroll-stopping visuals using Adobe Photoshop, Canva Pro, and Illustrator with seamless async collaboration across global teams.`,
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
      items: ["Adobe Photoshop", "Canva Pro", "Adobe Illustrator", "Premiere Pro", "CapCut Pro"],
    },
    {
      category: "Design Disciplines",
      items: [
        "Commercial Banners & Posters",
        "High-CTR YouTube Thumbnails",
        "Social Media Ad Creatives (Meta/IG)",
        "Educational Course Graphics",
        "Carousel Infographics & Decks",
        "Brand Identity & Style Guidelines",
        "Short-Form Video Motion Graphics",
      ],
    },
    {
      category: "Remote Collaboration & Communication",
      items: ["Discord", "WhatsApp", "Microsoft Teams", "Google Workspace", "Slack", "Notion", "Trello"],
    },
  ],

  experiences: [
    {
      period: "March 2026 - Present",
      role: "Commercial Advertising & Brand Designer",
      company: "Pacco Bangladesh (Active / Current)",
      isCurrent: true,
      description: "Leading visual advertising campaigns, regional launch banners (Chowgacha regional launch, 2-day countdowns), parcel pickup & delivery posters, tiffin service collaterals, and digital promotional assets across Jashore district.",
    },
    {
      period: "2023 - 2025",
      role: "Former Lead Visual & Thumbnail Designer",
      company: "PyCoach Bangladesh (Remote / Hybrid • Completed)",
      isCurrent: false,
      description: "Directed high-converting social media creatives, promotional posters, and multi-slide educational carousels (+40% organic audience growth). Engineered custom YouTube thumbnail concepts with high-contrast lighting and emotive framing.",
    },
    {
      period: "2024 - 2025",
      role: "Creative & Academic Media Designer",
      company: "Al-Manarat Institute of Online Education (Remote • Completed)",
      isCurrent: false,
      description: "Designed Islamic University admission coaching campaigns, Arabic grammar (Nahw-Sarf) foundation course collaterals, online Madrasah banners (At-Tadrees), and high-enrollment social media promotional posts.",
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
