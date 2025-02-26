"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link"; // Import Link for navigation

const TAB_DATA = [
  {
    title: "Nazar",
    id: "skills",
    image: "/images/nazar.jpg",
    content: (
      <div>
        <p className="text-base lg:text-lg">
          I am a vocational school student majoring in Software Engineering,
          with a strong interest in software development. I have experience
          working with several programming languages such as JavaScript, Python,
          HTML, and CSS. Additionally, I am familiar with frameworks like Vue,
          React, and Laravel. I am a quick learner and always eager to expand my
          knowledge and skills. I am a team player and excited to collaborate
          with others to create amazing applications.
        </p>
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Python</li>
          <li>Vue</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <div className="socials flex flex-row gap-4 mt-4">
          <Link href="https://github.com/Nazar2007Dev" passHref>
            <Image
              src="/images/github-icon.svg"
              alt="GitHub"
              width={45}
              height={45}
            />
          </Link>
          <Link href="http://www.instagram.com/nazarrr__7" passHref>
            <Image
              src="/images/ig.png"
              alt="Instagram"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    )
  },
  {
    title: "Feodora",
    id: "education",
    image: "/images/feo.jpeg",
    content: (
      <div>
        <p>Clarissa Feodora Tanjaya</p>
        <p>Student | SMK Pariwisata Metland School | IT Major</p>
        <br />
        <p>
          I have a strong passion for web development, with experience in HTML,
          CSS, Kotlin, and Python. While I enjoy designing more than coding, I’m
          always eager to learn and explore new technologies. I love
          experimenting with creative ideas and finding ways to make websites
          both visually appealing and functional.
        </p>
        <br />
        <p>
          In addition to my technical skills, I have a strong command of English
          and take great pride in my proficiency. My fluency allows me to
          communicate effectively and engage with a wide range of content,
          making learning and collaboration easier.
        </p>
        <br />
        <ul className="list-disc pl-2">
          <li>Figma</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>Kotlin</li>
        </ul>
        <div className="socials flex flex-row gap-4 mt-4">
          <Link href="https://github.com/yoamiw" passHref>
            <Image
              src="/images/github-icon.svg"
              alt="GitHub"
              width={45}
              height={45}
            />
          </Link>
        </div>
      </div>
    )
  },
  {
    title: "Daffa",
    id: "certifications",
    image: "/images/daffa.jpeg",
    content: (
      <div>
        <p>
          IM Muhammad Daffa Habibi Harahap, a vocational high school student
          majoring in Visual Communication Design (DKV). My focus is on
          illustration, animation, motion graphics, and graphic design, where I
          explore various techniques and styles to create visual content.
        </p>
        <ul className="list-disc pl-2">
          <li>Adobe Illustrator</li>
          <li>Adobe After Effects</li>
          <li>Adobe Premiere</li>
          <li>Adobe Photoshop</li>
          <li>Clip Studio Paint</li>
          <li>Canva</li>
        </ul>
        <div className="socials flex flex-row gap-4 mt-4">
          <Link href="https://instagram.com/lemonteaweirdo" passHref>
            <Image
              src="/images/ig.png"
              alt="Instagram"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    )
  },
  {
    title: "Sheira",
    id: "unk",
    image: "/images/sheira.jpeg",
    content: (
      <div>
        <p>
          I am a student from Metland School, majoring in Accounting. I have a
          passion to further explore the fields of finance or taxation. On the
          other hand, I have a passion for traditional dance, and I find it
          enjoyable to learn about various dances from different regions.
          Additionally, I have participated in aritmetika competitions and have
          received several awards and achieved a Grade 1 result.
        </p>
        <div className="socials flex flex-row gap-4 mt-4">
          <Link
            href="https://www.instagram.com/seraa_ca?igsh=MXh5YmNjNzRna2lvbQ=="
            passHref
          >
            <Image
              src="/images/ig.png"
              alt="Instagram"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
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
        {/* Dynamically change the image based on selected tab */}
        <Image
          src={
            TAB_DATA.find((t) => t.id === tab)?.image || "/images/default.jpg"
          }
          width={500}
          height={500}
          alt="Profile"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>

          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
