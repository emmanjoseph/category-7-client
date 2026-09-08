"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { IconAssembly, IconUsers } from "@tabler/icons-react";

const stats = [
    {
        title: 'Projects completed',
        number: 5000,
        suffix: '+',
        icon: <IconAssembly />,
        colors: [[236, 72, 153], [232, 121, 249]],
    },
    {
        title: 'Happy clients',
        number: 3000,
        suffix: '+',
        icon: <IconUsers />,
        colors: [[59, 130, 246], [139, 92, 246]],
    },
    {
        title: 'Customer retention',
        number: 100,
        suffix: '%',
        icon: <IconUsers />,
        colors: [[34, 197, 94], [16, 185, 129]],
    },
    {
        title: 'Customer retention',
        number: 100,
        suffix: '%',
        icon: <IconUsers />,
        colors: [[34, 197, 94], [16, 185, 129]],
    },
    {
        title: 'Awards won',
        number: 10,
        suffix: '+',
        icon: <IconUsers />,
        colors: [[251, 146, 60], [250, 204, 21]],
    }
]

const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

const StatCard = ({ stat }: { stat: typeof stats[number] }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative h-64"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-black"
                            colors={stat.colors}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 text-center">
                <div className="flex items-center justify-center text-black dark:text-white group-hover/canvas-card:text-white transition duration-200 mb-2">
                    {stat.icon}
                </div>
                <div className="text-4xl font-bold flex items-center justify-center text-black dark:text-white group-hover/canvas-card:text-white transition duration-200">
                    {stat.number}
                    <span className="text-2xl font-normal ml-2">{stat.suffix}</span>
                </div>
                <p className="text-center text-neutral-500 group-hover/canvas-card:text-neutral-200 mt-2 transition duration-200">
                    {stat.title}
                </p>
            </div>
        </div>
    )
}

const Stats = () => {
    return (
        <div className={'lg:px-6 px-4 container mx-auto py-20 '}>
            <div className="grid md:grid-cols-5 gap-4">
                {stats.map((stat, idx) => (
                    <StatCard stat={stat} key={stat.title + idx} />
                ))}
            </div>
        </div>
    )
}
export default Stats