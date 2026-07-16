"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";


const whatsappNumber = "918921342411";

const products = [
  {
    title: "Customizable LMS",
    description:
      "A complete learning management platform for schools, colleges, training institutes and enterprises.",
    features: [
      "Live Classes",
      "Online Exams",
      "Certificates",
      "Student Dashboard",
    ],
    image: "/products/lms.jpg",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable multi-vendor marketplace with payments, inventory, order management and analytics.",
    features: [
      "Multi Vendor",
      "Inventory",
      "Payments",
      "Analytics",
    ],
    image: "/products/ecommerce.jpg",
  },
  {
    title: "POS System",
    description:
      "Cloud-based billing solution for retail stores with inventory and sales management.",
    features: [
      "Billing",
      "Inventory",
      "Reports",
      "Barcode",
    ],
    image: "/products/pos.jpg",
  },
  {
    title: "CRM Software",
    description:
      "Manage leads, customers and sales pipeline from one centralized platform.",
    features: [
      "Lead Tracking",
      "Sales",
      "Customers",
      "Reports",
    ],
    image: "/products/crm.jpg",
  },
  {
    title: "HR Management",
    description:
      "Attendance, payroll, leave management and employee performance in one solution.",
    features: [
      "Payroll",
      "Attendance",
      "Leave",
      "Recruitment",
    ],
    image: "/products/hrm.jpg",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ProductsSection() {
  return (
    <section className="bg-black py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[4px] text-sm text-gray-400">

            Our Products

          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4">

            Ready-to-deploy software products

          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">

            Enterprise software designed to accelerate
            digital transformation.

          </p>

        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
        >

          {products.map((product, index) => (

            <SwiperSlide key={index}>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="grid lg:grid-cols-2 gap-14 items-center"
              >

                {/* IMAGE */}

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[280px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                >

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />

                </motion.div>

                {/* CONTENT */}

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >

                  <span className="text-gray-500 text-lg">

                    0{index + 1}

                  </span>

                  <h3 className="text-4xl md:text-5xl font-semibold text-white mt-4">

                    {product.title}

                  </h3>

                  <p className="mt-8 text-lg leading-8 text-gray-300">

                    {product.description}

                  </p>

                  {/* FEATURES */}

                  <div className="grid grid-cols-2 gap-4 mt-10">

                    {product.features.map((feature, i) => (

                      <motion.div
                        key={feature}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: i * 0.12,
                        }}
                        className="border border-gray-700 rounded-full px-5 py-3 text-center text-gray-200 hover:border-white transition"
                      >

                        {feature}

                      </motion.div>

                    ))}

                  </div>

                  <a
  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Lucid8,

I am interested in your ${product.title}.

Please share more details and arrange a demo.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>

  <motion.button
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.97,
    }}
    className="mt-12 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
  >

    Request Demo

  </motion.button>

</a>

                </motion.div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}