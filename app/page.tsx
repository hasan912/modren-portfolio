"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Dynamically import heavy components
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <div className="py-20 text-center">Loading...</div>,
});

const Clients = dynamic(() => import("@/components/Clients"), {
  loading: () => <div className="py-20 text-center">Loading...</div>,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="py-20 text-center">Loading...</div>,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => <div className="py-20 text-center">Loading...</div>,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-20 text-center">Loading...</div>,
});

const Home = () => {
  return (
    <main className="relative bg-black-100 flex flex-col min-h-screen overflow-x-hidden mx-auto w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
