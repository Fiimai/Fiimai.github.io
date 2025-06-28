"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const peelVariants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);

  // For demonstration, auto-hide after 3s to show peel effect
  // Remove this in production, or trigger on scroll/navigation
  useEffect(() => {
    // setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          suppressHydrationWarning
          className="relative overflow-hidden py-20 md:py-32"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={peelVariants}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-white to-white opacity-70 dark:from-purple-950 dark:via-zinc-900 dark:to-zinc-900 dark:opacity-90" />

          {/* Blob Shape */}
          <motion.div
            className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-violet-300/30 to-purple-100/30 blur-3xl dark:from-violet-700/20 dark:to-purple-900/20"
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : -20,
              scale: isVisible ? 1 : 0.95,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                DHD Bia East
              </motion.h1>

              <motion.p
                className="mb-8 max-w-2xl text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Promoting Health in Bia East District, Western North, Ghana.
                Discover our services, facilities, and community health initiatives
                in pictures and videos.
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <Button size="lg" className="gap-2">
                  Explore Our Services <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Directorate
                </Button>
              </motion.div>
            </div>

            {/* Gallery Preview */}
            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 40,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border shadow-lg">
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-4">
                  {/* Gallery Preview */}
                  <div className="grid h-full grid-cols-4 gap-2">
                    <div className="h-full w-full rounded-md bg-zinc-200 dark:bg-zinc-700" />
                    <div className="h-full w-full rounded-md bg-zinc-200 dark:bg-zinc-700" />
                    <div className="h-full w-full rounded-md bg-zinc-200 dark:bg-zinc-700" />
                    <div className="h-full w-full rounded-md bg-zinc-200 dark:bg-zinc-700" />
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white shadow-md">
                    Explore Our Health Initiatives
                  </h3>
                  <Link href="/gallery">
                    <Button variant="secondary" size="lg" className="mt-4 gap-2">
                      View Gallery <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Featured Facilities */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            >
              <p className="mb-8 text-lg text-muted-foreground">
                Supervising 16 health facilities across Bia East District. Here are
                a few of them:
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {[
                  "Adabokrom CHPS",
                  "Ahenikrom CHPS",
                  "Asanteman CHPS",
                  "Camp 15 CHPS",
                  "Yawmatwa CHPS",
                  "Nkrankrom CHPS",
                ].map((facility) => (
                  <div
                    key={facility}
                    className="rounded-lg border bg-zinc-100 p-3 text-center text-sm font-medium dark:bg-zinc-800"
                  >
                    {facility}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
