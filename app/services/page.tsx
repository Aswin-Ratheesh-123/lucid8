const services = [
  {
    title: "Web Development",
    description:
      "Responsive websites and scalable web applications for businesses.",
  },
  {
    title: "Mobile Applications",
    description:
      "Modern Android and iOS applications with seamless user experience.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure, deployment, and maintenance services.",
  },
  {
    title: "Cybersecurity",
    description:
      "Advanced security solutions for protecting systems and data.",
  },
  {
    title: "Software Testing",
    description:
      "Reliable testing services for performance, security, and quality.",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean and user-focused digital product design solutions.",
  },
  {
    title: "DevOps Services",
    description:
      "Automation, deployment pipelines, and infrastructure management.",
  },
  {
    title: "AI Solutions",
    description:
      "AI-powered automation and intelligent business solutions.",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic consulting services for digital business transformation.",
  },
];

const whatsappNumber = "918921342411";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 px-6">

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-6">
          IT Services
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Technology solutions built for modern businesses.
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
          Lucid8 delivers scalable digital solutions,
          software services, and enterprise technology
          support for growing businesses.
        </p>

      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto mt-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {

            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hello Lucid8,%0A%0AI am interested in your *${service.title}* service.%0APlease share more details.`
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

                {/* BUTTON */}
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