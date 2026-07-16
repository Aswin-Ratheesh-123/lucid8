"use client";

const securityServices = [
  {
    title: "Penetration Testing",
    description:
      "Identify vulnerabilities and security risks in applications and systems.",
  },
  {
    title: "Threat Monitoring",
    description:
      "Continuous monitoring and detection of suspicious digital activities.",
  },
  {
    title: "Network Security",
    description:
      "Protect infrastructure using advanced network security solutions.",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Analyze systems and applications to identify security weaknesses.",
  },
  {
    title: "Cloud Security",
    description:
      "Secure cloud platforms, servers, and enterprise infrastructure.",
  },
  {
    title: "Security Auditing",
    description:
      "Comprehensive security audits for compliance and risk management.",
  },
];

const whatsappNumber = "918921342411";

export default function Cybersecurity() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 px-6">

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-6">
          Cybersecurity
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Security solutions for modern businesses.
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
          Lucid8 provides reliable cybersecurity services
          designed to protect businesses, systems,
          and digital infrastructure.
        </p>

      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto mt-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {securityServices.map((service, index) => {

            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hello Lucid8,

I am interested in your ${service.title} service.

Please share more details.`
            )}`;

            return (

              <div
                key={index}
                className="group border border-gray-200 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-black"
              >

                {/* NUMBER */}
                <p className="text-sm text-gray-400 mb-6">
                  0{index + 1}
                </p>

                {/* TITLE */}
                <h2 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-5 text-gray-600 leading-8 flex-grow">
                  {service.description}
                </p>

                {/* LEARN MORE */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-black transition-all duration-300 group-hover:gap-3"
                >
                  Learn More

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>

                </a>

              </div>

            );

          })}

        </div>

      </section>

    </main>
  );
}