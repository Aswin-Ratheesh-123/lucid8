import Link from "next/link";
import Hero from "@/components/Hero";
export default function Home() {

  const services = [
    {
      title: "IT Solutions",
      description:
        "Modern software, cloud, and enterprise technology solutions.",
      link: "/services",
    },
    {
      title: "Cybersecurity",
      description:
        "Advanced digital protection for modern businesses and systems.",
      link: "/cybersecurity",
    },
    {
      title: "Testing Services",
      description:
        "Automation, performance, and software quality assurance testing.",
      link: "/testing",
    },
  ];

  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      

      {/* HERO SECTION */}
     <section className="min-h-screen flex items-center bg-white text-black px-6">

  <div className="max-w-7xl mx-auto w-full">

    <div className="max-w-4xl">

      {/* SMALL LABEL */}
      <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-6">

        Lucid8 Technologies

      </p>

      {/* MAIN HEADING */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">

        Building secure and scalable digital solutions.

      </h1>

      {/* DESCRIPTION */}
      <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">

        IT services, cybersecurity, and software testing
        solutions for modern businesses.

      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-wrap gap-4">

        <Link href="/services">

          <button className="bg-black text-white px-7 py-3 rounded-full hover:bg-gray-800 transition">

            Services

          </button>

        </Link>

        <Link href="/contact">

          <button className="border border-black px-7 py-3 rounded-full hover:bg-black hover:text-white transition">

            Contact

          </button>

        </Link>

      </div>

    </div>

  </div>

</section>
      {/* SERVICES SECTION */}
     <section className="max-w-7xl mx-auto px-6 py-28 bg-white text-black">

  {/* TITLE */}
  <div className="text-center mb-20">

    <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-5">

      Services

    </p>

    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">

      What we provide.

    </h2>

    <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-8">

      Professional digital solutions designed
      for modern businesses and enterprises.

    </p>

  </div>

  {/* SERVICE GRID */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {services.map((service, index) => (

      <div
        key={index}
        className="border border-gray-200 rounded-3xl p-8 hover:border-black transition duration-300 bg-white"
      >

        {/* NUMBER */}
        <p className="text-sm text-gray-400 mb-6">

          0{index + 1}

        </p>

        {/* TITLE */}
        <h3 className="text-2xl font-semibold tracking-tight">

          {service.title}

        </h3>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-600 leading-8">

          {service.description}

        </p>

        {/* LINK */}
        <Link href={service.link}>

          <button className="mt-8 text-black font-medium hover:underline">

            View Service

          </button>

        </Link>

      </div>

    ))}

  </div>

</section>

      {/* BOTTOM CTA */}
      <section className="px-6 pb-28 bg-white text-black">

  <div className="max-w-5xl mx-auto border border-gray-200 rounded-3xl p-10 sm:p-16 text-center">

    {/* SMALL LABEL */}
    <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-6">

      Get Started

    </p>

    {/* HEADING */}
    <h2 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">

      Let’s build your next digital solution.

    </h2>

    {/* DESCRIPTION */}
    <p className="mt-6 text-gray-600 text-lg leading-8 max-w-2xl mx-auto">

      Lucid8 delivers scalable IT services,
      cybersecurity, and software solutions
      for modern businesses.

    </p>

    {/* BUTTON */}
    <Link href="/contact">

      <button className="mt-10 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">

        Contact Us

      </button>

    </Link>

  </div>

</section>

    </main>
  );
}