"use client"
import Link from "next/link"
import {AnimatePresence, motion} from "motion/react"
import {Cable, Zap, Cctv, Network, X, LucideIcon} from "lucide-react"
import Footer from "@/components/footer";
import Engage from "@/components/engage";
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect";
import React, {useEffect, useState} from "react"
import Faq from "@/components/faq";
import {Variants} from "motion";

const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}

interface Service {
    icon: LucideIcon
    title: string
    description: string
    more_info: string
    image: string
    href: string
}

const ServiceModal = ({ service, onClose }:{service:Service,onClose:()=>void}) => {
    const { icon: Icon, title, description, more_info, image } = service
    const index = services.findIndex((s) => s.title === service.title)

    useEffect(() => {
        const onKey = (e:KeyboardEvent) => e.key === "Escape" && onClose()
        document.addEventListener("keydown", onKey)
        const prev = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = prev
        }
    }, [onClose])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm md:items-center md:p-6"
        >
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden border border-[#2b2d31] bg-[#0b0c0e] text-white rounded-3xl"
            >
                {/* close button over the image */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center bg-black/60 text-white backdrop-blur transition-colors hover:bg-[#f26a2e] hover:text-black"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* scrollable body: picture first, details after */}
                <div className="overflow-y-auto">
                    {/* picture */}
                    <div className="relative h-56 w-full shrink-0 sm:h-72 md:h-80">
                        {image ? (
                            <img src={image} alt={title} className="h-full w-full object-cover" />
                        ) : (
                            <div className="h-full w-full bg-[#15161a]">
                                <CanvasRevealEffect
                                    animationSpeed={3}
                                    containerClassName="bg-transparent"
                                    colors={[[242, 106, 46], [255, 150, 90]]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/20" />
                    </div>

                    {/* details */}
                    <div className="relative -mt-8 space-y-6 px-5 pb-8 md:px-8">
                        <div
                            style={strip}
                            className="flex h-14 w-14 items-center justify-center border border-[#f26a2e] bg-[#0b0c0e] text-[#f26a2e]"
                        >
                            <Icon className="h-6 w-6" strokeWidth={1.4} />
                        </div>

                        <div className="space-y-2">
                            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#f26a2e]">
                                Service {String(index + 1).padStart(2, "0")}
                            </p>
                            <h2 className="text-xl font-bold uppercase tracking-tight md:text-2xl">{title}</h2>
                            <p className="text-base font-medium text-white/80">{description}</p>
                        </div>

                        <div className="h-px w-full bg-[#2b2d31]" />

                        <p className="leading-relaxed text-white/60">{more_info}</p>
                    </div>
                </div>

                {/* sticky action bar, always visible */}
                <div className="flex flex-wrap items-center gap-3 border-t border-[#2b2d31] bg-[#0b0c0e] p-4 md:px-8">
                    <Link
                        href="/contact"
                        className="inline-flex flex-1 items-center justify-center gap-2 bg-[#f26a2e] px-5 py-4 text-xs font-semibold uppercase tracking-wide text-black sm:flex-none"
                    >
                        Get a quote →
                    </Link>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex flex-1 items-center justify-center border border-white/20 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-white/80 hover:border-[#f26a2e] hover:text-[#f26a2e] sm:flex-none"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}


const services = [
    {
        icon: Cable,
        image:"https://images.unsplash.com/photo-1624965439943-09e0238644e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "Fibre & Internet",
        description: "Dedicated fibre lines with low latency and guaranteed uptime for homes and businesses.",
        href: "/internet",
        more_info: "We handle the full installation, from surveying your site and running the fibre drop to terminating, testing and activating your connection. Plans scale from home use to business-grade dedicated lines with symmetrical speeds, static IP options and 24/7 fault support. Our technicians configure your router and Wi-Fi on the day, so you're online before we leave."
    },
    {
        icon: Zap,
        image:"https://images.unsplash.com/photo-1652715564391-38cc4475b7f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "Electrical Rewiring",
        description: "Rewiring, panel upgrades and surge protection built to code and tested before handover.",
        href: "/electrical",
        more_info: "Our licensed electricians replace ageing or unsafe wiring, upgrade distribution boards and install earthing, RCD protection and surge arresters. Every job is tested with proper instruments and signed off with a certificate of compliance. We also handle new-build wiring, load balancing for growing businesses and backup power integration such as solar and inverter changeover."
    },
    {
        icon: Cctv,
        image:"https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "CCTV & Security",
        description: "HD cameras, motion sensors and access control with live monitoring on your phone.",
        href: "/security",
        more_info: "We design camera layouts around your blind spots and install HD and night-vision cameras, NVR/DVR storage, motion sensors, alarms and biometric or keycard access control. You get live view and playback on your phone from anywhere, with instant motion alerts. Maintenance plans cover cleaning, firmware updates and storage checks so the system keeps working when you need it."
    },
    {
        icon: Network,
        image:"https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "Network & Cabling",
        description: "Structured Cat6/Cat7 cabling, server racks and Wi-Fi access points for full coverage.",
        href: "/networking",
        more_info: "We install neatly labelled Cat6/Cat7 cabling, patch panels, cabinets and switches, then plan and mount Wi-Fi access points for seamless coverage across offices, schools and large homes. Every run is certified with a cable tester, and we provide documentation of the layout. We can also set up VLANs, guest networks and VPN access for secure remote work."
    },
]

const container:Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item:Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Page = () => {
    const [active, setActive] = useState<Service | null>(null)
    return (
        <div className="pt-20 text-white">
            <div style={strip} className="h-5 w-full bg-[#0b0c0e]" />

            <div className="grid px-4 md:min-h-[50rem] md:grid-cols-2 md:border-x">
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
                        <motion.div variants={item} className="mb-6 flex items-center gap-3 relative z-20 px-5">
                            <span className="h-2 w-2 bg-[#f26a2e]" />
                            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                                What we do
                            </p>
                        </motion.div>
                        <motion.h1
                            variants={item}
                            className="text-5xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl px-5"
                        >
                            Our <br/> Services
                        </motion.h1>
                    </div>

                    <div className="space-y-8 relative z-20 px-5">
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
                    {services.map((service, i) => {
                        const { icon: Icon, title, description } = service
                        return (
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

                                {/* opens dialog */}
                                <button
                                    type="button"
                                    onClick={() => setActive(service)}
                                    className="mt-6 flex w-full items-center justify-between border-t border-white/10 pt-4 text-left text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors group-hover:text-[#f26a2e]"
                                >
                                    View service
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>

                                {/* accent line on hover */}
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f26a2e] transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>


            <AnimatePresence>
                {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
            </AnimatePresence>

            <div style={strip} className="h-5 w-full bg-[#0b0c0e]" />
            <Engage/>
            <div style={strip} className="h-5 w-full bg-[#0b0c0e]" />

            <Faq/>
            <Footer/>
        </div>
    )
}

export default Page