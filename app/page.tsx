"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Optimized lazy loading with intersection observer
const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <div className="py-20" />,
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="py-20" />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => <div className="py-20" />,
});

const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
  loading: () => <div className="py-20" />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <div className="py-20" />,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false,
  loading: () => <div className="py-20" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="py-20" />,
});

const Home = () => {
  const [loadedSections, setLoadedSections] = useState({
    about: false,
    grid: false,
    projects: false,
    clients: false,
    experience: false,
    approach: false,
    footer: false,
  });

  useEffect(() => {
    // Load sections progressively
    const timer1 = setTimeout(() => setLoadedSections(prev => ({ ...prev, about: true })), 500);
    const timer2 = setTimeout(() => setLoadedSections(prev => ({ ...prev, grid: true })), 1000);
    const timer3 = setTimeout(() => setLoadedSections(prev => ({ ...prev, projects: true })), 1500);
    const timer4 = setTimeout(() => setLoadedSections(prev => ({ ...prev, clients: true })), 2000);
    const timer5 = setTimeout(() => setLoadedSections(prev => ({ ...prev, experience: true })), 2500);
    const timer6 = setTimeout(() => setLoadedSections(prev => ({ ...prev, approach: true })), 3000);
    const timer7 = setTimeout(() => setLoadedSections(prev => ({ ...prev, footer: true })), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple text-white px-4 py-2 rounded">
        Skip to main content
      </a>
      <main id="main-content" className="relative bg-black-100 flex flex-col min-h-screen overflow-x-hidden mx-auto w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingNav navItems={navItems} />
          <Hero />
          {loadedSections.about && <About />}
          {loadedSections.grid && <Grid />}
          {loadedSections.projects && <RecentProjects />}
          {loadedSections.clients && <Clients />}
          {loadedSections.experience && <Experience />}
          {loadedSections.approach && <Approach />}
          {loadedSections.footer && <Footer />}
        </div>
      </main>
    </>
  );
};

export default Home;
