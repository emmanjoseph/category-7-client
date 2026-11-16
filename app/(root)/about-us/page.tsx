"use client"
import React from 'react'
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { motion } from "motion/react"
import Image from "next/image"
import AboutStory from "@/components/AboutStory";

const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}

const diagonal = {
    backgroundImage:
        "repeating-linear-gradient(115deg, #3a3d43 0px, #3a3d43 1px, transparent 1px, transparent 9px)",
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const milestones = [
    {
        title: '2023',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    }
]

const About = () => {
    return (
        <div className="w-full bg-[#0b0c0e] text-white pt-20">
            <div className="h-5 w-full bg-[#0b0c0e]" style={strip} />

            <div className="grid container mx-auto px-4 md:min-h-[45rem] md:grid-cols-2 md:border-x">
                {/* Left: heading + copy over canvas reveal */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative flex min-h-[26rem] flex-col justify-between gap-16 overflow-hidden border-b-4 border-[#2b2d31] py-8 md:border-b-0 md:border-r-4 md:py-10 md:pr-10 p-1"
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

                    {/* readability fade behind the text */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/60 to-transparent" />

                    <div className="relative z-20">
                        <motion.div variants={item} className="mb-6 flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#f26a2e]" />
                            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                                Who we are
                            </p>
                        </motion.div>
                        <motion.h1
                            variants={item}
                            className="text-[clamp(3.5rem,11vw,9rem)] font-extrabold uppercase leading-none tracking-tight"
                        >
                            About
                        </motion.h1>
                    </div>

                    <motion.p
                        variants={item}
                        className="relative z-20 max-w-sm leading-relaxed text-white/70"
                    >
                        We install and maintain fibre internet, electrical systems and security setups for
                        homes and businesses across Nairobi, and we test everything before we hand it over.
                    </motion.p>
                </motion.div>

                {/* Right: 2x2 tiles */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-2 gap-1 bg-[#2b2d31]"
                >
                    {/* 1: orange stat */}
                    <motion.div
                        variants={item}
                        className="flex min-h-[13rem] flex-col justify-between bg-[#f26a2e] p-5 text-black md:min-h-0 md:p-6"
                    >
                        <span className="text-4xl font-extrabold tracking-tight md:text-5xl">10k+</span>
                        <span className="text-xs font-semibold uppercase tracking-wide">Installations done</span>
                    </motion.div>

                    {/* 2: hatched tile */}
                    <motion.div
                        variants={item}
                        style={diagonal}
                        className="min-h-[13rem] bg-[#0b0c0e] md:min-h-0"
                    />

                    {/* 3: dark stat */}
                    <motion.div
                        variants={item}
                        className="group relative flex min-h-[13rem] flex-col justify-between overflow-hidden bg-gradient-to-b from-[#15161a] to-[#0b0c0e] p-5 md:min-h-0 md:p-6"
                    >
                        <span className="text-4xl font-extrabold tracking-tight md:text-5xl">15+</span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                            Years of practice
                        </span>
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f26a2e] transition-all duration-500 group-hover:w-full" />
                    </motion.div>

                    {/* 4: darkest stat */}
                    <motion.div
                        variants={item}
                        className="group relative flex min-h-[13rem] flex-col justify-between overflow-hidden bg-[#0b0c0e] p-5 md:min-h-0 md:p-6"
                    >
                        <span className="text-4xl font-extrabold tracking-tight text-[#f26a2e] md:text-5xl">24/7</span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                            Emergency support
                        </span>
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f26a2e] transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                </motion.div>
            </div>

            <div className="h-5 w-full bg-[#0b0c0e]" style={strip} />
            <Image src={'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'} alt={'Emergency support'}
            width={1000}
            height={1000}
                   className={'w-full h-[30rem] object-cover'}
            />
            <div className="h-5 w-full bg-[#0b0c0e]" style={strip} />
            <AboutStory/>

        </div>
    )
}

export default About