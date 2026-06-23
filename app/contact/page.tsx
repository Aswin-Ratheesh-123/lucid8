import { MessageCircle, Phone } from "lucide-react";

export default function Contact() {

  const whatsappLink =
    "https://wa.me/918921342411";

  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 px-6">

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-6">

          Contact

        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">

          Let’s work together.

        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">

          Reach out to Lucid8 for IT services,
          cybersecurity solutions, and software support.

        </p>

      </section>

      {/* CONTACT CARD */}
      <section className="max-w-3xl mx-auto mt-24">

        <div className="border border-gray-200 rounded-3xl p-8 sm:p-12">

          <h2 className="text-2xl font-semibold tracking-tight mb-10">

            Get in touch

          </h2>

          <div className="space-y-10">

            {/* PHONE */}
            <div className="flex items-start gap-4">

              <Phone
                size={22}
                className="text-gray-500 mt-1"
              />

              <div>

                <h3 className="font-medium">

                  Phone

                </h3>

                <p className="mt-2 text-gray-600">

                  +91 89213 42411

                </p>

              </div>

            </div>

            {/* WHATSAPP */}
            <div className="flex items-start gap-4">

              <MessageCircle
                size={22}
                className="text-gray-500 mt-1"
              />

              <div>

                <h3 className="font-medium">

                  WhatsApp

                </h3>

                <p className="mt-2 text-gray-600">

                  Chat directly with our team.

                </p>

              </div>

            </div>

          </div>

          {/* BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            className="inline-block mt-12 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >

            Chat on WhatsApp

          </a>

        </div>

      </section>

    </main>
  );
}