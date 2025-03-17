"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { WorkExpcontents } from "@/data";

export default function WorkExp() {
    return (
        <TracingBeam className="px-6" >
            <h1 id="Experience" className="text-2xl text-center sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">Experience</h1>
            <div className="max-w-2xl mx-auto antialiased px-4 pt-4 relative">
                 {/* Internship Experience */}
                 <div className="mb-10">
    <h2 className="bg-black text-white rounded-full text-sm w-fit mb-2">
        October 25, 2024 – December 31, 2024
    </h2>
    <p className="text-2xl mb-4">
        AI & Full-Stack Developer Intern (Team Leader) – <a href="https://www.infosys.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">Infosys</a>
    </p>
    <div className="text-md text-gray-400 px-4 prose prose-sm dark:prose-invert">
        <div className="pl-4">
            <ul className="list-disc">
                <li>Led a team in developing an AI-powered Traffic Instructor System, combining Deep Learning & Full-Stack technologies</li>
                <li>Tech Stack Used: Next.js (Frontend), Django & SQL (Backend), YOLO (Deep Learning)</li>
                <li>Implemented YOLO-based object detection for real-time vehicle & pedestrian classification</li>
                <li>Built a SQL database using Django ORM to log and analyze traffic patterns</li>
                <li>Developed an interactive Next.js frontend for real-time traffic monitoring</li>
                <li>Integrated AI-driven analytics to optimize traffic control and reduce congestion</li>
            </ul>
        </div>
    </div>
</div>

                {/* Research Experience */}
                <div className="mb-10">
                    <h2 className="bg-black text-white rounded-full text-sm w-fit mb-2">
                        May, 2024 – September, 2024
                    </h2>
                    <p className="text-2xl mb-4">
                        Researcher – Artificial Intelligence
                    </p>
                    <div className="text-md text-gray-400 px-4 prose prose-sm dark:prose-invert">
                        <div className="pl-4">
                            <ul className="list-disc">
                                <li>Under the guidance of Dr. Shilpa Choudhary (Ph.D., Experienced Researcher with 40+ papers in SCOPUS, IEEE, Web of Science, and multiple patents)</li>
                                <li>Conducted research in Deep Learning, Machine Learning, and Generative AI, focusing on medical imaging and financial analytics.</li>
                                <li>Published Research Papers:
                                    <ul className="list-disc pl-4 mt-2">
                                        <li>Transforming Blood Cell Detection and Classification with Advanced Deep Learning Models: A Comparative Study (Published on <a href="https://arxiv.org/abs/2410.15670" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">arXiv</a>)</li>
                                        <li>Evaluating Machine Learning and Deep Learning Models for Accurate Stock Price Prediction (Presented at Microsoft CMT Conference)</li>
                                    </ul>
                                </li>
                                <li>Additional Research Projects:
                                    <ul className="list-disc pl-4 mt-2">
                                        <li>Bone Fracture Prediction using CNNs – Developed a Deep Learning model for detecting fractures from X-ray images</li>
                                        <li>EEG Brainwave Prediction for Emotion Recognition – Implemented ML & Generative AI models to analyze brainwave data and predict emotional states</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

               
            </div>
        </TracingBeam>
    );
}

