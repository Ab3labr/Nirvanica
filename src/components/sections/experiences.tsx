
import { Animated } from "@/components/Animated";
import Image from "next/image";
import React from "react";

interface Experience {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

const experiences: Experience[] = [
  {
    title: "Nature Treks",
    description:
      "Explore Wayanad's wild beauty on our guided treks. Discover hidden waterfalls and experience nature up close.",
    imageUrl: "https://i.ibb.co/wNjSQCMd/nature-treks.jpg",
    imageHint: "nature trek"
  },
  {
    title: "Serene Views",
    description:
      "From sunrise over the hills to sunset on Banasura Dam, the views here change with every hour.",
    imageUrl: "https://i.ibb.co/8g26RxD5/serene-views.jpg",
    imageHint: "serene view"
  },
  {
    title: "Campfire Evenings",
    description:
      "Gather for a memorable campfire under the stars, listening to the gentle sounds of nature.",
    imageUrl: "https://i.ibb.co/fdhnKcGv/campfire-evenings.jpg",
    imageHint: "campfire evening"
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-body text-primary">
            Our curated <br />
            <em className="font-headline">Experiences for You</em>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Immerse yourself in activities that connect you with nature and
            local culture.
          </p>
        </Animated>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Animated
              key={index}
              delay={index * 150}
              className="flex flex-col text-left"
            >
              <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={exp.imageUrl}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={exp.imageHint}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-headline text-primary">
                  {exp.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{exp.description}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
