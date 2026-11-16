"use client"
import React from 'react'
import { motion } from "motion/react"
import { IconQuotes } from "@tabler/icons-react"

const testimonials = [
    {
        quote: "Our office services hasn't dropped once since the switch. The team handled the whole fiber installation in under a day with zero disruption to our work.",
        name: "Wanjiru Kamau",
        role: "Operations Manager, Logistics Firm",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
        quote: "We had the CCTV system rewired and added motion sensors at every entry point. Response time on alerts is instant, and the mobile app makes monitoring effortless.",
        name: "David Otieno",
        role: "Facility Manager, Retail Plaza",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
        quote: "From rewiring our backup generator panel to setting up surge protection, the electrical team was thorough and explained every step. No more outages during storms.",
        name: "Amina Hassan",
        role: "Property Owner",
        avatar: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
        quote: "Security was our biggest concern after a string of break-ins nearby. The motion-sensor lighting and camera coverage they installed gave us real peace of mind.",
        name: "Brian Mwangi",
        role: "Homeowner",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
        quote: "Reliable services was non-negotiable for our call center. They ran dedicated fiber lines with failover backup, and we've had 100% uptime since.",
        name: "Grace Achieng",
        role: "IT Lead, BPO Company",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
        quote: "Full electrical rewiring plus a smart CCTV setup for our warehouse, all completed on schedule and within budget. Professional crew from start to finish.",
        name: "Samuel Kiprono",
        role: "Warehouse Director",
        avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
        quote: "We had the CCTV system rewired and added motion sensors at every entry point. Response time on alerts is instant, and the mobile app makes monitoring effortless.",
        name: "David Otieno",
        role: "Facility Manager, Retail Plaza",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
        quote: "From rewiring our backup generator panel to setting up surge protection, the electrical team was thorough and explained every step. No more outages during storms.",
        name: "Amina Hassan",
        role: "Property Owner",
        avatar: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
]

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
}

const card = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const Testimonials = () => {
    return (
        <section className="container mx-auto space-y-10 px-4 py-20 md:py-36 text-white">
            {/* Header */}
            <div className="space-y-5">
                <div className="flex items-center gap-4">
                    <span className="h-2 w-2 bg-[#4079FFFF]" />
                    <p className="font-mono text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-white/60">
                        What our clients have to say
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-px flex-1 origin-left bg-white/15"
                    />
                </div>
                <p className="max-w-xl text-white/60">
                    Real feedback from clients we've helped with internet, electrical, and security installations.
                </p>
            </div>

            {/* Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
            >
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        variants={card}
                        className="group relative flex flex-col justify-between gap-6 overflow-hidden bg-gradient-to-b from-[#15161a] to-[#0b0c0e] p-6"
                    >
                        <div className="space-y-4">
                            <IconQuotes size={40} stroke={1.5} className="text-[#4079FFFF]" />
                            <p className="text-[15px] leading-relaxed text-white/70">{t.quote}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="h-12 w-12 shrink-0 border border-white/15 object-cover grayscale transition duration-500 group-hover:grayscale-0"
                            />
                            <div className="min-w-0">
                                <h3 className="truncate text-sm font-semibold text-white">{t.name}</h3>
                                <span className="text-xs text-white/50">{t.role}</span>
                            </div>
                        </div>

                        {/* accent line on hover */}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#4079FFFF] transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Testimonials