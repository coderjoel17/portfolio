import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg">Joel Smith</span>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <li><a href="#projects" className="hover:text-black dark:hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-black dark:hover:text-white">Skills</a></li>
            <li><a href="#about" className="hover:text-black dark:hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a></li>
          </ul>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
