"use client";

import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubContributionGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[155px] flex items-center justify-center">
        <div className="flex flex-col gap-3 w-full max-w-[800px] animate-pulse">
          <div className="h-4 bg-white/5 rounded w-1/4"></div>
          <div className="grid grid-cols-53 gap-[5px]">
            {Array.from({ length: 53 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-[5px]">
                {Array.from({ length: 7 }).map((_, j) => (
                  <div key={j} className="w-[14px] h-[14px] bg-white/5 rounded-sm"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full overflow-x-auto flex justify-center py-2">
      <GitHubCalendar
        username="Ruganiz"
        colorScheme="dark"
        fontSize={14}
        blockSize={14}
        blockMargin={5}
        showWeekdayLabels={false}
        showColorLegend={false}
        showMonthLabels={true}
      />
    </section>
  );
}
