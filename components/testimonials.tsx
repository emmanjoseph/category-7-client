import React from 'react'
import { IconQuotes } from "@tabler/icons-react";

const testimonials = [
    {
        quote: "Our office internet hasn't dropped once since the switch. The team handled the whole fiber installation in under a day with zero disruption to our work.",
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
        quote: "Reliable internet was non-negotiable for our call center. They ran dedicated fiber lines with failover backup, and we've had 100% uptime since.",
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
    {
        quote: "Security was our biggest concern after a string of break-ins nearby. The motion-sensor lighting and camera coverage they installed gave us real peace of mind.",
        name: "Brian Mwangi",
        role: "Homeowner",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
];

const Testimonials = () => {
    return (
        <div
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
            className="max-w-7xl mx-auto py-10 px-4 space-y-10">
            <div className="flex flex-col space-y-3 items-center">
                <h1 className="text-4xl font-medium text-center">What our clients have to say</h1>
                <p>Real feedback from clients we've helped with internet, electrical, and security installations.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 rounded-xl p-1 bg-neutral-950 border border-neutral-800">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        // ✅ Same alternating pattern preserved: even index = bg-neutral-900, odd = no bg
                        className={`flex flex-col space-y-4 p-3 rounded-xl border border-neutral-800 ${
                            index % 2 === 0 ? "bg-neutral-900" : ""
                        }`}
                    >
                        <IconQuotes size={60} className="text-neutral-500" />

                        <p className="text-base max-w-[350px]">{testimonial.quote}</p>

                        <div className="flex items-center space-x-2">
                            <img
                                src={testimonial.avatar}
                                alt="avatar"
                                className="w-13 h-13 object-cover rounded-xl border-5 border-white"
                            />
                            <div>
                                <h1 className="text-white font-medium text-base">{testimonial.name}</h1>
                                <span className="text-sm text-neutral-500">{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials