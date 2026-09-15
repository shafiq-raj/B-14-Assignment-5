import React, { use } from "react";
import type { Itechnologies } from "../../types/technologiesType";
import AvailableTechnologies from "./AvailableTechnologies";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  return (
    <div>
      <div className="mx-auto max-w-5xl my-2">
        <h1 className="font-inter text-3xl font-bold leading-tight ">
          Explore the
          
          <span className="font-inter bg-gradient-to-r from-red-600 to-blue-300 bg-clip-text text-transparent font-bold ml-2">
            Technologies
          </span>
        </h1>

    
        <p className="font-plus jakarta sans text-mauve-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <AvailableTechnologies technologies={technologies} />
    </div>
  );
};

export default Technologies;
