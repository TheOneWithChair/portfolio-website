import React from "react";
import GitHubCalendar from "react-github-calendar";

export const GithubCalender = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 md:py-4">
        Github Calendar
      </h1>
      
      <div className="pb-10"></div>
      
      <div className="overflow-x-auto flex justify-center">
        <div className="min-w-[750px] sm:min-w-0 max-w-[900px]">
          <GitHubCalendar
            username="TheOneWithChair"
            blockSize={11} // Increased block size
            blockMargin={6} // Increased block margin
            fontSize={18} // Increased font size
            colorScheme="dark"
            style={{ 
              color: "white",
              width: "100%",
              height: "auto",
              maxWidth: "100%"
            }}
          />
        </div>
      </div>
    </div>
  );
};