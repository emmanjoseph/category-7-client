"use client";
import React from 'react'
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";


export interface StatItem {
    value: string;
    label: string;
    description?: string;
}

const DEFAULT_STATS: StatItem[] = [
    { value: "10k+", label: "Installations", description: "Completed across residential and commercial sites" },
    { value: "99.9%", label: "Uptime", description: "Average network reliability" },
    { value: "24/7", label: "Support", description: "Round-the-clock monitoring and response" },
    { value: "15+", label: "Years", description: "Combined field experience" },
];

interface ItemProgressRange {
    start: number;
    end: number;
}

function getItemProgressRange(
    index: number,
    count: number,
    spread: number,
    itemDuration: number,
): ItemProgressRange {
    const start = count <= 1 ? 0 : (index / (count - 1)) * spread;
    return { start, end: Math.min(1, start + itemDuration) };
}

// Same shape as ScrollWordReveal's getWordOpacity — never fully invisible,
// clamps to 1 once past `end` and stays there (no fade-out on exit).
function getItemOpacity(
    progress: number,
    { start, end }: ItemProgressRange,
    startOpacity: number,
): number {
    if (progress <= start) return startOpacity;
    if (progress >= end) return 1;

    const itemProgress = (progress - start) / (end - start);
    return startOpacity + (1 - startOpacity) * itemProgress;
}

function StatCard({
                      item,
                      progress,
                      index,
                      count,
                      reducedMotion,
                      spread,
                      itemDuration,
                      startOpacity,
                      travel,
                  }: {
    item: StatItem;
    progress: MotionValue<number>;
    index: number;
    count: number;
    reducedMotion: boolean;
    spread: number;
    itemDuration: number;
    startOpacity: number;
    travel: number;
}) {
    const range = getItemProgressRange(index, count, spread, itemDuration);

    const opacity = useTransform(progress, (latest) =>
        getItemOpacity(latest, range, startOpacity),
    );
    const x = useTransform(progress, [range.start, range.end], [travel, 0]);

    return (
        <motion.div
            className={cn(
                "flex min-w-[220px] flex-1 flex-col gap-2",
                "border-l border-border pl-6",
                "sm:min-w-[240px]",
            )}
            style={
                reducedMotion
                    ? undefined
                    : { opacity, x }
            }
        >
      <span className="text-[clamp(32px,4.2vw,52px)] font-semibold leading-none tracking-[-0.03em]">
        {item.value}
      </span>
            <span className="text-sm font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {item.label}
      </span>
            {item.description ? (
                <p className="max-w-[26ch] text-sm text-muted-foreground/80">
                    {item.description}
                </p>
            ) : null}
        </motion.div>
    );
}

export interface ScrollStatsRevealProps {
    stats?: StatItem[];
    kicker?: string;
    spread?: number;
    itemDuration?: number;
    startOpacity?: number;
    travel?: number;
    className?: string;
    stageClassName?: string;
    progressClassName?: string;
    headingId?: string;
}

export function ScrollStatsReveal({
                                      stats = DEFAULT_STATS,
                                      kicker = "By the numbers",
                                      spread = 0.7,
                                      itemDuration = 0.35,
                                      startOpacity = 0.35,
                                      travel = 48,
                                      className,
                                      stageClassName,
                                      progressClassName,
                                      headingId = "scroll-stats-reveal-heading",
                                  }: ScrollStatsRevealProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={sectionRef}
            aria-labelledby={headingId}
            className={cn(
                "min-h-[220vh] w-full overflow-x-clip",
                "bg-background text-foreground",
                "font-sans antialiased",
                className,
            )}
        >
            <div
                className={cn(
                    "sticky top-0 flex min-h-screen w-full",
                    "items-center overflow-hidden",
                    "px-6 py-12",
                    "sm:px-12 sm:py-16",
                    stageClassName,
                )}
            >
                <div className="mx-auto w-full max-w-[1200px]">
                    <div className="mb-10 flex items-center gap-6 sm:mb-14">
                        <p
                            id={headingId}
                            className="
                m-0
                font-mono
                text-[11px]
                font-medium
                uppercase
                tracking-[0.16em]
                leading-none
                text-muted-foreground
              "
                        >
                            {kicker}
                        </p>

                        <div
                            aria-hidden="true"
                            className={cn(
                                "relative h-px flex-1 overflow-hidden bg-border",
                                progressClassName,
                            )}
                        >
                            <motion.span
                                className="absolute inset-0 block origin-left bg-foreground"
                                style={{
                                    scaleX: reducedMotion ? 1 : scrollYProgress,
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className="
              flex flex-col gap-10
              sm:flex-row sm:flex-wrap sm:gap-8
              lg:flex-nowrap
            "
                    >
                        {stats.map((stat, index) => (
                            <StatCard
                                key={`${stat.label}-${index}`}
                                item={stat}
                                progress={scrollYProgress}
                                index={index}
                                count={stats.length}
                                reducedMotion={Boolean(reducedMotion)}
                                spread={spread}
                                itemDuration={itemDuration}
                                startOpacity={startOpacity}
                                travel={travel}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const Stats = () => {
    return (
        <div>
            <ScrollStatsReveal
                kicker="Our track record"
                stats={[
                    { value: "10k+", label: "Installations", description: "Fiber, electrical, and security systems delivered" },
                    { value: "99.9%", label: "Uptime", description: "Average network reliability across all sites" },
                    { value: "24/7", label: "Support", description: "Round-the-clock monitoring and response" },
                    { value: "15+", label: "Years", description: "Combined field experience" },
                ]}
            />
        </div>
    )
}
export default Stats


