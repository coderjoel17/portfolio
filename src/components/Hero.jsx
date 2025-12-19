import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const roles = ["Frontend Developer", "React Developer", "UI Engineer","Fresher"];

const Hero = () => {
  const roleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      roles.forEach((role) => {
        tl.to(roleRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        })
          .set(roleRef.current, {
            textContent: role,
          })
          .to(roleRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          })
          .to({}, { duration: 2 }); // pause between roles
      });
    });

    return () => ctx.revert(); // cleanup (important for React)
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
          Hi, I’m Joel Smith
        </h1>

        <h2
          ref={roleRef}
          className="mt-3 text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300"
        >
          Frontend Developer
        </h2>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          I build responsive, clean, and performance-focused web interfaces.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
