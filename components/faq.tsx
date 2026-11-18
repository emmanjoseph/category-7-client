"use client"
import React from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"

const faqs = [
    {
        question: 'What services does Category 7+ offer',
        answer: 'Category 7+ provides fully integrated solutions covering Fibre & Internet, Electrical Rewiring, CCTV & Security, and Structured Cabling & Networking. All systems are planned together to eliminate blind handoffs between different contractors.'
    },
    {
        question: 'Are your installation projects customizable?',
        answer: 'Yes, projects are fully customizable to fit specific requirements, whether you need a single service or an end-to-end combination of internet, power, and security infrastructure.'
    },
    {
        question: 'Can I monitor my security system remotely?',
        answer: "Yes, the CCTV and security setups include HD cameras, motion sensors, and access control with live monitoring directly accessible via your mobile phone."
    },
    {
        question: 'Where are you located, and how can I get in touch?',
        answer: 'The physical office is located at Viewpark Towers, Utalii Street, Nairobi, Kenya. You can reach the team via phone at +254 722 966 576 or +254 733 966 576, or by email at info@category7.co.ke.'
    }
]

const Faq = () => {
    const [expand, setExpand] = React.useState(0)

    const onClick = (i:any) => setExpand(expand === i ? null : i)

    return (
        <section className="container mx-auto px-4 py-26">
            <div className="flex items-center gap-4">
                <span className="h-2 w-2 bg-[#4079FFFF]" />
                <p className="font-mono text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-white/60">
                    Frequently Asked Questions
                </p>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px flex-1 origin-left bg-white/15"
                />
            </div>

            <div className="mt-10 border-t border-white/10">
                {faqs.map((faq, i) => {
                    const open = expand === i
                    return (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="border-b border-white/10"
                        >
                            <button
                                type="button"
                                onClick={() => onClick(i)}
                                aria-expanded={open}
                                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                            >
                                <span className="flex items-center gap-5">
                                    <span className="font-mono text-xs tracking-widest text-[#4079FFFF]">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span
                                        className={`text-lg font-bold uppercase tracking-tight transition-colors md:text-2xl ${
                                            open ? "text-white" : "text-white/70 group-hover:text-white"
                                        }`}
                                    >
                                        {faq.question}
                                    </span>
                                </span>

                                <motion.span
                                    animate={{ rotate: open ? 45 : 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
                                        open
                                            ? "border-[#4079FFFF] bg-[#4079FFFF] text-black"
                                            : "border-white/15 text-white/60 group-hover:border-[#4079FFFF] group-hover:text-[#4079FFFF]"
                                    }`}
                                >
                                    <Plus className="h-4 w-4" />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {open && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="max-w-2xl pb-6 pl-10 leading-relaxed text-white/60 md:pl-12">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Faq