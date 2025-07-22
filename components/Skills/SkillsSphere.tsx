"use client"
import React, { useEffect } from 'react';
import "./Skills.css";

const SkillsSphere = () => {
  useEffect(() => {
    // Dynamically import to avoid SSR issues
    const loadTagCloud = async () => {
      try {
        const TagCloud = (await import('TagCloud')).default;
        const texts = [
          "HTML", "CSS", "JavaScript", "React", "Next.js",
          "Node.js", "Express.js", "MongoDB", "TypeScript",
          "Python", "Shadcn Ui", "Tailwind CSS", "Material Ui",
          "ES6", "Postgresql", "Bootstrap", "GIT", "Github"
        ];

        const options = {
          radius: 250, // Smaller radius for better fit
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true
        };
        
        TagCloud('.tagcloud', texts, options);
      } catch (error) {
        console.error("Error loading TagCloud:", error);
      }
    };

    loadTagCloud();

    return () => {
      const tagcloud = document.querySelector('.tagcloud');
      if (tagcloud) tagcloud.innerHTML = '';
    };
  }, []);

  return (
    <div className='text-sphere'>
      <span className='tagcloud'></span>
    </div>
  );
};

export default SkillsSphere;