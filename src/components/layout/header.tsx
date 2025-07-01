"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { motion } from "framer-motion";
import ghsLogo from "../../../images/ghs-official.png";

const facilitiesItems: { title: string; description: string }[] = [
  { title: "Kaase Health Centre", description: "Health Centre" },
  { title: "Amadu Nkwanta CHPS", description: "CHPS Compound" },
  { title: "Fosukrom CHPS", description: "CHPS Compound" },
  { title: "Kwasare CHPS", description: "CHPS Compound" },
  { title: "Asemnyinakrom Health Centre", description: "Health Centre" },
  { title: "Sebebia CHPS", description: "CHPS Compound" },
  { title: "Atuakrom CHPS", description: "CHPS Compound" },
  { title: "Arhinful CHPS", description: "CHPS Compound" },
  { title: "Amangoase CHPS", description: "CHPS Compound" },
  { title: "Massakrim CHPS", description: "CHPS Compound" },
  { title: "Asoredanho CHPS", description: "CHPS Compound" },
  { title: "Owonta CHPS", description: "CHPS Compound" },
  { title: "Camp Junction CHPS", description: "CHPS Compound" },
  { title: "Achiase CHPS", description: "CHPS Compound" },
  { title: "Kofi Yeboah CHPS", description: "CHPS Compound" },
  { title: "Camp 15 CHPS", description: "CHPS Compound" },
  { title: "Ahimakrom CHPS", description: "CHPS Compound" },
  { title: "Royal Christ Care Hospital", description: "Hospital" },
  { title: "Adabokrom Health Centre", description: "Health Centre" },
  // ...add up to 16 as needed
];

const servicesItems = [
  { title: "Maternal & Child Health", description: "Antenatal, postnatal, and child welfare services." },
  { title: "Immunization", description: "Routine and outreach immunization services." },
  { title: "Disease Surveillance", description: "Monitoring and reporting of communicable diseases." },
  { title: "Health Education", description: "Community health promotion and education." },
  { title: "Outpatient Services", description: "General medical consultations and care." },
  { title: "Laboratory Services", description: "Basic diagnostic and lab services." },
];

const aboutItems = [
  { title: "About DHD Bia East", description: "Learn about our mission and vision." },
  { title: "Leadership", description: "Meet our management and staff." },
  { title: "Community Initiatives", description: "Our outreach and public health programs." },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={ghsLogo}
              alt="Ghana Health Service Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary leading-tight">Bia East DHD</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 p-0">
                Facilities <ChevronDown className="h-4 w-4" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-xl border border-border/40 bg-background/80 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
              <div className="grid gap-4">
                {facilitiesItems.map((item) => (
                  <Link
                    key={item.title}
                    href="#"
                    className="group grid grid-cols-1 items-start gap-1 rounded-md p-2 hover:bg-muted"
                  >
                    <div className="font-medium group-hover:underline">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 p-0">
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-xl border border-border/40 bg-background/80 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
              <div className="grid gap-4">
                {servicesItems.map((item) => (
                  <Link
                    key={item.title}
                    href="#"
                    className="group grid grid-cols-1 items-start gap-1 rounded-md p-2 hover:bg-muted"
                  >
                    <div className="font-medium group-hover:underline">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>

          <Button variant="link" className="flex items-center gap-1 p-0">
            <Link href="/gallery">Gallery</Link>
          </Button>

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 p-0">
                About <ChevronDown className="h-4 w-4" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 rounded-xl border border-border/40 bg-background/80 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
              <div className="grid gap-4">
                {aboutItems.map((item) => (
                  <Link
                    key={item.title}
                    href="#"
                    className="group grid grid-cols-1 items-start gap-1 rounded-md p-2 hover:bg-muted"
                  >
                    <div className="font-medium group-hover:underline">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>

          <Button variant="link" className="flex items-center gap-1 p-0">
            <Link href="#">Contact</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="link" className="p-0">Patient Portal</Button>
            <Button variant="default">Emergency Contact</Button>
          </div>

          <ThemeToggle />

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="stripe-mobile-nav w-[85%] sm:w-[350px] dark:border-zinc-700 dark:bg-zinc-900/95">
              <div className="flex flex-col gap-6 py-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Facilities</h4>
                  {facilitiesItems.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      className="block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Services</h4>
                  {servicesItems.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      className="block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">About</h4>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      className="block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="space-y-4 pt-4 border-t dark:border-zinc-700">
                  <Link href="#" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Patient Portal
                  </Link>
                  <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                    Emergency Contact
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
