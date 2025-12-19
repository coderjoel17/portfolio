const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Frontend</h3>
            <ul className="text-gray-600 space-y-2">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Styling</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Mobile-First UI</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Tools</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>Vite</li>
              <li>Figma (Basics)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Concepts</h3>
            <ul className="text-gray-600 space-y-2">
              <li>SEO Basics</li>
              <li>Accessibility</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
