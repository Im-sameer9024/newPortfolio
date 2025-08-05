"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <motion.div 
        className="h-48 relative"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.id <= 2} // Prioritize first two images
        />
      </motion.div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05
                }}
                viewport={{ once: true }}
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* View Project Button */}
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#EEA66B] text-white font-medium rounded-md hover:bg-[#e69550] transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4" />
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;