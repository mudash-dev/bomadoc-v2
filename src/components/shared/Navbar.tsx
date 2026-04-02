"use client"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "../ui/button"
import { Stethoscope } from "lucide-react" // Logo placeholder

export function Navbar() {
    return (
      <nav className="sticky top-0 z-50 w-full bg-brand-blue shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
       
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg">
              {/* Icon is now Blue on a White square */}
              <Stethoscope className="text-brand-blue w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              BomaDoc<span className="text-white/70 text-sm font-normal ml-1">2.0</span>
            </span>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <div className="hidden md:flex items-center gap-3">
              <Link href="/sign-in">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Ingia (Login)
                </Button>
              </Link>
              <Link href="/sign-up">
                {/* Secondary/White button for contrast on the Blue Navbar */}
                <Button className="bg-white hover:bg-white/90 text-brand-blue shadow-sm px-6">
                  Jiunge (Register)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}