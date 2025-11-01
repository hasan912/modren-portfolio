"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <h1 className="heading mb-8">
        About <span className="text-purple">Me</span>
      </h1>

      <div className="max-w-5xl mx-auto">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/[0.1] p-8 md:p-12"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          {/* Intro */}
          <div className="space-y-6 text-white-200 text-base md:text-lg leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-white font-bold">Muhammad Hasan Baig</span>, a passionate web developer and tech enthusiast from{" "}
              <span className="text-purple font-semibold">Karachi, Pakistan</span> 🇵🇰
            </p>

            <p>
              I love creating <span className="text-white font-semibold">responsive and modern web applications</span> using{" "}
              <span className="text-purple font-semibold">Next.js, React.js, Tailwind CSS,</span> and{" "}
              <span className="text-purple font-semibold">JavaScript</span>. My aim is to build digital experiences that are{" "}
              <span className="text-white font-semibold">fast, user-friendly, and visually appealing</span>.
            </p>

            <p>
              My journey in tech started with learning the basics of HTML, CSS, and JavaScript, and since then, I&apos;ve been constantly improving my skills and exploring advanced tools and frameworks. I enjoy{" "}
              <span className="text-white font-semibold">solving real-world problems</span> through clean design and efficient code.
            </p>

            {/* Education Cards Grid */}
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              <div className="relative rounded-2xl border border-white/[0.1] p-6 bg-[#10132E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Education</h3>
                    <p className="text-sm text-white-200">Bachelor&apos;s in Artificial Intelligence (BSAI)</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl border border-white/[0.1] p-6 bg-[#10132E]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">PIAIC Program</h3>
                    <p className="text-sm text-white-200">AI Agents, Automation & Machine Learning</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="pt-4">
              I&apos;m currently pursuing my <span className="text-white font-semibold">Bachelor&apos;s degree in Artificial Intelligence (BSAI)</span>, where I continue to strengthen my understanding of programming, problem-solving, and emerging technologies. Alongside my studies, I&apos;m also part of the{" "}
              <span className="text-purple font-semibold">PIAIC Artificial Intelligence program</span>, where I&apos;m learning about AI Agents, automation, and machine learning concepts.
            </p>

            <p>
              <span className="text-white font-semibold">University life</span> has taught me teamwork, project collaboration, and how to balance creativity with logic — all of which I apply to my web development projects.
            </p>

            <p className="text-white font-semibold pt-2">
              I&apos;m always eager to learn new things, collaborate on exciting ideas, and contribute to the ever-evolving world of technology. 🚀
            </p>
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-20 h-20 border-l-2 border-t-2 border-purple/50 rounded-tl-3xl"></div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 border-r-2 border-b-2 border-purple/50 rounded-br-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
