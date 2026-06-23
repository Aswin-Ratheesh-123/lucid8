"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-gray-800 rounded-2xl p-8 backdrop-blur-md"
    >

      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        {title}
      </h2>

      <p className="text-gray-300 leading-7">
        {description}
      </p>

    </motion.div>
  );
}