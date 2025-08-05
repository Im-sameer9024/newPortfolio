import { Calendar, MapPin } from "lucide-react";
import React, { cloneElement, JSX } from "react";

interface educationProps {
  education: {
    id: number;
    icon: JSX.Element;
    Course: string;
    College: string;
    Location: string;
    Duration: string;
    description: string;
  };
}

const EducationCard = ({ education }: educationProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-1 hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
      <p className="font-la-belleAurore text-sm md:text-lg">{"<Card>"}</p>

      <div className="max-w-md mx-auto p-4 ">
        {/* Header with Icon and Degree */}
        <div className="flex items-start gap-3 mb-4">
          <div className="flex-shrink-0">
            {cloneElement(education.icon, {
              className: "w-8 h-8 text-blue-600",
            })}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              {education.Course}
            </h2>
          </div>
        </div>

        {/* Institution Name */}
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          {education.College}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 font-medium">
            {education.Location}
          </span>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 font-medium">
            {education.Duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{education.description}</p>
      </div>
      <p className="font-la-belleAurore text-sm md:text-lg">{"<Card/>"}</p>

    </div>
  );
};

export default EducationCard;
