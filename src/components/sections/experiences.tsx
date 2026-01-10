
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    imageUrl: "https://i.ibb.co/k6D7Sq3N/unnamed-2.png",
    imageHint: "nature trek"
  },
  {
    title: "Serene Views",
    description:
      "From sunrise over the hills to sunset on Banasura Dam, the views here change with every hour.",
    imageUrl: "https://images.unsplash.com/photo-1623302485960-d61687113a11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
    imageHint: "serene view"
  },
  {
    title: "Campfire Evenings",
    description:
      "Gather for a memorable campfire under the stars, listening to the gentle sounds of nature.",
    imageUrl: "https://i.ibb.co/3mFcyXz3/Group-4.png",
    imageHint: "campfire evening"
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Curated Experiences
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Immerse yourself in activities that connect you with nature and
            local culture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card text-card-foreground border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={exp.imageUrl}
                  alt={exp.title}
                  fill
                  className="object-cover"
                  data-ai-hint={exp.imageHint}
                />
              </div>
              <CardContent className="text-center flex-grow flex flex-col justify-start p-6">
                <CardTitle className="mb-2 text-xl font-headline">
                  {exp.title}
                </CardTitle>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


