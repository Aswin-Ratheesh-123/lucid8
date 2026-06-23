"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050816] text-white px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center"
      >

        {/* SMALL TITLE */}
        <p className="text-cyan-400 uppercase tracking-[5px] mb-6">

          Lucid8 Technologies

        </p>

        {/* MAIN HEADING */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Innovative IT Solutions
          <br />

          For Modern Businesses

        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 text-gray-300 text-lg md:text-xl leading-8 max-w-3xl mx-auto">

          Lucid8 is a technology company delivering
          reliable IT services, cybersecurity solutions,
          and software testing services to help businesses
          grow securely and efficiently in the digital world.

        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          <Link href="/services">

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition">

              Our Services

            </button>

          </Link>

          <Link href="/contact">

            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition">

              Contact Us

            </button>

          </Link>

        </div>

      </motion.div>

    </section>
  );
}