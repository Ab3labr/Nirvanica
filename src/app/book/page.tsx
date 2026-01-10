
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Lock, Phone } from "lucide-react";
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
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-shadow-lg">
            Reserve Your Stay
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90 text-shadow">
            Choose your preferred booking partner to secure your room at
            Nirvanica.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otaPartners.map((partner) => (
              <Card
                key={partner.name}
                className="group flex flex-col justify-between bg-card border-border/50 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold font-headline text-primary">
                    {partner.logo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
                  <p className="text-muted-foreground text-sm mb-6">
                    {partner.description}
                  </p>
                  <Button asChild variant="outline" className="w-full mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Link href={partner.url} target="_blank">
                      Book Now <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/50 px-4 py-2 border">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground font-medium">
                All bookings are securely handled by our official partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 sm:py-32 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612602129074-750ca2e55465?auto=format&fit=crop&q=80&w=1170')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-shadow-lg">
            Plan an Unforgettable Experience in Wayanad Today!
          </h2>
          <p className="mt-4 text-xl font-semibold text-shadow">
            Book Your Stay Now
          </p>
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
        </div>
      </section>
    </>
  );
}
