import React from "react";
import WorkExperienceTimeline from "./WorkExperienceTimeline";

const Experience = () => {
  return (
    <div className="w-11/12 md:w-10/12 flex flex-col mt-8 md:mt-16 mx-auto h-auto">
      {/*--------- heading section ---------- */}
      <div>
        <p className="font-la-belleAurore text-sm md:text-lg">{"<h1>"}</p>
        <div className="w-fit space-y-1">
          <h3 className="font-righteous text-3xl md:text-5xl whitespace-nowrap">
            Work Experience
          </h3>
          <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
        </div>
        <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">{"</h1>"}</p>
      </div>

      {/*------------ work experience timeline ------------- */}
      <div className="w-full mt-6 md:mt-8">
        <WorkExperienceTimeline/>
      </div>
    </div>
  );
};

export default Experience;