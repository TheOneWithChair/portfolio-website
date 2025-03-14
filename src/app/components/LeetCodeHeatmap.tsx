"use client";

import { useEffect, useState } from "react";

type SubmissionCalendarData = {
  [timestamp: string]: number;
};

type DayData = {
  date: Date;
  count: number;
  level: number;
};

export default function LeetCodeHeatmap({ username }: { username: string }) {
  const [submissionCalendar, setSubmissionCalendar] = useState<SubmissionCalendarData>({});
  const [days, setDays] = useState<DayData[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  const [maxCount, setMaxCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await res.json();
        setSubmissionCalendar(data.submissionCalendar || {});
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    const processData = () => {
      const today = new Date();
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(today.getFullYear() - 1);
      oneYearAgo.setDate(oneYearAgo.getDate() - oneYearAgo.getDay());

      const allDays: DayData[] = [];
      const monthLabels: string[] = [];
      let currentMonth = -1;

      for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        if (d.getDate() === 1 || (d.getDay() === 0 && d.getDate() <= 7)) {
          if (d.getMonth() !== currentMonth) {
            currentMonth = d.getMonth();
            monthLabels.push(d.toLocaleString("default", { month: "short" }));
          }
        }

        const timestamp = Math.floor(d.getTime() / 1000);
        const dayTimestamp = String(timestamp - (timestamp % 86400));
        const count = submissionCalendar[dayTimestamp] || 0;

        allDays.push({ date: new Date(d), count, level: 0 });

        if (count > maxCount) {
          setMaxCount(count);
        }
      }

      const processedDays = allDays.map((day) => {
        let level = 0;
        if (day.count > 0) {
          if (day.count >= maxCount * 0.75) level = 4;
          else if (day.count >= maxCount * 0.5) level = 3;
          else if (day.count >= maxCount * 0.25) level = 2;
          else level = 1;
        }
        return { ...day, level };
      });

      setDays(processedDays);
      setMonths(monthLabels);
    };

    processData();
  }, [submissionCalendar, maxCount]);

  const weeks: DayData[][] = [];
  let currentWeek: DayData[] = [];

  days.forEach((day, index) => {
    if (index % 7 === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
    if (index === days.length - 1) {
      weeks.push(currentWeek);
    }
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold text-gray-100">LeetCode Submissions</h2>
      <div className="flex flex-col">
        <div className="flex mb-2 text-xs text-gray-400">
          <div className="w-8"></div>
          <div className="flex-1 flex justify-between">
            {months.map((month, i) => (
              <div key={i} className="text-center">
                {month}
              </div>
            ))}
          </div>
        </div>

        <div className="flex text-xs text-gray-400">
          <div className="flex flex-col justify-around h-[120px] pr-2">
            <div>Mon</div>
            <div>Wed</div>
            <div>Fri</div>
          </div>

          <div className="flex-1 grid grid-flow-col gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${
                      day.level === 0
                        ? "bg-gray-800"
                        : day.level === 1
                        ? "bg-emerald-900"
                        : day.level === 2
                        ? "bg-emerald-700"
                        : day.level === 3
                        ? "bg-emerald-500"
                        : "bg-emerald-300"
                    }`}
                    title={`${day.date.toDateString()}: ${day.count} submissions`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between text-gray-300 text-sm mt-4">
          <div>
            Total Solved: <span className="font-bold">Loading...</span>
          </div>
          <div>
            Acceptance Rate: <span className="font-bold">Loading...</span>
          </div>
          <div>
            Ranking: <span className="font-bold">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
