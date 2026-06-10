import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("ptflash_theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      if (saved === "light") {
        document.body.classList.add("light");
      } else {
        document.body.classList.remove("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("ptflash_theme", next);
    if (next === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="theme-toggle flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] transition-colors hover:text-[var(--accent)] hover:border-[var(--accent)] cursor-pointer text-xs font-semibold"
    >
      {theme === "light" ? (
        <>
          <Moon className="w-3.5 h-3.5" />
          <span>Modo oscuro</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5" />
          <span>Modo claro</span>
        </>
      )}
    </button>
  );
}
