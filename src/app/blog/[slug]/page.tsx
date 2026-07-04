import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "../blogData";

interface BlogDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Hilton",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Hilton`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-700 animate-fade-in font-serif">
      <section className="bg-primary text-cream-50 py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-cream-50/90 hover:text-white mb-8 transition font-sans"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-cream-50/80 mb-6 font-sans">
            <span>{post.category}</span>
            <span className="text-cream-50/50">•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-base text-cream-50/80 font-sans">
            <User size={16} />
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl overflow-hidden shadow-sm border border-stone-100 bg-white mb-10">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <article className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-8 font-sans">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-stone-600 font-serif">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn-hover bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition shadow-md hover:shadow-lg inline-flex items-center gap-2 font-sans"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
