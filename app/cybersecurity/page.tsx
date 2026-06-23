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

          {securityServices.map((service, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-8 hover:border-black transition duration-300"
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
              <p className="mt-5 text-gray-600 leading-8">

                {service.description}

              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}