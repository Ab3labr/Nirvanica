import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const exploreLinks = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#dining", label: "Dining" },
  { href: "#gallery", label: "Gallery" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center">
              <Image
                src="https://i.ibb.co/cS57kYym/Group-3-removebg-preview.png"
                alt="Nirvanica Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-bold font-headline text-lg">Address</h3>
              <p className="mt-4 text-primary-foreground/80">
              Banasura Dam , Kuttiyamvayal, Padinjarathara, Kerala 673575
              </p>
            </div>
            <div>
              <h3 className="font-bold font-headline text-lg">Contact</h3>
              <div className="mt-4 space-y-2 text-primary-foreground/80">
                <p>Nirvanica.wayanad@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold font-headline text-lg">Explore</h3>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-bold font-headline text-lg">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-bold font-headline text-lg">Newsletter</h3>
            <form className="mt-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-primary-foreground"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-primary-foreground/20"
                >
                  <ArrowRight className="h-4 w-4 text-primary-foreground" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>© 2026 Nirvanica Resorts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
