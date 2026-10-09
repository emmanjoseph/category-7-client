"use client";
import React from "react";
import {BackgroundBeams} from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";


const Hero = () => {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-start justify-end antialiased">
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
            <BackgroundBeams />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[100] h-20 bg-gradient-to-t to-transparent dark:from-black" />
        </div>
    );
};

export default Hero;
