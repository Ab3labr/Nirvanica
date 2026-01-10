
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#dining", label: "Dining" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const logoDefault = "https://i.ibb.co/cS57kYym/Group-3-removebg-preview.png";
const logoScrolled = "https://i.ibb.co/HfmzRsFn/nirvanica-logo-2-green-no-bg.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#faf3e9]/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? logoScrolled : logoDefault}
              alt="Nirvanica Logo"
              width={144}
              height={40}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "transition-colors font-medium",
                    isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button
              asChild
              className={cn(
                "transition-colors",
                isScrolled
                  ? "bg-[#15272c] text-white hover:bg-[#15272c]/90"
                  : "bg-white text-[#15272c] hover:bg-white/90"
              )}
            >
              <Link href="/book">Book a Stay</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white hover:text-white/80 hover:bg-white/10")}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <Link
                      href="/"
                      className="flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src={logoScrolled}
                        alt="Nirvanica Logo"
                        width={150}
                        height={40}
                        className="object-contain"
                      />
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4 p-4 mt-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg text-foreground/80 hover:text-primary transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button asChild size="lg" className="mt-4">
                      <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>Book a Stay</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
