import React from 'react';

export interface Technology{
    id: number,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: string
}

interface AvailableTechnologiesProps {
  technologies: Technology[];
}

const AvailableTechnologies = ({technologies}:AvailableTechnologiesProps) => {
    return <div>
        {
            technologies.map((technology)=>{
                    return <div>
                        {/* {technology.name} */}
                    </div>
            })
        }
        </div>
};

export default AvailableTechnologies;