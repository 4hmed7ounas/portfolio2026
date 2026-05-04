"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

interface GitHubCalendarProps {
  username: string;
}

const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username }) => {
  return (
    <AnimatedSection className="w-full overflow-hidden">
      <div className="p-6 rounded-2xl bg-card-bg border border-border shadow-card overflow-x-auto">
        <div className="min-w-[800px] lg:min-w-0">
          <img
            src={`https://ghchart.rshah.org/000000/${username}`}
            alt={`${username}'s GitHub contribution graph`}
            className="w-full h-auto filter dark:invert dark:hue-rotate-180"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-foreground-muted">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-[#ebedf0] dark:bg-[#161b22]" />
            <div className="w-3 h-3 rounded-sm bg-[#9be9a8] dark:bg-[#0e4429]" />
            <div className="w-3 h-3 rounded-sm bg-[#40c463] dark:bg-[#006d32]" />
            <div className="w-3 h-3 rounded-sm bg-[#30a14e] dark:bg-[#26a641]" />
            <div className="w-3 h-3 rounded-sm bg-[#216e39] dark:bg-[#39d353]" />
          </div>
          <span>More</span>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GitHubCalendar;
