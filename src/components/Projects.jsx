import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Job Dashboard",
    description: "A responsive dashboard to track and filter job applications.",
    tech: "React, Tailwind, API",
    live: "https://job-dashboard-ruddy.vercel.app/dashboard",
    github: "https://github.com/coderjoel17/job-dashboard",
  },
  {
    title: "Group Battle Game",
    description: "A multiplayer-style browser game built with JavaScript.",
    tech: "HTML, CSS, JavaScript",
    live: "#",
    github: "#",
  },
  {
    title: "Interior Designer Website",
    description: "A modern responsive website for an interior design business.",
    tech: "HTML, CSS, Bootstrap",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup (important)
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Tech:</span> {project.tech}
              </p>

              <div className="mt-6 flex gap-4">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-black dark:text-white hover:underline"
                  >
                    Live Demo →
                  </a>
                )}

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
