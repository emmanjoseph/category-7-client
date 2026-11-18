import Link from "next/link"
import BlogGrid from "@/components/blog-grid"
import { getPosts } from "@/lib/blog"
import React from "react";
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Blog",
    description: "Guides on fibre, electrical, security and networking.",
}
const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}
const readTime = (content = "") =>
    Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))

const lattice = {
    backgroundImage:
        "repeating-linear-gradient(45deg, #3a3c41 0 1px, transparent 1px 22px), repeating-linear-gradient(-45deg, #3a3c41 0 1px, transparent 1px 22px)",
}

const Page = () => {
    // compute read time, then strip the heavy `content` field before the client component
    const posts = getPosts().map(({ content, ...rest }) => ({
        ...rest,
        readTime: readTime(content),
    }))

    return (
        <div className="pb-16 pt-24 text-white">
            <div style={strip} className="h-5 w-full bg-[#0b0c0e]" />
            <div className="px-4">
                <div className="flex flex-col gap-1 bg-[#2b2d31]">
                    {/* header */}
                    <div className="grid gap-1 lg:grid-cols-[2fr_1fr]">
                        <div className="flex min-h-[26rem] flex-col justify-between bg-[#0b0c0e] p-6 md:min-h-[32rem] md:p-10">
                            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                                <span className="h-2 w-2 bg-[#f26a2e]" />
                                Blog &amp; Guides
                            </p>

                            <div>
                                <h1 className="text-[clamp(3.5rem,13vw,11rem)] font-bold uppercase leading-[0.9] tracking-tight">
                                    Journal
                                </h1>
                                <p className="mt-8 max-w-md text-base leading-relaxed text-white/50">
                                    Notes from the field. How we plan, install and secure
                                    fibre, electrical and network systems, written by the
                                    people who do the work.
                                </p>
                            </div>
                        </div>

                        <div className="hidden bg-[#0b0c0e] lg:block" style={lattice} />
                    </div>

                    <BlogGrid posts={posts} />

                    {/* closing CTA */}
                    <div className="grid gap-1 lg:grid-cols-[2fr_1fr]">
                        <div className="flex flex-col justify-end bg-[#0b0c0e] p-6 md:min-h-[18rem] md:p-10">
                            <h2 className="max-w-2xl text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl">
                                Need a network that{" "}
                                <span className="text-[#f26a2e]">just works?</span>
                            </h2>
                        </div>
                        <div className="flex flex-col justify-between gap-8 bg-[#0b0c0e] p-6 md:p-10">
                            <p className="text-white/50">
                                Tell us what the site has to do. We'll tell you how we'd wire
                                it, secure it and keep it running.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex w-fit items-center gap-2 bg-[#f26a2e] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
                            >
                                Start a project <span aria-hidden>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page