
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

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
              <h3 className="font-headline text-xl">Address</h3>
              <p className="mt-4 text-primary-foreground/80">
              Banasura Dam , Kuttiyamvayal, Padinjarathara, Kerala 673575
              </p>
            </div>
            <div>
              <h3 className="font-headline text-xl">Contact</h3>
              <div className="mt-4 space-y-2 text-primary-foreground/80">
                <p>Nirvanica.wayanad@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-xl">Explore</h3>
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
            <h3 className="font-headline text-xl">Legal</h3>
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

          {/* Social Media */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-xl">Stay connected</h3>
            <div className="flex items-center space-x-4 mt-4">
              <Link href="https://www.instagram.com/theofficial_nirvanica?igsh=MXNsajZqenE2emJjMg==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram className="h-6 w-6" strokeWidth={1.75} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.facebook.com/share/17ES2FFxgk/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook className="h-6 w-6" strokeWidth={1.75} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>© 2026 Nirvanica Retreat. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
