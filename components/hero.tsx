"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import Lightfall from "@/components/Lightfall";


const Hero = () => {
    return (
        <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-start justify-end antialiased">
            <Lightfall
                colors={["#ffffff","#40ffaa","#4079ff","#ffd93d","#ff6b6b","#06b6d4","#f97316","#ec4899"]}
                backgroundColor="#6366f1"
                speed={1.1}
                streakCount={7}
                streakWidth={0.7}
                twinkle={0.2}
                backgroundGlow={0.1}
                headGlow={0}
                bloom={0.35}
                mouseInteraction
                holdToWarp
                intro
                streakLength={1}
                density={0.6}
                glow={0.85}
                depth={0.5}
                zoom={1}
                mouseStrength={0.4}
                mouseRadius={0.45}
                lens={0.5}
                fade={0.7}
                lightMode={false}
            />
            <div className="relative z-[110] p-4 pb-24 container w-full mx-auto flex flex-col">
                <h1 className="text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-medium md:max-w-6xl">
                    Expertly engineered <br/>  infrastructure designed to keep your facilities seamlessly connected
                </h1>

                <div className="max-w-sm mt-5">
                    <Button asChild className="h-10 rounded-sm font-semibold">
                        <Link href="#contact">
                            Let's Get Started
                        </Link>
                    </Button>
                    <Button variant="outline" className="ml-2 h-10 rounded-sm font-semibold">
                        More about us
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[100] h-20 bg-gradient-to-t to-transparent dark:from-black" />
        </div>
    );
};

export default Hero;
