import toast from "react-hot-toast";
import { FaStar, FaCheck } from "react-icons/fa";

export interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface AvailableTechnologiesProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<Technology[]>
  >;
}

const AvailableTechnologies = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: AvailableTechnologiesProps) => {
  const handleAddToStack = (technology: Technology) => {
    const alreadyExists = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) return;

    setSelectedTechnologies((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {
        const isSelected = selectedTechnologies.some(
          (item) => item.id === technology.id
        );

        return (
          <div
            key={technology.id}
            className={`flex flex-col justify-between rounded-[24px] border p-6 shadow-sm transition-colors ${
              isSelected
                ? "border-red-500"
                : "border-gray-100 bg-white"
            }`}
          >
            <div>
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
                  {technology.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="mt-5 text-xl font-bold text-gray-900">
                {technology.name}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {technology.description}
              </p>
            </div>

            <div>
              {/* Metadata Row */}
              <div className="mt-6 flex items-center justify-between text-xs font-medium text-gray-500">
                <span className="rounded-md bg-gray-50 px-2.5 py-1.5 text-gray-600">
                  {technology.category}
                </span>

                <span>{technology.difficulty}</span>

                <div className="flex items-center gap-1.5">
                  <FaStar className="text-amber-400 text-sm" />
                  <span className="font-semibold text-gray-900 text-sm">
                    {technology.rating}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                disabled={isSelected}
                onClick={() => handleAddToStack(technology)}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition ${
                  isSelected
                    ? "cursor-not-allowed bg-gray-200 text-red-500"
                    : "bg-[#0b0f19] text-white hover:bg-gray-800"
                }`}
              >
                {isSelected ? (
                  <>
                    <FaCheck className="text-xs" />
                    <span>Added to Stack</span>
                    
                  </>
                ) : (
                  "Add to Stack"
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableTechnologies;