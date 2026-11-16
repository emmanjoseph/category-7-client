"use client"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { IconArrowUpRight, IconPhone } from "@tabler/icons-react"

const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}

const values = [
    {
        title: "Efficiency",
        badge: "Our Core Values",
        image: "/images/efficiency.png",
        description:
            "At Simplex Technologies, we prioritize efficiency in every project we undertake. Our primary goal is to optimize time, reduce costs, and conserve resources, ensuring the best outcomes for our clients while maintaining operational excellence within our organization.",
    },
    {
        title: "Customer Concerns",
        image: "/images/customerConcern.jpg",
        description:
            "This is at the heart of our business, where we are not only looking to relate with our clients, we are focused on coming up with solutions that incorporate our clients' concerns of all natures, be it moral or technical.",
    },
    {
        title: "Optimization",
        image: "/images/optimization.png",
        description:
            "This is where we ensure that all our installations are reliable (without fail), durable, resistant to interference from the external environment, and that the implemented system serves the specific purpose it is intended for.",
    },
]

const phones = [
    { label: "0722 966 576", href: "tel:+254722966576" },
    { label: "0733 966 576", href: "tel:+254733966576" },
    { label: "0777 966 576", href: "tel:+254777966576" },
]

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const AboutStory = () => {
    return (
        <div className="w-full text-white">
            <div className="h-5 w-full bg-[#0b0c0e]" style={strip} />

            {/* Story + values */}
            <div className="container mx-auto grid px-4 md:grid-cols-2 md:border-x md:border-[#2b2d31]">
                {/* Left: pinned intro */}
                <div className="border-b-4 border-[#2b2d31] md:border-b-0 md:border-r-4">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="flex flex-col gap-8 py-8 md:sticky md:top-24 md:py-10 md:pr-10"
                    >
                        <motion.div variants={item} className="flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#f26a2e]" />
                            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                                Our story
                            </p>
                        </motion.div>

                        <motion.h2
                            variants={item}
                            className="text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl"
                        >
                            Category 7
                        </motion.h2>

                        <motion.p variants={item} className="max-w-md leading-relaxed text-white/70">
                            Category 7 Tech Group LTD is a structured cabling company formed in 2009. In five years we
                            have served a range of industries, from service to manufacturing, including NGOs and
                            construction.
                        </motion.p>

                        <motion.p variants={item} className="max-w-md leading-relaxed text-white/60">
                            We are focused on being at the frontline of the structured cabling industry in Kenya,
                            driven by innovation that allows for flexibility, creativity and optimization of all
                            of our clients&apos; projects.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Right: values */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 gap-1 bg-[#2b2d31]"
                >
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            variants={item}
                            className="group relative flex flex-col gap-5 overflow-hidden bg-gradient-to-b from-[#15161a] to-[#0b0c0e] p-6"
                        >
                            <div className="flex items-start justify-between">
                                <span className="font-mono text-xs tracking-widest text-[#f26a2e]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {v.badge && (
                                    <span className="border border-white/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
                                        {v.badge}
                                    </span>
                                )}
                            </div>

                            <div className="relative h-48 w-full overflow-hidden border border-white/10">
                                <Image
                                    src={v.image}
                                    alt={v.title}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold uppercase tracking-tight md:text-2xl">{v.title}</h3>
                                <p className="max-w-md text-sm leading-relaxed text-white/60">{v.description}</p>
                            </div>

                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f26a2e] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="h-5 w-full bg-[#0b0c0e]" style={strip} />

            {/* Contact panel */}
            <div className="container mx-auto px-4 md:border-x md:border-[#2b2d31]">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid gap-8 bg-[#f26a2e] p-6 text-black md:grid-cols-2 md:p-10"
                >
                    <div className="space-y-4">
                        <motion.p
                            variants={item}
                            className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/70"
                        >
                            Get in touch
                        </motion.p>
                        <motion.h3
                            variants={item}
                            className="text-3xl font-extrabold uppercase leading-none tracking-tight sm:text-4xl"
                        >
                            Questions, clarifications or interests?
                        </motion.h3>
                        <motion.p variants={item} className="max-w-md text-sm leading-relaxed text-black/80">
                            Please feel free to contact us. We hope to hear from you soon.
                        </motion.p>
                    </div>

                    <motion.div variants={item} className="flex flex-col justify-end gap-3">
                        {phones.map((p) => (
                            <a
                                key={p.href}
                                href={p.href}
                                className="group flex items-center justify-between border-b border-black/20 pb-3 text-lg font-bold transition-all hover:px-2"
                            >
                                <span className="flex items-center gap-3">
                                    <IconPhone size={18} />
                                    {p.label}
                                </span>
                                <IconArrowUpRight
                                    size={20}
                                    className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                />
                            </a>
                        ))}

                        <motion.a
                            href="mailto:info@simplextechnologies.co.ke"
                            whileTap={{ scale: 0.97 }}
                            className="mt-3 inline-flex items-center justify-between gap-2 bg-black px-5 py-4 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#15161a]"
                        >
                            info@simplextechnologies.co.ke
                            <span>→</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            <div className="mt-5 h-5 w-full bg-[#0b0c0e]" style={strip} />
        </div>
    )
}

export default AboutStory