import { UserRound } from "lucide-react";

export default function Navbar() {
    return (
        <>
            <nav className="fixed h-18 top-0 left-64 right-0 bg-[var(--surface)] flex items-center px-6">
                <h1 className="text-lg font-semibold">Bem vindo ao CRM</h1>
                
                <div className="ml-auto flex items-center gap-2">
                    <input className="w-64 px-2 py-1 rounded border border-gray-300" placeholder="Buscar..." />
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:opacity-85">
                        <UserRound className="w-7 h-7 text-white" />
                    </div>
                </div>
            </nav>
        </>
    )
}
