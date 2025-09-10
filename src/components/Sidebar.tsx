"use client";

import { Home, Users, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Dashboard", href: "/Dashboard", icon: Home },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-sidebar text-foreground p-4 shadow-lg">
      {/* Logo */}
      <div className="mb-6 p-4 text-2xl font-bold border-b border-gray-700 text-[var(--sidebar-text)]">
        Customer Management
      </div>

      {/* Navegação */}
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map(({ name, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                active
                  ? "bg-accent text-white"
                  : "text-[var(--sidebar-text)] hover:bg-accent/20"
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              <span className="font-medium">{name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Separador */}
      <div className="border-t border-gray-700 mt-6" />

      {/* Logout + Theme Toggle */}
      <div className="mt-auto flex flex-col gap-3">
        <button className="bg-accent text-white rounded px-4 py-2 w-full hover:bg-accent/90 transition-colors duration-200">
          Logout
        </button>
        <ThemeToggle />
      </div>
    </aside>
  );
}