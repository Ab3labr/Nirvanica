"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const logoScrolled = "https://i.ibb.co/HfmzRsFn/nirvanica-logo-2-green-no-bg.png";

interface LoadingScreenProps {
  show: boolean;
}

export default function LoadingScreen({ show }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="animate-pulse">
        <Image
          src={logoScrolled}
          alt="Nirvanica Logo"
          width={180}
          height={50}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
