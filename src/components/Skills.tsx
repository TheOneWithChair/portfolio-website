/* eslint-disable @next/next/no-img-element */
"use client";
import { Tooltip } from "react-tooltip";
import styles from "@/utils/skills.module.css";

interface Props {
  skill: {
    url: string;
    name: string;
  };
}

const Skill = ({ skill: s }: Props) => {
  return (
    <div className="mb-8 md:mb-12">
      <div
        data-aos="fade-right"
        key={s.name}
        className={`relative flex ${s.name} justify-center shadow-lg dark:bg-zinc-950 bg-opacity-45 rounded-full border-2 dark:border-zinc-800 
          w-[2.8rem] sm:w-[3.2rem] md:w-[3.7rem] 
          p-1.5 sm:p-2
          md:hover:scale-[1.125] 
          transition-transform ease-in-out duration-300`}
      >
        <img
          className={`rounded-full pointer-events-none w-full h-full object-contain ${
            s.name ? `${styles.rotateInfinite}` : ""
          }`}
          alt={s.name}
          src={s.url}
        />
      </div>

      <Tooltip className="z-[999]" anchorSelect={`.${s.name}`} place="bottom">
        {s.name}
      </Tooltip>
    </div>
  );
};

export default Skill;