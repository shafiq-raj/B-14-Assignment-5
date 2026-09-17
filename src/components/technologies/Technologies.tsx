import { use, useState } from "react";
import AvailableTechnologies from "./AvailableTechnologies";
import YourStack from "../YourStack";
import type { Technology } from "./AvailableTechnologies";

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({
  technologiesPromise,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  return (
    <section className="container mx-auto px-4 py-10 max-w-5xl">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Pick the technologies you love and build your perfect stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

        {/* Technology Cards */}
        <div className="lg:col-span-3">
          <AvailableTechnologies
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-1">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>

      </div>
    </section>
  );
};

export default Technologies;