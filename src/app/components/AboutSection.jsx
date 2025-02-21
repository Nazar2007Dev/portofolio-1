"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <p className="text-base lg:text-lg">
          I am a vocational school student majoring in Software Engineering,
          with a strong interest in software development. I have experience
          working with several programming languages such as JavaScript, Python,
          HTML, and CSS. Additionally, I am familiar with frameworks like Vue,
          React, and Laravel. I am a quick learner and always eager to expand my
          knowledge and skills. I am a team player and excited to collaborate
          with others to create amazing applications.
        </p>

        <li>Node.js</li>
        <li>Python</li>
        <li>Vue</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    )
  },
  {
    title: "unk",
    id: "unk",
    content: (
      <ul className="list-disc pl-2">
        <li>...</li>
        <li>...</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/nazar.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Nazar{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Feodora{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              unk{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("unk")}
              active={tab === "unk"}
            >
              {" "}
              Daffa{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
