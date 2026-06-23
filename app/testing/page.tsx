const testingServices = [
  {
    title: "Manual Testing",
    description:
      "Comprehensive testing to ensure software quality and usability.",
  },
  {
    title: "Automation Testing",
    description:
      "Automated testing solutions for faster and reliable software delivery.",
  },
  {
    title: "Performance Testing",
    description:
      "Performance analysis for scalable and efficient applications.",
  },
  {
    title: "Security Testing",
    description:
      "Identify vulnerabilities and strengthen application security.",
  },
  {
    title: "API Testing",
    description:
      "Reliable API validation for performance and secure communication.",
  },
  {
    title: "Mobile App Testing",
    description:
      "Testing solutions for seamless mobile application performance.",
  },
  {
    title: "UI/UX Testing",
    description:
      "Improve usability and overall user experience across platforms.",
  },
  {
    title: "Regression Testing",
    description:
      "Ensure software stability after updates and feature changes.",
  },
  {
    title: "Compatibility Testing",
    description:
      "Cross-platform testing for browsers, devices, and operating systems.",
  },
];

export default function Testing() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 px-6">

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-6">

          Testing Services

        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">

          Reliable software testing for modern applications.

        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">

          Lucid8 provides testing solutions focused on
          software quality, reliability, security,
          and performance.

        </p>

      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto mt-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {testingServices.map((service, index) => (

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