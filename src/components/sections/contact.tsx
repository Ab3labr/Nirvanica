"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // In a real app, you'd send this to a server
    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-body text-primary">
            Plan an <br />
            <em className="font-headline">Unforgettable Experience</em>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Reach out to our team to book your stay or to ask any questions you may have.
          </p>
           <Button asChild size="lg" className="mt-8">
              <Link href="/book">BOOK YOUR STAY NOW</Link>
            </Button>
        </div>
        <div id="contact-form" className="max-w-2xl mx-auto">
          <div className="space-y-8 mb-12">
            <h3 className="text-3xl font-body text-center text-primary">
              Get in <br/>
              <em className="font-headline">touch with us</em>
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-center sm:text-left">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-foreground/80">
                    Wayanad, Kerala, India
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-foreground/80">+91 987 654 3210</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-foreground/80">
                    reservations@nirvanica.com
                  </span>
                </div>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="How can we help you?"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
