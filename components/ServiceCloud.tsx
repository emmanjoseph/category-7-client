"use client";

import React from "react";
import {
  Battery,
  BoltIcon,
  CableIcon,
  CctvIcon,
  FenceIcon,
  RouteIcon,
  RouterIcon,
  SolarPanelIcon,
  Wifi,
  ZapIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  CctvIcon,
  CableIcon,
  Wifi,
  FenceIcon,
  RouteIcon,
  ZapIcon,
  BoltIcon,
  CctvIcon,
  CableIcon,
  Wifi,
  FenceIcon,
  RouteIcon,
  ZapIcon,
  BoltIcon,
  RouterIcon,
  SolarPanelIcon,
  Battery,
];


const ServiceCloud = () => {
  return (
      <div
          className="overflow-hidden pt-16 lg:px-6 px-4"
          style={{
            maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
      >
        <motion.div
            className="flex w-max items-center gap-10 text-neutral-800"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              },
            }}
        >
          {/* First set */}
          {services.map((Icon, index) => (
              <div key={`first-${index}`} className="shrink-0">
                <Icon size={50} strokeWidth={1.5} />
              </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {services.map((Icon, index) => (
              <div key={`second-${index}`} className="shrink-0">
                <Icon size={50} strokeWidth={1.5} />
              </div>
          ))}
        </motion.div>
      </div>
  );
};

export default ServiceCloud;