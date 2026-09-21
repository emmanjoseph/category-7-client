"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { motion } from "motion/react"
import {ThreeDMarquee} from "@/components/ui/3d-marquee";
import Image from "next/image";
import ScrollWordReveal from "@/components/scroll-reveal";

const images = [
  "https://plus.unsplash.com/premium_photo-1661657603741-eb321e840777?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlY3VyaXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbGFyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWNhbCUyMHBhbmVsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1549109926-9620d1b9bfa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBmZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661657603741-eb321e840777?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlY3VyaXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbGFyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWNhbCUyMHBhbmVsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1549109926-9620d1b9bfa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBmZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661657603741-eb321e840777?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlY3VyaXR5fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbGFyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWNhbCUyMHBhbmVsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1549109926-9620d1b9bfa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBmZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYXJtJTIwc3lzdGVtfGVufDB8fDB8fHww",

];

export default function ServicesGrid() {
  const features = [
    {
      title: "Get electrical solutions for you",
      description:
        "Certified wiring, panel upgrades, and power maintenance tailored for residential and commercial properties.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Secure your premises",
      description:
        "Advanced CCTV surveillance, smart access control, and 24/7 intrusion monitoring to keep your property safe.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Get blazingly fast internet",
      description:
        "Ultra-fast, low-latency fiber internet engineered to support heavy streaming, seamless remote work, and high-bandwidth business demands.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Customize your projects",
      description:
        "Tailored cabling and electrical setups built to accommodate your unique technical requirements and seamlessly scale as your facility grows",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 mx-auto container py-10 lg:px-6 px-4 lg:py-16">
        <ScrollWordReveal
            kicker="Our platform"
            text="High-performance fiber installations, professional electrical rewiring, and smart security system setups — all tailored to the specific needs of residential and commercial properties."
            startOpacity={0.2}
            spread={0.85}
            wordDuration={0.18}
        />


      <div className="relative">
        <div className="mt-12 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-xl tracking-tight text-black md:text-2xl md:leading-snug dark:text-white">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-2 max-w-sm text-left md:text-sm",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="group mx-auto h-full w-full bg-white p-5 shadow-2xl dark:bg-neutral-900">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <img
            src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cmljaXR5fGVufDB8fDB8fHww"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-left-top"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div
      className="group/image relative flex h-full gap-10"
    >
      <div className="group mx-auto h-full w-full bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
         <Image src={'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={'internet'} width={600} height={600}
          className=" h-full w-full object-cover opacity-60"
         />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1618482914248-29272d021005?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJpdHklMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1533052439013-45751c7b7dc2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxhcm0lMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlY3VyaXR5JTIwc3lzdGVtfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1662727247970-a0660bfeee2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cmljYWwlMjBmZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1774673944402-ba00cfb82a18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGVsZWN0cmljYWwlMjBmZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden p-8">
      {/* TODO */}
      <div className="-ml-20 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60 dark:bg-transparent">
      <Customize className="absolute -right-70 -bottom-80 md:-right-10 md:-bottom-72" />
    </div>
  );
};

export const Customize = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
   <div>
     <div className="w-full overflow-hidden">
       <ThreeDMarquee images={images} />
     </div>
   </div>
  );
};
