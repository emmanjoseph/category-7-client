'use client'
import React from 'react'
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className={'overflow-hidden'}>
            <div className={'max-h-[50vh]'}>
                <AuroraBackground className={'h-[50vh]'}>
                    <div className={'bg-black w-full h-full flex items-end justify-end'}>
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="relative flex flex-col gap-4 items-start justify-start px-4 container mx-auto text-white"
                        >
                            <h1 className={'text-4xl md:text-6xl font-extrabold'}>Comprehensive <br/> Cabling Solutions</h1>
                            <p className={'text-base max-w-xl font-medium'}> Expertly engineered infrastructure designed to keep your facilities seamlessly connected, powered, and fully protected around the clock.</p>

                        </motion.div>
                    </div>

                </AuroraBackground>
            </div>

        </div>
    )
}
export default Hero

