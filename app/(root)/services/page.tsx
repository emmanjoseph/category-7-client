"use client"
import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Cable, Zap, Cctv, Network } from "lucide-react"
import Footer from "@/components/footer";
import Engage from "@/components/engage";
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}

const services = [
    {
        icon: Cable,
        title: "Fibre & Internet",
        description: "Dedicated fibre lines with low latency and guaranteed uptime for homes and businesses.",
        href: "/internet",
    },
    {
        icon: Zap,
        title: "Electrical Rewiring",
        description: "Rewiring, panel upgrades and surge protection built to code and tested before handover.",
        href: "/electrical",
    },
    {
        icon: Cctv,
        title: "CCTV & Security",
        description: "HD cameras, motion sensors and access control with live monitoring on your phone.",
        href: "/security",
    },
    {
        icon: Network,
        title: "Network & Cabling",
        description: "Structured Cat6/Cat7 cabling, server racks and Wi-Fi access points for full coverage.",
        href: "/networking",
    },
]

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Page = () => {
    return (
        <div className="pt-20 text-white">
            <div style={strip} className="h-5 w-full bg-[#0b0c0e]" />

            <div className="container mx-auto grid px-4 md:min-h-[50rem] md:grid-cols-2">
                {/* Left content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-col justify-between gap-16 border-b-4 border-[#2b2d31] py-8 md:border-b-0 md:border-r-4 md:py-10 md:pr-10 relative"
                >
                    <div className="absolute inset-0 h-full w-full">
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-transparent"
                            colors={[
                                [242, 106, 46],
                                [255, 150, 90],
                            ]}
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                            dotSize={2}
                        />
                    </div>
                    <div>
                        <motion.div variants={item} className="mb-6 flex items-center gap-3 relative z-20">
                            <span className="h-2 w-2 bg-[#f26a2e]" />
                            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                                What we do
                            </p>
                        </motion.div>
                        <motion.h1
                            variants={item}
                            className="text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-7xl lg:text-8xl"
                        >
                            Services
                        </motion.h1>
                    </div>

                    <div className="space-y-8 relative z-20">
                        <motion.p variants={item} className="max-w-sm leading-relaxed text-white/60">
                            Fibre, electrical, security and networking are planned together, so nothing gets
                            handed off blind. Pick one service or all four.
                        </motion.p>

                        <motion.div variants={item}>
                            <Link href="/contact">
                                <motion.span
                                    whileHover="hover"
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 bg-[#f26a2e] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-black"
                                >
                                    Start a project
                                    <motion.span
                                        variants={{ hover: { x: 5 } }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        →
                                    </motion.span>
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right: 2x2 cards separated by thick dividers */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 gap-1 bg-[#2b2d31] sm:grid-cols-2"
                >
                    {services.map(({ icon: Icon, title, description, href }, i) => (
                        <motion.div
                            key={title}
                            variants={item}
                            whileHover="hover"
                            className="group relative flex min-h-[18rem] flex-col justify-between overflow-hidden bg-gradient-to-b from-[#15161a] to-[#0b0c0e] p-6"
                        >
                            {/* number + icon */}
                            <div className="flex items-start justify-between">
                                <span className="font-mono text-xs tracking-widest text-[#f26a2e]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <motion.div
                                    variants={{ hover: { rotate: -6, y: -3 } }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex h-14 w-14 items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 group-hover:border-[#f26a2e] group-hover:text-[#f26a2e]"
                                    style={strip}
                                >
                                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                                </motion.div>
                            </div>

                            {/* title + description */}
                            <div className="mt-10 space-y-3">
                                <h3 className="text-xl font-bold uppercase tracking-tight md:text-2xl">{title}</h3>
                                <p className="max-w-xs text-sm leading-relaxed text-white/60">{description}</p>
                            </div>

                            {/* link */}
                            <Link
                                href={href}
                                className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors group-hover:text-[#f26a2e]"
                            >
                                View service
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>

                            {/* accent line on hover */}
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f26a2e] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div style={strip} className="h-5 w-full bg-[#0b0c0e]" />
            <Engage/>
            <Footer/>
        </div>
    )
}

export default Page