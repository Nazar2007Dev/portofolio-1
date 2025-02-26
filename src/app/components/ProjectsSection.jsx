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
    tag: ["All", "Nazar"],
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
    title: "Automatic Night Lamp",
    description: "A night lamp that will be activated by sound.",
    image: "/images/projects/9.jpeg",
    tag: ["All", "Feo"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id: 12,
    title: "Electronics AD",
    description: "An ad for electronics made in Adobe After Effects.",
    image: "/images/projects/10.png",
    tag: ["All", "Feo"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id: 13,
    title: "Private Web Design",
    description: "A private web design",
    image: "/images/projects/11.png",
    tag: ["All", "Feo"],
    gitUrl: "/",
    previewUrl: "/"
  },
  
  {
    id: 14,
    title: "Smart Home",
    description: "A project with my other friends, a house that contains AI technologies",
    image: "/images/projects/12.jpeg",
    tag: ["All", "Feo"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
  id: 15,
    title: "Invitation",
    description: "An E-invitation for a school event.",
    image: "/images/projects/13.png",
    tag: ["All", "Feo"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id: 16,
      title: "Music App Design",
      description: "A music app design made in figma",
      image: "/images/projects/14.png",
      tag: ["All", "Feo"],
      gitUrl: "/",
      previewUrl: "/"
    },

    {
      id: 17,
        title: "News App",
        description: "A news app for Metland School",
        image: "/images/projects/15.png",
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
  },

  //bagian sheira id nya dari 31-40

  {
    id: 31,
    title: "Beef-Filled Spring Rolls",
    description: "I'd like to introduce you to a delicious Indonesian snack, beef-filled spring rolls served with a savory sauce. These crispy spring rolls are filled with tender beef and served with a side of tangy sauce that complements the flavors perfectly. It's a popular snack in Indonesia, and once you try it, you'll understand why it's a favorite among locals and visitors alike.",
    image: "/images/projects/16.jpeg",
    tag: ["All", "Sheira"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id: 32,
    title: "Purple Sweet Potato Balls",
    description: "Indulge in the sweet delight of our Purple Sweet Potato Balls, coated in a crunchy breadcrumb layer and filled with a rich, velvety chocolate center. These bite-sized treats are a perfect blend of textures and flavors, with the natural sweetness of the purple sweet potato complemented by the decadence of the chocolate filling. A delightful dessert or snack that's sure to satisfy your sweet tooth!",
    image: "/images/projects/17.jpeg",
    tag: ["All", "Sheira"],
    gitUrl: "/",
    previewUrl: "/"
  },

  {
    id: 32,
    title: "Wins",
    description: "",
    image: "/images/projects/23.jpeg",
    tag: ["All", "Sheira"],
    gitUrl: "/",
    previewUrl: "/"
  }
  
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

  const shortenDescription = (project) => {
    if (tag === "All" && project.tag.includes("Sheira")) {
      return project.description.length > 100
        ? project.description.substring(0, 100) + "..."
        : project.description;
    }
    return project.description;
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Projects & Achievements
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
              description={shortenDescription(project)} // Use the shortenDescription function
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
