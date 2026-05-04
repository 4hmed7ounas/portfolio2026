"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

interface GitHubCalendarProps {
  username: string;
}

const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username }) => {
  return (
    <AnimatedSection className="w-full overflow-hidden">
      <div className="p-6 rounded-2xl bg-accent-light/20 border border-border shadow-card overflow-x-auto">
        <div className="min-w-[800px] lg:min-w-0">
          <img
            src={`https://ghchart.rshah.org/000000/${username}`}
            alt={`${username}'s GitHub contribution graph`}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-foreground-muted">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm dark:bg-[#EEEEEE]" />
            <div className="w-3 h-3 rounded-sm dark:bg-[#767676]" />
            <div className="w-3 h-3 rounded-sm dark:bg-[#4D4D4D]" />
            <div className="w-3 h-3 rounded-sm dark:bg-[#333333]" />
            <div className="w-3 h-3 rounded-sm dark:bg-[#000000]" />
          </div>
          <span>More</span>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GitHubCalendar;
