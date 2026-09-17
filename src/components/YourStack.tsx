// import { X } from "lucide-react";
import { IoClose } from "react-icons/io5";
import type { Technology } from "./technologies/AvailableTechnologies";

interface YourStackProps {
  selectedTechnologies: Technology[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const YourStack = ({selectedTechnologies,setSelectedTechnologies,}: YourStackProps) => {
  // Remove one technology
  const handleRemove = (id: number) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id),
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>

        <p className="mt-1 text-xs text-gray-400">
          {selectedTechnologies.length} Technology
          {selectedTechnologies.length !== 1 && "ies"} Selected
        </p>
      </div>

      {/* Selected Technologies */}
      <div className="space-y-2">
        {selectedTechnologies.length > 0 ? (
          selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2"
            >
              {/* Left side */}
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-6 w-6 object-contain"
                />

                <div>
                  <h3 className="text-xs font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-[9px] text-gray-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => handleRemove(technology.id)}
                className="p-1 rounded-full hover:bg-red-100 transition"
              >
                <IoClose className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </button>
              {/* <button
                onClick={() => handleRemove(technology.id)}
                className="text-gray-400 transition hover:text-red-500"
              >
                <X size={16} />
              </button> */}
            </div>
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 py-6 text-center">
            <p className="text-xs text-gray-400">No technology selected</p>
          </div>
        )}
      </div>

      {/* Remove All */}
      {selectedTechnologies.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-300 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
