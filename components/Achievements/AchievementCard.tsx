"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface AchievementCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link:string;
}

interface Achievement {
  certificateData: AchievementCardProps;
}

const AchievementCard = ({certificateData}:Achievement) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.1 }}
      className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="h-48 relative">
        <Image
          src={certificateData.image}
          alt={certificateData.title}
          fill
          priority
          className=" w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {certificateData.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {certificateData.description}
        </p>

        {/* View Project Button */}
        <Link
          href={certificateData.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#EEA66B] text-white font-medium rounded-md hover:bg-[#e69550] transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4" />
          View Certificate
        </Link>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
