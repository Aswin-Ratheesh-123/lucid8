"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3 }}
      className="fixed top-5 left-0 w-full z-50 px-4 sm:px-6"
    >
      {/* Floating Navbar */}

      <nav className="max-w-6xl mx-auto rounded-full">

       <div className="flex items-center justify-between w-full px-2 sm:px-4 md:px-6 py-3">

          {/* Logo */}

          <Link href="/">

  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl shadow-lg hover:scale-105 transition">

    <Image
      src="/logo.png"
      alt="Lucid8"
      width={36}
      height={36}
      className="object-contain"
    />

  </div>

</Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link href="/" className="hover:text-gray-500 transition">
              Home
            </Link>

            <Link href="/services" className="hover:text-gray-500 transition">
              IT Services
            </Link>

            <Link
              href="/cybersecurity"
              className="hover:text-gray-500 transition"
            >
              Cybersecurity
            </Link>

            <Link href="/testing" className="hover:text-gray-500 transition">
              Testing
            </Link>

            <Link
              href="/contact"
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl shadow-lg hover:scale-105 transition"
>
  {menuOpen ? (
    <X size={26} className="text-black" />
  ) : (
    <Menu size={26} className="text-black" />
  )}
</button>

        </div>

      </nav>

      {/* Mobile Menu */}

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