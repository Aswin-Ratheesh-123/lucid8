import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl font-semibold tracking-tight">

              Lucid8

            </h2>

            <p className="mt-3 text-gray-600 max-w-md leading-7">

              Professional IT services, cybersecurity,
              and software solutions for modern businesses.

            </p>

          </div>

          {/* RIGHT SIDE LINKS */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">

            <Link
              href="/"
              className="hover:text-black transition"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="hover:text-black transition"
            >
              Services
            </Link>

            <Link
              href="/cybersecurity"
              className="hover:text-black transition"
            >
              Security
            </Link>

            <Link
              href="/testing"
              className="hover:text-black transition"
            >
              Testing
            </Link>

            <Link
              href="/contact"
              className="hover:text-black transition"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">

          © 2026 Lucid8 Technologies. All rights reserved.

        </div>

      </div>

    </footer>
  );
}