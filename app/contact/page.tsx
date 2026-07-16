"use client";

import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const whatsappLink = "https://wa.me/918921342411";

  return (
    <main className="min-h-screen bg-white text-black pt-28 pb-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center lg:text-left"
      >

        <p className="uppercase tracking-[4px] text-sm text-gray-500">

          Contact

        </p>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">

          Let's build something amazing together.

        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">

          Whether you need IT services,
          AI solutions,
          cybersecurity,
          or enterprise software,
          we're ready to help.

        </p>

        <a
          href="https://wa.me/918921342411"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
        >

          <MessageCircle size={22} />

          Chat on WhatsApp

        </a>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-5"
      >

        {/* Phone */}

        <div className="border border-gray-200 rounded-3xl p-6 flex items-center gap-5 hover:shadow-lg transition">

          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">

            <Phone size={24} />

          </div>

          <div>

            <h3 className="font-semibold text-lg">

              Phone

            </h3>

            <p className="text-gray-600 mt-1">

              +91 89213 42411

            </p>

          </div>

        </div>

        {/* WhatsApp */}

        <div className="border border-gray-200 rounded-3xl p-6 flex items-center gap-5 hover:shadow-lg transition">

          <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center">

            <MessageCircle size={24} />

          </div>

          <div>

            <h3 className="font-semibold text-lg">

              WhatsApp

            </h3>

            <p className="text-gray-600 mt-1">

              Quick replies within minutes.

            </p>

          </div>

        </div>

        {/* Email */}

        <div className="border border-gray-200 rounded-3xl p-6 flex items-center gap-5 hover:shadow-lg transition">

          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">

            <Mail size={24} />

          </div>

          <div>

            <h3 className="font-semibold text-lg">

              Email

            </h3>

            <p className="text-gray-600 mt-1 break-all">

              hrlucid8@gmail.com

            </p>

          </div>

        </div>

        {/* Working Hours */}

        <div className="border border-gray-200 rounded-3xl p-6 flex items-center gap-5 hover:shadow-lg transition">

          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">

            <Clock size={24} />

          </div>

          <div>

            <h3 className="font-semibold text-lg">

              Working Hours

            </h3>

            <p className="text-gray-600 mt-1">

              Monday – Friday<br />
              9:00 AM – 6:00 PM

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</main>
  );
}