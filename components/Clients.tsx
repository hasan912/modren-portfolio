"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import Companies from "@/components/Companies";

const words = `I build blazing fast, responsive websites with modern day technologies with a focus on Next. js, React, and Tailwind CSS. I write clean code, scalable architecture and think of UI UX in order to meet the business goals competently with technology. Whether working on behalf of a personal brand or large organization, I deliver digital solutions that cut through the noise and demand attention in an increasingly competitive market.`;
const Clients = () => {
  return (
    <section id="Why-Me" className="py-20">
      <h1 className="heading">
        Building
        <span className="text-purple"> Modern Website </span>
        That Drive Results
      </h1>

      <div className="flex pt-10 text-lg flex-col items-center max-lg:mt-10">
        <TextGenerateEffect words={words} />
      
      </div>

    </section>
  );
};

export default Clients;


