import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface PostMeta {
    slug: string
    title: string
    description: string
    tag: string
    date: Date
    author: string
    readTime: number // minutes
    image?: string
}

export interface Post extends PostMeta {
    content: string // raw MDX source
}

const dir = path.join(process.cwd(), "content/blog")

export function getPosts(): Post[] {
    if (!fs.existsSync(dir)) return []
    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".mdx"))
        .map((file): Post => {
            const slug = file.replace(/\.mdx$/, "")
            const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"))
            return {
                slug,
                content,
                title: data.title,
                description: data.description,
                date: new Date(data.date), // handles both YAML dates and quoted strings
                image: data.image || undefined, // was `null`, which `image?: string` rejects
                tag: data.tag || "Guide",
                author: data.author || "Category7", // was missing entirely
                readTime: Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)),
            }
        })
        .sort((a, b) => b.date.getTime() - a.date.getTime()) // Date - Date is a TS error
}

export const getPost = (slug: string): Post | undefined =>
    getPosts().find((p) => p.slug === slug)

export const formatDate = (d: Date): string =>
    d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })