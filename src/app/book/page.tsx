
import { Animated } from "@/components/Animated";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Lock, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const otaPartners = [
  {
    name: "Booking.com",
    description: "Great deals on hotels, homes, and more...",
    logo: "Booking.com",
    url: "https://www.booking.com/hotel/in/nirvanica-retreat-wayanad.html",
  },
  {
    name: "MakeMyTrip",
    description: "India's leading player for online travel bookings.",
    logo: "MakeMyTrip",
    url: "https://www.makemytrip.com/hotels/nirvanica_retreat_wayanad-details-wayanad.html",
  },
  {
    name: "Goibibo",
    description: "Get cheapest hotel deals for your trip.",
    logo: "Goibibo",
    url: "https://www.goibibo.com/hotels/nirvanica-retreat-wayanad-hotel-in-wayanad-4383590223402625295/",
  },
  {
    name: "Agoda",
    description: "Book hotels, flights, and activities.",
    logo: "Agoda",
    url: "https://www.agoda.com/en-in/nirvanica-retreat-h81188163/hotel/tariyod-in.html",
  },
  {
    name: "TripAdvisor",
    description: "Reviews and advice on hotels, resorts, flights.",
    logo: "TripAdvisor",
    url: "https://www.tripadvisor.in/Hotel_Review-g2295130-d34060795-Reviews-Nirvanica_Retreat_Banasura_Dam-Vythiri_Wayanad_District_Kerala.html",
  },
  {
    name: "Skyscanner",
    description: "Compare cheap flights, hotels & car rental.",
    logo: "Skyscanner",
    url: "https://www.skyscanner.co.in/hotels/india/tariyod-hotels/nirvanica-retreat-wayanad/ht-225005890",
  },
  {
    name: "Ticket.com",
    description: "Book your hotel for the best price.",
    logo: "Ticket.com",
    url: "https://www.tiket.com/en-my/hotel/india/nirvanica-retreat-banasura-dam-811001763249622927",
  },
  {
    name: "Justdial",
    description: "India's No. 1 local search engine.",
    logo: "Justdial",
    url: "https://www.justdial.com/Wayanad/Nirvanica-Retreat/9999P4936-4936-251207095224-M2U9_BZDET",
  },
];

export default function BookPage() {
  return (
    <>
      <section
        className="relative py-32 sm:py-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/KpwfhTXv/firosnv-photography-fu-Esz-HF4uf-A-unsplash.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Animated>
            <h1 className="text-4xl md:text-5xl font-bold font-body text-shadow-lg">
              Reserve <br />
              <em className="font-headline">Your Stay</em>
            </h1>
          </Animated>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Animated>
              <div className="space-y-8">
                <div className="text-left">
                  <h2 className="text-4xl md:text-5xl font-body text-primary">
                    About our <br />
                    <em className="font-headline">retreat and philosophy</em>
                  </h2>
                </div>
                <div className="space-y-6 text-foreground/80 text-left">
                  <p>
                    Every stay at Nirvanica is shaped by a deep respect for nature
                    and a pursuit of quiet luxury. Thoughtfully designed spaces
                    blend seamlessly into Wayanad’s lush landscape, creating an
                    environment where comfort feels effortless and time slows down
                    naturally.
                  </p>
                  <p>
                    Surrounded by mist-covered hills and evergreen forests,
                    Nirvanica brings together mindful architecture, warm
                    hospitality, and the calming rhythm of nature — offering an
                    escape that feels personal, immersive, and deeply restorative.
                  </p>
                </div>
              </div>
            </Animated>
            <Animated animation="scale-in" delay={200}>
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="A person relaxing by a pool"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  data-ai-hint="person relaxing"
                />
              </div>
            </Animated>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Animated className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-body text-primary">
              Book with <br />
              <em className="font-headline">Our Official Partners</em>
            </h2>
          </Animated>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otaPartners.map((partner, index) => (
              <Animated
                key={partner.name}
                delay={index * 100}
                animation="fade-in-up"
              >
                <Card className="group flex flex-col justify-between bg-card border-border/50 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-bold font-headline text-primary">
                      {partner.logo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
                    <p className="text-muted-foreground text-sm mb-6">
                      {partner.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Link href={partner.url} target="_blank">
                        Book Now <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
          <Animated className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/50 px-4 py-2 border">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground font-medium">
                All bookings are securely handled by our official partners.
              </p>
            </div>
          </Animated>
        </div>
      </section>

      <section
        id="contact-us"
        className="relative py-24 sm:py-32 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animated>
            <h2 className="text-4xl md:text-5xl font-body text-shadow-lg text-white">
              Plan your <br />
              <em className="font-headline">Unforgettable Experience</em>
            </h2>
            <p className="mt-4 text-xl font-semibold text-shadow">
              Book Your Stay Now
            </p>
          </Animated>
          <Animated delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+919961606077"
                  className="text-lg font-medium hover:underline"
                >
                  +91 99616 06077
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+918606077560"
                  className="text-lg font-medium hover:underline"
                >
                  +91 86060 77560
                </a>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </>
  );
}
