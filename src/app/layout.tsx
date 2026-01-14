"use client";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/layout/loading-screen";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Nirvanica Retreats</title>
        <meta
          name="description"
          content="Discover the perfect harmony of nature and comfort at Nirvanica — an escape into the lush landscapes of Wayanad."
        />
      </head>
      <body className={cn("font-body antialiased")}>
        <LoadingScreen show={isLoading} />
        {!isLoading && children}
        <Toaster />
      </body>
    </html>
  );
}
