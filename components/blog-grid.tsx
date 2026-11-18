"use client"
import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import {PostMeta} from "@/lib/blog";
interface Post {
    slug: string
    title: string
    description: string
    tag: string
    date: Date
    image?: string
    readTime: number
    author?: string
}
const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}

const fmt = (d:Date) =>
    new Date(d)
        .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
        .toUpperCase()

const Cover = ({ post, className = "" }:{post:Post, className?:string}) => (
    <div
        className={`relative overflow-hidden bg-[#15161a] ${className}`}
        style={post.image ? undefined : strip}
    >
        {post.image && (
            <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        )}
    </div>
)

const Meta = ({ post }: {post:Post}) => (
    <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.15em]">
        <span className="text-[#f26a2e]">{post.tag}</span>
        <span className="text-white/50">{fmt(post.date)}</span>
    </div>
)

const ReadRow = ({ post }:{post:Post}) => (
    <div className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-sm font-semibold uppercase tracking-wide">
        <span className="inline-flex items-center gap-2">
            Read article
            <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
            >
                →
            </span>
        </span>
        {post.readTime && (
            <span className="font-mono text-xs font-normal text-white/40">
                {post.readTime} MIN READ
            </span>
        )}
    </div>
)

/* ---------- featured: image cell + text cell ---------- */
const Featured = ({ post }:{post:Post}) => (
    <Link
        href={`/blog/${post.slug}`}
        className="group grid gap-1 lg:grid-cols-[1.4fr_1fr]"
    >
        <Cover post={post} className="h-80 lg:h-auto lg:min-h-[34rem]" />
        <div className="flex flex-col justify-between bg-[#0b0c0e] transition-colors group-hover:bg-[#15161a]">
            <div className="flex flex-1 flex-col justify-between gap-12 p-6 md:p-10">
                <Meta post={post} />
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl">
                        {post.title}
                    </h2>
                    <p className="line-clamp-3 max-w-md text-white/50">{post.description}</p>
                </div>
            </div>
            <ReadRow post={post} />
        </div>
    </Link>
)

/* ---------- entry card ---------- */
const Card = ({ post }:{post:Post}) => (
    <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col bg-[#0b0c0e] transition-colors hover:bg-[#15161a]"
    >
        <Cover post={post} className="h-64" />
        <div className="flex flex-1 flex-col gap-5 p-6">
            <Meta post={post} />
            <h3 className="text-xl font-bold uppercase leading-[1.1] tracking-tight md:text-2xl">
                {post.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-white/50">
                {post.description}
            </p>
        </div>
        <ReadRow post={post} />
    </Link>
)
type BlogPost = PostMeta & { readTime: number }
const BlogGrid = ({ posts }:{posts:BlogPost[]}) => {
    const [cat, setCat] = useState("All")

    const hero = posts[0]
    const categories = ["All", ...new Set(posts.map((p) => p.tag))]
    const filtered = (cat === "All" ? posts : posts.filter((p) => p.tag === cat)).filter(
        (p) => p.slug !== hero?.slug
    )
    // keep the last row of the 3-col grid filled so no grey shows through
    const fillers = (3 - (filtered.length % 3)) % 3

    if (!hero) {
        return <div className="bg-[#0b0c0e] p-10 text-white/60">No posts yet.</div>
    }

    return (
        <>
            <Featured post={hero} />

            {/* all entries bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0b0c0e] px-6 py-5 md:px-10">
                <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                    <span className="h-2 w-2 bg-[#f26a2e]" />
                    All entries
                </h2>

                <div className="flex flex-wrap gap-1">
                    {categories.map((c) => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => setCat(c)}
                            className={`border px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                                cat === c
                                    ? "border-[#f26a2e] bg-[#f26a2e] text-black"
                                    : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={cat}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {filtered.length === 0 ? (
                        <div className="bg-[#0b0c0e] p-10 text-white/60">
                            No posts in this category yet.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((post:BlogPost) => (
                                <Card key={post.slug} post={post} />
                            ))}
                            {Array.from({ length: fillers }).map((_, i) => (
                                <div key={i} className="hidden bg-[#0b0c0e] lg:block" />
                            ))}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default BlogGrid