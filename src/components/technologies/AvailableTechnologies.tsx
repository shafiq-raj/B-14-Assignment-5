import { LiaStarSolid } from "react-icons/lia";

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
}

const AvailableTechnologies = ({
  technologies,
}: AvailableTechnologiesProps) => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="card w-full bg-base-100 border border-base-200 shadow-sm
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Top Section */}
            <div className="flex items-center justify-between px-6 pt-6">
              {/* Technology Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-base-200">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-9 w-9 object-contain"
                />
              </div>

              {/* Badge */}
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {technology.badge}
              </span>
            </div>

            {/* Card Body */}
            <div className="card-body">

              {/* Technology Name */}
              <h2 className="text-2xl font-bold tracking-tight">
                {technology.name}
              </h2>

              {/* Description */}
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                {technology.description}
              </p>

              {/* Technology Info */}
              <div className="mt-5 grid grid-cols-3 items-center border-y border-base-200 py-4">

                {/* Category */}
                <div className="text-left">
                  <span className="rounded-full bg-base-200 px-3 py-1.5 text-xs font-semibold">
                    {technology.category}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="text-center">
                  <span className="text-xs font-semibold text-purple-500">
                    {technology.difficulty}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-end gap-0.5">
                  <LiaStarSolid className="shrink-0 text-xl text-yellow-400" />
                  <span className="text-sm font-bold">
                    {technology.rating}
                  </span>
                </div>
              </div>

              {/* Add Button */}
              <button
                className="mt-2 w-full rounded-xl bg-black py-3 text-sm font-semibold
                           text-white transition-all duration-300
                           hover:bg-gray-800 active:scale-[0.98]"
              >
                Add To Stack
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableTechnologies;
