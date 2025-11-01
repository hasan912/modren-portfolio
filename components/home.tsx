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

const HomeSection = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
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

export default HomeSection;
