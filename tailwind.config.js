module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f5f5f5',
          dark: '#0f172a'
        },
        foreground: {
          light: '#1f2937',
          dark: '#e5e7eb'
        },
        sidebar: {
          light: '#1e293b',
          dark: '#111827'
        },
        accent: {
          light: '#7c3aed',
          dark: '#a78bfa'
        },
        danger: {
          light: '#f97316',
          dark: '#fb923c'
        },
        surface: {
          light: '#ffffff',
          dark: '#1f2937'
        }
      }
    }
  }
}