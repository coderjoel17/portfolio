import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.theme === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
