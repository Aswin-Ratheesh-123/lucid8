"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const whatsappNumber = "918921342411";

const products = [
  {
    title: "LucidAI Assistant",
    description:
      "AI chatbot that automates customer support, lead qualification and internal workflows.",
    image: "/products/assistant.jpg",
  },
  {
    title: "VisionIQ",
    description:
      "Computer vision platform for monitoring, inspection and intelligent automation.",
    image: "/products/vision.jpg",
  },
  {
    title: "Insight Analytics",
    description:
      "AI-driven analytics platform delivering actionable business intelligence and forecasting.",
    image: "/products/analytics.jpg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function AIProducts() {
  return (
    <section className="bg-[#f8f8f8] py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <motion.p
            variants={item}
            className="uppercase tracking-[4px] text-sm text-gray-500"
          >

            AI Products

          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-semibold mt-4 text-black"
          >

            Intelligent solutions built by Lucid8

          </motion.h2>

        </motion.div>

        {/* Slider */}

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          speed={900}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {products.map((product, index) => {

            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hello Lucid8,

I am interested in your ${product.title}.

Please share more details.`
            )}`;

            return (

              <SwiperSlide key={index}>

                <motion.div
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="group pb-10"
                >

                  {/* IMAGE */}

                  <div className="relative h-72 rounded-3xl overflow-hidden">

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      className="h-full w-full"
                    >

                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />

                    </motion.div>

                  </div>

                  {/* CONTENT */}

                  <div className="relative -mt-16 mx-5 rounded-3xl bg-white p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">

                    <h3 className="text-3xl font-semibold text-black">

                      {product.title}

                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">

                      {product.description}

                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-black transition-all duration-300 hover:gap-4"
                    >

                      Learn More

                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >

                        →

                      </motion.span>

                    </a>

                  </div>

                </motion.div>

              </SwiperSlide>

            );

          })}

        </Swiper>

      </div>

    </section>
  );
}