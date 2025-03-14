"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import AnimatedDiv from "./ui/AnimatedDiv";
import ProjectCard from "./ui/ProjectCard";

interface Props {
    projectList: Project[];
}

export interface Project {
    id: number;
    title: string;
    category: string;
    image: any;
    description: string;
    tech: (string | any)[];
    url?: string;
    github: string;
    detailedDescription?: string;
    features: string[];
}

const ProjectGrid = ({ projectList }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState("Full-Stack");
    const onCategoryChange = (category: string) => {
        setSelectedCategory(category);
    }
    const categories = Array.from(new Set(projectList.map((p) => p.category)));

    return (
        <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent rounded-none mb-6 justify-center">
                {categories.map((category, index) => (
                    <TabsTrigger
                        key={category}
                        className={`rounded-md px-4 py-2 text-sm sm:text-base transition-all duration-200 border 
                            ${selectedCategory == category 
                                ? 'bg-white text-black border-white' 
                                : 'border-gray-600 hover:border-gray-400'}`}
                        value={category}
                        onClick={() => onCategoryChange(category)}>
                        {category.toUpperCase()}
                    </TabsTrigger>
                ))}
            </TabsList>

            {categories.map((category) => (
                <TabsContent 
                    className="mt-8 transition-all duration-300" 
                    key={category} 
                    value={category}
                >
                    <AnimatedDiv ClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                        {projectList
                            .filter((p) => p.category === category)
                            .map((p) => (
                                <ProjectCard key={p.title} {...p} />
                            ))}
                    </AnimatedDiv>
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default ProjectGrid;