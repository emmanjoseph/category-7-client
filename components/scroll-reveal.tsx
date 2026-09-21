"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Fragment, useRef } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_TEXT =
  "Animation should never make you wait. It should reveal the next idea at exactly the moment you are ready to read it.";

export interface WordProgressRange {
  start: number;
  end: number;
}

export interface ScrollWordRevealProps {
  text?: string;
  kicker?: string;
  startOpacity?: number;
  spread?: number;
  wordDuration?: number;
  className?: string;
  stageClassName?: string;
  headingClassName?: string;
  progressClassName?: string;
  headingId?: string;
}

function getWordProgressRange(
  index: number,
  count: number,
  spread: number,
  wordDuration: number,
): WordProgressRange {
  const start =
    count <= 1 ? 0 : (index / (count - 1)) * spread;

  return {
    start,
    end: Math.min(1, start + wordDuration),
  };
}

export function getWordOpacity(
  progress: number,
  { start, end }: WordProgressRange,
  startOpacity = 0.15,
): number {
  if (progress <= start) return startOpacity;
  if (progress >= end) return 1;

  const wordProgress =
    (progress - start) / (end - start);

  return (
    startOpacity +
    (1 - startOpacity) * wordProgress
  );
}

function Word({
  children,
  progress,
  index,
  count,
  reducedMotion,
  startOpacity,
  spread,
  wordDuration,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  count: number;
  reducedMotion: boolean;
  startOpacity: number;
  spread: number;
  wordDuration: number;
}) {
  const range = getWordProgressRange(
    index,
    count,
    spread,
    wordDuration,
  );

  const opacity = useTransform(progress, (latest) =>
    getWordOpacity(latest, range, startOpacity),
  );

  return (
    <motion.span
      aria-hidden="true"
      style={
        reducedMotion
          ? undefined
          : { opacity }
      }
    >
      {children}
    </motion.span>
  );
}

export function ScrollWordReveal({
  text = DEFAULT_TEXT,
  kicker = "Scroll to reveal",
  startOpacity = 0.15,
  spread = 0.8,
  wordDuration = 0.2,
  className,
  stageClassName,
  headingClassName,
  progressClassName,
  headingId = "scroll-word-reveal-heading",
}: ScrollWordRevealProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const words = text.split(" ");

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
        <div
          className="
            mx-auto grid w-full max-w-[1024px]
            grid-cols-1 gap-0
            sm:grid-cols-[1px_minmax(0,1fr)]
            sm:gap-10
            items-start
          "
        >
          {/* Progress */}
          <div
            aria-hidden="true"
            className={cn(
              "relative h-28 w-px overflow-hidden",
              "bg-border",
              "hidden sm:block",
              progressClassName,
            )}
          >
            <motion.span
              className="absolute inset-0 block origin-top bg-foreground"
              style={{
                scaleY: reducedMotion
                  ? 1
                  : scrollYProgress,
              }}
            />
          </div>

          {/* Content */}
          <div className="max-w-[900px]">
            <p
              className="
                mb-7 m-0
                font-mono
                text-[11px]
                font-medium
                uppercase
                tracking-[0.16em]
                leading-none
                text-muted-foreground
                sm:mb-10
              "
            >
              {kicker}
            </p>

            <h1
              id={headingId}
              aria-label={text}
              className={cn(
                "m-0 max-w-[26ch]",
                "text-balance",
                "text-[clamp(36px,5.4vw,56px)]",
                "font-semibold",
                "leading-[1.08]",
                "tracking-[-0.045em]",
                headingClassName,
              )}
            >
              {words.map((word, index) => (
                <Fragment
                  key={`${word}-${index}`}
                >
                  <Word
                    progress={scrollYProgress}
                    index={index}
                    count={words.length}
                    reducedMotion={Boolean(
                      reducedMotion,
                    )}
                    startOpacity={startOpacity}
                    spread={spread}
                    wordDuration={wordDuration}
                  >
                    {word}
                  </Word>

                  {index < words.length - 1
                    ? " "
                    : null}
                </Fragment>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollWordReveal;

