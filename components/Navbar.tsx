"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  // SCROLL DETECTION
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > lastScrollY) {

        // scrolling down
        setShowNavbar(false);

      } else {

        // scrolling up
        setShowNavbar(true);

      }

      setLastScrollY(window.scrollY);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3 }}
      className="fixed top-5 left-0 w-full z-50 px-4 sm:px-6"
    >

      {/* FLOATING NAVBAR */}
      <nav className="max-w-6xl mx-auto bg-white text-black rounded-full border border-gray-200 shadow-xl">

        <div className="flex items-center justify-between px-6 py-2">

          {/* LOGO */}
          <Link href="/">

            <h1 className="text-2xl font-bold tracking-tight">

              Lucid8

            </h1>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link
              href="/"
              className="hover:text-gray-500 transition"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="hover:text-gray-500 transition"
            >
              IT Services
            </Link>

            <Link
              href="/cybersecurity"
              className="hover:text-gray-500 transition"
            >
              Cybersecurity
            </Link>

            <Link
              href="/testing"
              className="hover:text-gray-500 transition"
            >
              Testing
            </Link>

            <Link
              href="/contact"
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >

            {menuOpen ? <X size={28} /> : <Menu size={28} />}

          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
          >

            <div className="flex flex-col p-6 text-black">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-100"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-100"
              >
                IT Services
              </Link>

              <Link
                href="/cybersecurity"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-100"
              >
                Cybersecurity
              </Link>

              <Link
                href="/testing"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-100"
              >
                Testing
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-black text-white text-center py-3 rounded-full"
              >
                Contact
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}