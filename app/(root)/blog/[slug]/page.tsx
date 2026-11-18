import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import {getPosts, getPost, formatDate, PostMeta} from "@/lib/blog"
import {Metadata} from "next";
import { ComponentPropsWithoutRef } from "react";
import {MDXRemoteProps} from "next-mdx-remote";

const strip = {
    backgroundImage:
        "repeating-linear-gradient(90deg, #2b2d31 0px, #2b2d31 1px, transparent 1px, transparent 5px)",
}
type Params = { params:Promise<{slug:string}>}

// styles for the markdown content (no typography plugin needed)
const components: MDXRemoteProps["components"] = {
    h2: (p: ComponentPropsWithoutRef<"h2">) => <h2 className="mb-4 mt-12 text-xl font-bold uppercase tracking-tight text-white" {...p} />,
    h3: (p: ComponentPropsWithoutRef<"h3">) => <h3 className="mb-3 mt-8 text-base font-bold uppercase tracking-tight text-white md:text-xl" {...p} />,
    p: (p: ComponentPropsWithoutRef<"p">) => <p className="mb-5 text-[15px] leading-relaxed text-white/70" {...p} />,
    ul: (p: ComponentPropsWithoutRef<"ul">) => <ul className="mb-5 list-[square] space-y-2 pl-5 text-lg text-white/70 marker:text-[#f26a2e]" {...p} />,
    ol: (p: ComponentPropsWithoutRef<"ol">) => <ol className="mb-5 list-decimal space-y-2 pl-5 text-lg text-white/70 marker:text-[#f26a2e]" {...p} />,
    a: (p: ComponentPropsWithoutRef<"a">) => <a className="text-[#f26a2e] underline underline-offset-4" {...p} />,
    blockquote: (p: ComponentPropsWithoutRef<"blockquote">) => <blockquote className="my-8 border-l-4 border-[#f26a2e] pl-5 text-xl text-white/80" {...p} />,
    img: (p: ComponentPropsWithoutRef<"img">) => <img className="my-8 w-full border border-white/10" {...p} />,
    hr: () => <hr className="my-10 border-[#2b2d31]" />,
}

export function generateStaticParams(): { slug: string }[] {
    return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params
    const post = getPost(slug)
    if (!post) return {}
    return {
        title: post.title,
        description: post.description,
        openGraph: { title: post.title, description: post.description, images: post.image ? [post.image] : [] },
    }
}

const Meta = ({ label, value }:{label:string,value:string}) => (
    <div className="flex flex-col gap-2 bg-[#0b0c0e] px-6 py-5 md:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">{label}</span>
        <span className="text-sm font-semibold uppercase tracking-wide">{value}</span>
    </div>
)

const RelatedCard = ({ post }: { post: PostMeta }) => (
    <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col bg-[#0b0c0e] transition-colors hover:bg-[#15161a]"
    >
        <div
            className="relative h-64 overflow-hidden "
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
        <div className="flex flex-1 flex-col gap-5 p-6">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.15em]">
                <span className="text-[#f26a2e]">{post.tag}</span>
                <span className="text-white/50">{formatDate(post.date).toUpperCase()}</span>
            </div>
            <h3 className="text-xl font-bold uppercase leading-[1.1] tracking-tight md:text-2xl">
                {post.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-white/50">{post.description}</p>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-sm font-semibold uppercase tracking-wide">
            <span className="inline-flex items-center gap-2">
                Read article
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </span>
            {post.readTime && (
                <span className="font-mono text-xs font-normal text-white/40">{post.readTime} MIN READ</span>
            )}
        </div>
    </Link>
)

const Post = async ({ params }:Params) => {
    const { slug } = await params
    const post = getPost(slug)
    if (!post) notFound()

    // related: same tag first, then the rest, newest first (as returned by getPosts)
    const others = getPosts().filter((p) => p.slug !== post.slug)
    const related = [
        ...others.filter((p) => p.tag === post.tag),
        ...others.filter((p) => p.tag !== post.tag),
    ].slice(0, 2)

    return (
        <div className="pt-24 text-white">
            <div style={strip} className={'bg-black h-5'}/>
            <div className="px-4">
                <div className="flex flex-col gap-1">
                    {/* header: meta, title, excerpt */}
                    <header className="flex min-h-[22rem] flex-col justify-between gap-16 p-6 md:min-h-[28rem] md:p-10">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
                                <span className="h-2 w-2 bg-[#f26a2e]" />
                                <span className="text-[#f26a2e]">{post.tag}</span>
                                <span className="text-white/60">{formatDate(post.date)}</span>
                                <span className="text-white/60">{post.readTime} min read</span>
                            </p>
                            <Link
                                href="/blog"
                                className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[#f26a2e]"
                            >
                                ← All posts
                            </Link>
                        </div>

                        <div className="space-y-6">
                            <h1 className="max-w-5xl text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                                {post.title}
                            </h1>
                            <p className="max-w-2xl text-lg text-white/60">{post.description}</p>
                        </div>
                    </header>
                    <div style={strip} className={'bg-black h-5'}/>
                    {/* full-bleed cover */}
                    {post.image && (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-72 w-full object-cover md:h-[34rem]"
                        />
                    )}
                    <div style={strip} className={'bg-black h-5'}/>

                    {/* meta strip */}
                    <div className="grid gap-1 sm:grid-cols-3">
                        <Meta label="Written by" value={post.author} />
                        <Meta label="Published" value={formatDate(post.date)} />
                        <Meta label="Reading time" value={`${post.readTime} min read`} />
                    </div>

                    {/* article body */}
                    <article className=" px-6 py-12 md:px-10 md:py-20">
                        <div className="mx-auto max-w-4xl">
                            <MDXRemote source={post.content} components={components} />
                        </div>
                    </article>

                    {/* more entries */}
                    {related.length > 0 && (
                        <>
                            <div className="flex items-center justify-between px-6 py-5 md:px-10">
                                <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                                    <span className="h-2 w-2 bg-[#f26a2e]" />
                                    More entries
                                </h2>
                                <Link
                                    href="/blog"
                                    className="font-mono text-xs uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-[#f26a2e]"
                                >
                                    View all →
                                </Link>
                            </div>
                            <div className="grid gap-1 md:grid-cols-2">
                                {related.map((p) => (
                                    <RelatedCard key={p.slug} post={p} />
                                ))}
                            </div>
                        </>
                    )}
                    <div style={strip} className={'bg-black h-5'}/>
                    {/* CTA */}
                    <div className="grid gap-1 lg:grid-cols-[2fr_1fr]">
                        <div className="flex flex-col justify-end bg-[#0b0c0e] p-6 md:min-h-[18rem] md:p-10">
                            <h2 className="max-w-2xl text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl">
                                Need this done <span className="text-[#f26a2e]">properly?</span>
                            </h2>
                        </div>
                        <div className="flex flex-col justify-between gap-8  p-6 md:p-10">
                            <p className="text-white/50">
                                Tell us what the site has to do. We'll tell you how we'd wire it,
                                secure it and keep it running.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex w-fit items-center gap-2 bg-[#f26a2e] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
                            >
                                Get a quote <span aria-hidden>→</span>
                            </Link>
                        </div>
                    </div>
                    <div style={strip} className={'bg-black h-5'}/>

                </div>
            </div>
        </div>
    )
}

export default Post