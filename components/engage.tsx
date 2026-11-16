"use client"
import React from "react"
import Link from "next/link"
import { motion } from "motion/react"

const plans = [
    {
        name: "Home",
        time: "1 to 2 days",
        description: "Fibre setup, Wi-Fi coverage, rewiring or cameras for a house or apartment.",
    },
    {
        name: "Business",
        time: "1 to 2 weeks",
        description:
            "Offices, shops and warehouses that need internet, power and security done together.",
        featured: true,
    },
    {
        name: "Enterprise",
        time: "Ongoing",
        description: "Multi-site rollouts and long-term support with a dedicated team on call.",
    },
]

const gridTile = {
    backgroundColor: "#ed6a35",
    backgroundImage:
        "linear-gradient(90deg, rgba(255,255,255,0.85) 2px, transparent 2px), linear-gradient(0deg, rgba(255,255,255,0.85) 2px, transparent 2px)",
    backgroundSize: "57px 57px",
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Card = ({ plan }: { plan: (typeof plans)[number] }) => (
    <motion.div
        variants={item}
        className={`relative flex min-h-[22rem] flex-col justify-between p-6 md:min-h-[26rem] ${
            plan.featured ? "bg-[#1b1c1e] text-white" : "bg-[#e4e6ea] text-[#1b1c1e]"
        }`}
    >
        <p
            className={`self-end font-mono text-[11px] uppercase tracking-[0.14em] ${
                plan.featured ? "text-white/60" : "text-[#1b1c1e]/60"
            }`}
        >
            {plan.time}
        </p>

        <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-tight md:text-2xl">{plan.name}</h3>
            <p
                className={`max-w-xs text-sm leading-relaxed ${
                    plan.featured ? "text-white/70" : "text-[#1b1c1e]/70"
                }`}
            >
                {plan.description}
            </p>
        </div>
    </motion.div>
)

const Engage = () => {
    return (
        <section className="bg-black  text-[#e4e6ea]">
            <div className="grid md:min-h-screen md:grid-cols-3">
                {/* Left: 2x2 grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="order-2 grid grid-cols-1 gap-1 bg-[#1b1c1e] sm:grid-cols-2 md:order-1 md:col-span-2"
                >
                    <Card plan={plans[0]} />
                    <Card plan={plans[1]} />

                    <motion.div
                        variants={item}
                        style={gridTile}
                        className="min-h-[22rem] md:min-h-[26rem]"
                        aria-hidden
                    />

                    <Card plan={plans[2]} />
                </motion.div>

                {/* Right: intro + heading */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="order-1 flex flex-col justify-between gap-16 border-b-4 border-[#1b1c1e] px-6 py-10 md:order-2 md:border-b-0 md:border-l-4"
                >
                    <div className="space-y-12">
                        <motion.p variants={item} className="max-w-md text-lg leading-relaxed text-white">
                            Three ways to work with us, from a one-day home install to a multi-site rollout
                            with a team on call.
                        </motion.p>

                        <motion.h2
                            variants={item}
                            className="text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl"
                        >
                            How we engage
                        </motion.h2>
                    </div>

                    <motion.div variants={item}>
                        <Link href="/contact">
                            <motion.span
                                whileHover="hover"
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-[#1b1c1e] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#f26a2e] hover:text-black"
                            >
                                Get a quote
                                <motion.span
                                    variants={{ hover: { x: 5 } }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    →
                                </motion.span>
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Engage