"use client"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "../ui/button"
import { Stethoscope } from "lucide-react" // Logo placeholder

export function Navbar() {

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
       
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Stethoscope className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand">
            BomaDoc<span className="text-foreground/70 text-sm font-normal ml-1">2.0</span>
          </span>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" className="text-medical-slate">Ingia (Login)</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-brand hover:bg-brand/90 text-white shadow-md">
                Jiunge (Register)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
}