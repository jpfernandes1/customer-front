import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Customer Management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="transition-colors duration-300">
      <body className="flex bg-background text-foreground font-sans">
        <Sidebar />
        <Navbar />
        <main className="ml-64 pt-25 flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}