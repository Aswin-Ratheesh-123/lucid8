"use client";

import Link from "next/link";
import { motion,Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};


const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl lg:max-w-2xl text-left pt-24 lg:pt-0"
          >

            <motion.p
              variants={item}
              className="text-xs sm:text-sm uppercase tracking-[5px] text-gray-300"
            >
              Lucid8 Technologies
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white"
            >
              Building Secure
              <br />
              Digital Experiences
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-gray-200"
            >
              Delivering innovative software development,
              cybersecurity, cloud solutions, and testing
              services that help businesses innovate with confidence.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-start"
            >
              <Link href="/services">
                <button className="w-full sm:w-auto rounded-full bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-200">
                  Our Services
                </button>
              </Link>

              <Link href="/contact">
                <button className="w-full sm:w-auto rounded-full border border-white px-8 py-3 text-white transition hover:bg-white hover:text-black">
                  Contact Us
                </button>
              </Link>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>

    </section>
  );
}