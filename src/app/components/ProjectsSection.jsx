"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Website for portofolio",
    image: "/images/projects/1.png",
    tag: ["All", "Nazar"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Figma Web design",
    description: "UI For e-commerce website Playstation Store",
    image: "/images/projects/2.png",
    tag: ["All", "Nazar"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Lays Chips adv Video",
    description: "Create f&b adv video using Adobe After Effect",
    image: "/images/projects/3.png",
    tag: ["All", "Nazar"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Flappy bee game",
    description: "A 2D game using construct 2",
    image: "/images/projects/5.jpg",
    tag: ["All", "Nazar"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "Led button controller",
    description: "App controller for on or off the led using mit app invertor",
    image: "/images/projects/6.png",
    tag: ["All", "Nazar"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 7,
    title: "Food And Beverages",
    description: "Website for ordering food in our school restaurant",
    image: "/images/projects/7.png",
    tag: ["All", "Nazar"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 8,
    title: "Education",
    description: "Website for studying in our school",
    image: "/images/projects/8.png",
    tag: ["All", "Nazar"],
    gitUrl: "/",
    previewUrl: "/"
  },
  // Bagian Feo id nya dari 11-20 ya
  {
    id: 11,
    title: "",
    description: "silahkan isi project nya feo",
    image: "/images/projects/.png",
    tag: ["All", "Feo"],
    gitUrl: "/",
    previewUrl: "/"
  },
  //bagian daffa id nya dari 21-30
  {
    id: 21,
    title: "Stationary Brand Identity",
    description: "description Project Daffa 1",
    image: "/images/projects/21.png",
    tag: ["All", "Daffa"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 22,
    title: "E-book Class Reflection",
    description: "description Project Daffa 2",
    image: "/images/projects/22.jpg",
    tag: ["All", "Daffa"],
    gitUrl: "/",
    previewUrl: "/"
  }

  //bagian sheira id nya dari 31-40
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nazar"
          isSelected={tag === "Nazar"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Feo"
          isSelected={tag === "Feo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Daffa"
          isSelected={tag === "Daffa"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Sheira"
          isSelected={tag === "Sheira"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
