"use client"
import React, {useRef} from 'react'
import {motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Cable, Wifi, Globe, Router, Network, ShieldCheck, Cctv, Zap, Plug, Server } from 'lucide-react'
import {Variants} from "motion";

const services = [
    { icon: Cable, label: 'Fibre' },
    { icon: Wifi, label: 'Wi-Fi' },
    { icon: Globe, label: 'Internet' },
    { icon: Router, label: 'Routers' },
    { icon: Network, label: 'Networking' },
    { icon: Cctv, label: 'CCTV' },
    { icon: ShieldCheck, label: 'Security' },
    { icon: Zap, label: 'Rewiring' },
    { icon: Plug, label: 'Electrical' },
    { icon: Server, label: 'Servers' },
]

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const About = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
    const bgX = useTransform(smooth, [0, 1], ['0px', '-300px'])
    return (
        <motion.section
            ref={ref}
            className="relative flex min-h-[700px] w-full flex-col overflow-hidden bg-[#0b0c0e] text-white md:min-h-screen"
            style={{
                backgroundImage:
                    'repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)',
                backgroundPositionX: bgX,
            }}
        >
            {/* Orange sidebar */}
            <motion.aside
                initial={{ x: -128 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 z-20 flex h-full w-10 flex-col justify-between bg-[#4079FFFF] md:w-32"
            >
                <div
                    className="h-5 w-full"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(90deg, #0b0c0e 0px, #0b0c0e 5px, transparent 5px, transparent 10px)',
                    }}
                />
                <div className="flex flex-col items-center">
                    <p className="mb-3 text-[10px] font-medium tracking-wide text-black [writing-mode:vertical-rl] md:text-[11px] md:[writing-mode:horizontal-tb]">
                        REAL HARDWARE
                    </p>
                    <div className="w-full bg-[#0b0c0e] py-3 text-center text-[9px] tracking-wide text-white md:text-[11px]">
                        <span className="hidden md:inline">TRUSTED BY:</span>
                        <span className="md:hidden">TRUST</span>
                    </div>
                </div>
            </motion.aside>

            {/* Main column (offset by sidebar width) */}
            <div className="ml-10 flex flex-1 flex-col md:ml-32">
                {/* Center card */}
                <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-8 sm:py-12">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex w-full max-w-3xl flex-col gap-5 border border-white/10 bg-[#15161a]/95 p-5 backdrop-blur sm:flex-row sm:gap-8 sm:p-8"
                    >
                        {/* Hatched square */}
                        <motion.div
                            variants={item}
                            className="h-16 w-full shrink-0 sm:h-32 sm:w-32"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(115deg, #6b6e75 0px, #6b6e75 2px, #15161a 2px, #15161a 6px)',
                            }}
                        />

                        <div className="min-w-0">
                            <motion.h2
                                variants={item}
                                className="break-words text-lg font-extrabold uppercase leading-[1.1] tracking-tight sm:text-2xl md:text-3xl"
                            >
                                High-performance fiber installations, professional electrical rewiring, and smart
                                security system setups — all tailored to the specific needs of residential and
                                commercial properties.
                            </motion.h2>

                            <motion.button
                                variants={item}
                                whileHover="hover"
                                whileTap={{ scale: 0.97 }}
                                className="mt-6 flex items-center gap-2 bg-[#4079FFFF] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-black"
                            >
                                About category 7
                                <motion.span variants={{ hover: { x: 5 } }} transition={{ type: 'spring', stiffness: 400 }}>
                                    →
                                </motion.span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Icon marquee (in normal flow, so it never overlaps the card) */}
                <div className="h-24 overflow-hidden border-t border-white/10 bg-[#101114] md:h-28">
                    <motion.div
                        className="flex h-full w-max"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                        {[...services, ...services].map(({ icon: Icon, label }, i) => (
                            <div
                                key={i}
                                className="group flex h-full w-32 flex-col items-center justify-center gap-2 border-r border-white/10 text-white/50 transition-colors hover:text-[#4079FFFF] md:w-44"
                            >
                                <Icon className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
                                <span className="text-[10px] font-semibold uppercase tracking-wider md:text-xs">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default About