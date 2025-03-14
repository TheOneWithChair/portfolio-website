import React from "react";
import { projectList } from "@/data";
import ProjectGrid from "@/components/ProjectGrid";

const Projects = () => {
    return (
        <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24" id="Projects">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-4">
                    Projects
                </h1>
                <p className="text-center text-lg sm:text-xl mb-12 font-bold text-gray-400">
                    - I&apos;ve built{" "}
                </p>

                <div className="mt-8">
                    <ProjectGrid projectList={projectList} />
                </div>
            </div>
        </div>
    );
};

export default Projects;