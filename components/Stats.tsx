"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, animate, useInView, useReducedMotion } from "motion/react"
import {Variants} from "motion";

export interface StatItem {
    value: string
    label: string
    description?: string
}

function CountUp({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const reduced = useReducedMotion()

    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
    const target = match ? parseFloat(match[1]) : null
    const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0
    const suffix = match ? match[2] : ""

    const [display, setDisplay] = useState(
        target === null ? value : `${(0).toFixed(decimals)}${suffix}`
    )

    useEffect(() => {
        if (!inView || target === null) return
        if (reduced) {
            setDisplay(value)
            return
        }
        const controls = animate(0, target, {
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setDisplay(`${v.toFixed(decimals)}${suffix}`),
        })
        return () => controls.stop()
    }, [inView])

    return <span ref={ref}>{display}</span>
}

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const card: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function StatsSection({
                                 stats,
                                 kicker = "Our track record",
                             }: {
    stats: StatItem[]
    kicker?: string
}) {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#0b0c0e] py-20 text-white"
            style={{
                backgroundImage:
                    "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
            }}
        >
            <div className="container mx-auto px-4">
                {/* Kicker */}
                <div className="mb-8 flex items-center gap-4 sm:mb-12">
                    <span className="h-2 w-2 bg-[#4079FFFF]" />
                    <p className="font-mono text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-white/60">
                        {kicker}
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-px flex-1 origin-left bg-white/15"
                    />
                </div>

                {/* Stats grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={`${stat.label}-${i}`}
                            variants={card}
                            className="group relative flex flex-col gap-3 overflow-hidden bg-gradient-to-b from-[#15161a] to-[#0b0c0e] p-6 sm:p-8"
                        >
              <span className="font-mono text-[11px] tracking-widest text-[#4079FFFF]">
                {String(i + 1).padStart(2, "0")}
              </span>

                            <span className="text-[clamp(36px,4.5vw,56px)] font-extrabold leading-none tracking-[-0.03em] text-white">
                <CountUp value={stat.value} />
              </span>

                            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-white/80">
                {stat.label}
              </span>

                            {stat.description && (
                                <p className="max-w-[28ch] text-sm leading-relaxed text-white/50">
                                    {stat.description}
                                </p>
                            )}

                            {/* accent line on hover */}
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f26a2e] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

const Stats = () => {
    return (
        <StatsSection
            kicker="Our track record"
            stats={[
                { value: "10k+", label: "Installations", description: "Fiber, electrical, and security systems delivered" },
                { value: "99.9%", label: "Uptime", description: "Average network reliability across all sites" },
                { value: "24/7", label: "Support", description: "Round-the-clock monitoring and response" },
                { value: "15+", label: "Years", description: "Combined field experience" },
            ]}
        />
    )
}

export default Stats