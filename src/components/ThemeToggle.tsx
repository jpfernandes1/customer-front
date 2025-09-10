"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const hasDark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", hasDark);
    setIsDark(hasDark);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const nowDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded bg-surface transition"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}