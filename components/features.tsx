"use client"
import React, { useId } from "react"
import { motion } from "framer-motion"
import { Cable, Zap, Cctv, KeyRound, BatteryCharging, ShieldAlert, Network, Headset } from "lucide-react"

const grid = [
  { icon: Cable, title: "High-Speed Fiber Internet", description: "Dedicated fiber optic connectivity delivering high-speed, low-latency services with guaranteed uptime for residential and commercial spaces." },
  { icon: Zap, title: "Complete Electrical Rewiring", description: "Full-service electrical wiring, system upgrades, panel replacements, and surge protection designed to meet code and safety standards." },
  { icon: Cctv, title: "Smart CCTV & Surveillance", description: "24/7 high-definition camera systems featuring motion detection, night vision, and real-time remote monitoring via mobile app." },
  { icon: KeyRound, title: "Access Control & Intercoms", description: "Advanced keycard, biometric, and video door entry systems to manage and audit access to your premises securely." },
  { icon: BatteryCharging, title: "Backup Power & Generator Setup", description: "Seamless integration of backup power generators and solar array failovers to keep your services and critical hardware running during outages." },
  { icon: ShieldAlert, title: "Smart Intrusion Detection", description: "Integrated motion sensors, perimeter alarms, and glass-break detectors linked directly to instant mobile notifications and response units." },
  { icon: Network, title: "Network Infrastructure & Cabling", description: "Structured Cat6/Cat7 Ethernet cabling, server rack installations, and commercial Wi-Fi access point deployment for optimal coverage." },
  { icon: Headset, title: "24/7 Emergency Support", description: "Round-the-clock technical assistance and rapid on-site dispatch for urgent electrical faults or network disruptions." },
]

// fixed patterns (no Math.random, so SSR and client match)
const patterns = [
  [[8, 2], [9, 4], [7, 1], [10, 5], [8, 6]],
  [[9, 1], [7, 3], [10, 2], [8, 5], [9, 6]],
  [[7, 2], [10, 1], [8, 4], [9, 3], [7, 6]],
  [[10, 3], [8, 1], [9, 5], [7, 4], [10, 6]],
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function FeaturesSection() {
  return (
      <section className="w-full py-36">
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="container mx-auto grid grid-cols-1 gap-px  px-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {grid.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                  key={title}
                  variants={card}
                  whileHover="hover"
                  className="group relative overflow-hidden bg-gradient-to-b from-[#15161a] to-[#0b0c0e] p-6"
              >
                <Grid size={20} pattern={patterns[i % patterns.length]} />

                <motion.div
                    variants={{ hover: { y: -3, rotate: -4 } }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-20 mb-5 flex h-11 w-11 items-center justify-center border border-white/10 bg-[#101114] text-[#4079FFFF]"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </motion.div>

                <p className="relative z-20 text-base font-bold text-white">{title}</p>
                <p className="relative z-20 mt-3 text-[15px] leading-relaxed text-white/60">{description}</p>

                {/* accent line on hover */}
                <span className="absolute bottom-0 left-0 z-20 h-0.5 w-0 bg-[#4079FFFF] transition-all duration-500 group-hover:w-full" />
              </motion.div>
          ))}
        </motion.div>
      </section>
  )
}

export const Grid = ({ pattern, size }: { pattern: number[][]; size?: number }) => (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
            width={size ?? 20}
            height={size ?? 20}
            x="-12"
            y="4"
            squares={pattern}
            className="absolute inset-0 h-full w-full fill-white/10 stroke-white/10 mix-blend-overlay"
        />
      </div>
    </div>
)

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId()
  return (
      <svg aria-hidden="true" {...props}>
        <defs>
          <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
            <path d={`M.5 ${height}V.5H${width}`} fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
        {squares && (
            <svg x={x} y={y} className="overflow-visible">
              {squares.map(([sx, sy]: number[], index: number) => (
                  <rect key={`${sx}-${sy}-${index}`} strokeWidth="0" width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
              ))}
            </svg>
        )}
      </svg>
  )
}