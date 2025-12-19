const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m Joel 👋 <br />
          <span className="text-gray-600">Frontend Developer</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          I build responsive, clean, and performance-focused web interfaces.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
