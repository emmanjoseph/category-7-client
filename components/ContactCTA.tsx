"use client";
import React from "react";
import { motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ContactCta = () => {
    return (
        <div className={'py-20'}>
            <div className=" w-full bg-[#0b0c0e] text-white">
                <div className="h-5 w-full bg-[#0b0c0e]" style={strip} />

                <div className="relative flex min-h-[30rem] w-full items-center justify-center overflow-hidden bg-[#0b0c0e] px-4 py-16 md:min-h-[36rem]">
                    {/* Always-on canvas reveal background */}
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

                    {/* Radial fade so the text stays readable */}
                    <div className="pointer-events-none absolute inset-0 bg-black/70 [mask-image:radial-gradient(500px_at_center,white,transparent)]" />

                    {/* Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="relative z-20 container mx-auto flex flex-col  "
                    >
                        <motion.div variants={item} className="mb-6 flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#4079FFFF]" />
                            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                                Get in touch
                            </p>
                        </motion.div>

                        <motion.h2
                            variants={item}
                            className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl"
                        >
                            Ready to collaborate and take <br/>your project to the Next level?
                        </motion.h2>

                        <motion.p variants={item} className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-base">
                            Tell us about your property. We&apos;ll survey the site, recommend the right fibre,
                            electrical and security setup, and send a clear quote, usually within 24 hours.
                        </motion.p>

                        <motion.div variants={item} className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <motion.a
                                href="/contact"
                                whileHover="hover"
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 bg-[#4079FFFF] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-black"
                            >
                                Request a free quote
                                <motion.span variants={{ hover: { x: 5 } }} transition={{ type: "spring", stiffness: 400 }}>
                                    →
                                </motion.span>
                            </motion.a>

                            <motion.a
                                href="https://wa.me/254700000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 border border-white/20 bg-[#15161a] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#4079FFFF] hover:text-[#4079FFFF]"
                            >
                                Chat on WhatsApp
                            </motion.a>
                        </motion.div>

                        <motion.p variants={item} className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                            24/7 emergency support · +254 700 000 000
                        </motion.p>
                    </motion.div>
                </div>

                <div className="h-5 w-full bg-[#0b0c0e]" style={strip} />
            </div>
        </div>
    );
};

export default ContactCta;

