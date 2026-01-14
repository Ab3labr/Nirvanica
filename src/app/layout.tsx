import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nirvanica Retreats",
  description:
    "Discover the perfect harmony of nature and comfort at Nirvanica — an escape into the lush landscapes of Wayanad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={cn("font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
