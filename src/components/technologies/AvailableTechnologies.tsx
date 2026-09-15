import React from "react";

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
    <div>
      <div className="mx-auto max-w-5xl my-8">
        {technologies.map((technology) => {
          return (
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src={technology.icon}
                  alt="Icon" className="h-[40px] w-[40px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {technology.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  {technology.description}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{technology.badge}</div>
                  <div className="badge badge-outline">{technology.category}</div>
                  <div className="badge badge-outline">{technology.difficulty}</div>
                  <div className="badge badge-outline">{technology.rating}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableTechnologies;
