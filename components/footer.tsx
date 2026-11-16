"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { IconArrowUp, IconArrowUpRight } from "@tabler/icons-react"

const links = [
    { name: "Home", href: "/" },
    { name: "Internet", href: "/" },
    { name: "Electrical", href: "/" },
    { name: "Security", href: "/" },
    { name: "About us", href: "/" },
]

const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// orange corner brackets, put inside any `relative` parent
const Corners = () => (
    <>
        <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#4079FFFF]" />
        <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#4079FFFF]" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#4079FFFF]" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#4079FFFF]" />
    </>
)

const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3">
        <span className="h-2 w-2 bg-[#4079FFFF]" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
            {children}
        </span>
        <span className="h-px flex-1 bg-white/15" />
    </div>
)

const Footer = () => {
    const [now, setNow] = useState<Date | null>(null)

    // client-only clock, avoids hydration mismatch
    useEffect(() => {
        setNow(new Date())
        const id = setInterval(() => setNow(new Date()), 30000)
        return () => clearInterval(id)
    }, [])

    const time = now
        ? now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "Africa/Nairobi" })
        : "--:--"
    const date = now
        ? now.toLocaleDateString("en-US", {
            weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "Africa/Nairobi",
        })
        : ""

    return (
        <footer className="relative w-full text-white">
            {/* Top hatched strip with orange segment */}
            <div className="relative h-5 w-full" style={strip}>
                <div className="absolute left-0 top-0 h-full w-16 bg-[#4079FFFF] md:w-32" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="container mx-auto px-4 pt-12"
            >
                {/* Main grid with hairline dividers */}
                <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-9">
                    {/* Navigation */}
                    <motion.div
                        variants={item}
                        className="relative space-y-6 bg-gradient-to-b from-[#15161a]/80 to-transparent p-6 backdrop-blur md:col-span-6 md:p-8"
                    >
                        <Corners />
                        <Label>Navigation</Label>
                        <div className="flex flex-col">
                            {links.map((link, idx) => (
                                <Link
                                    href={link.href}
                                    key={link.name + idx}
                                    className="group flex items-center justify-between border-b border-white/10 py-4 transition-all duration-300 hover:bg-[#4079FFFF] hover:px-3 hover:text-black"
                                >
                                    <span className="flex items-center gap-4">
                                        <span className="font-mono text-[11px] tracking-widest text-[#4079FFFF] group-hover:text-black">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-2xl font-bold uppercase tracking-tight md:text-4xl">
                                            {link.name}
                                        </span>
                                    </span>
                                    <IconArrowUpRight
                                        size={28}
                                        className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                    />
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        variants={item}
                        className="relative space-y-6 bg-gradient-to-b from-[#15161a]/80 to-transparent p-6 backdrop-blur md:col-span-3 md:p-8"
                    >
                        <Corners />
                        <Label>Contact us here</Label>
                        <div className="space-y-4 text-sm text-white/70">
                            <p>Viewpark Towers, Utalii Street, Nairobi, Kenya</p>
                            <a href="tel:+254722966576" className="block transition-colors hover:text-[#4079FFFF]">
                                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">Phone </span>
                                +254 722 966 576
                            </a>
                            <a href="tel:+254733966576" className="block transition-colors hover:text-[#4079FFFF]">
                                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">Phone </span>
                                +254 733 966 576
                            </a>
                            <a href="mailto:info@category7.co.ke" className="block transition-colors hover:text-[#4079FFFF]">
                                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">Email </span>
                                info@category7.co.ke
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom info bar */}
                <motion.div
                    variants={item}
                    className="mt-px grid grid-cols-1 gap-px border border-t-0 border-white/10 bg-white/10 md:grid-cols-3"
                >
                    <div className="bg-[#0b0c0e]/60 p-5 backdrop-blur">
                        <p className="text-[15px] font-medium">
                            Nairobi City <span className="font-mono text-[#4079FFFF]">{time}</span>
                        </p>
                        <p className="text-[13px] text-white/50">{date}</p>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="group bg-[#0b0c0e]/60 p-5 text-left backdrop-blur transition-colors hover:bg-[#4079FFFF] hover:text-black"
                    >
                        <p className="flex items-center gap-3 text-[15px] font-medium">
                            Back to top
                            <IconArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
                        </p>
                        <p className="text-[13px] text-white/50 group-hover:text-black/70">All rights reserved</p>
                    </button>

                    <div className="bg-[#0b0c0e]/60 p-5 backdrop-blur">
                        <p className="text-[15px] font-medium">
                            &copy; Category7+ Tech Group Ltd {now ? now.getFullYear() : ""}
                        </p>
                        <p className="flex items-center text-[13px] text-white/50">
                            Build and ship modern websites <IconArrowUpRight size={14} />
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Big outlined wordmark */}
            <div className="relative flex items-center justify-center overflow-hidden pb-10 pt-16">
                <h1
                    className="select-none whitespace-nowrap text-5xl font-extrabold uppercase tracking-wide opacity-40 sm:text-8xl lg:text-[175px]"
                    style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
                >
                    Category 7
                </h1>
            </div>

            {/* Bottom hatched strip with orange segment */}
            <div className="relative h-5 w-full" style={strip}>
                <div className="absolute right-0 top-0 h-full w-16 bg-[#4079FFFF] md:w-32" />
            </div>
        </footer>
    )
}

export default Footer