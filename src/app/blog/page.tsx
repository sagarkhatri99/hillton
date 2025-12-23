
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: "Health & Wellness Blog | Natural Healing Tips | Hillton",
    description: "Read our latest articles on naturopathy, Ayurveda, healthy living, and natural remedies from the experts at Hillton.",
};

const blogPosts = [
    {
        title: "5 Simple Ways to Detox Your Body Naturally",
        excerpt: "Discover gentle daily practices to support your body's natural detoxification processes without harsh cleanses.",
        date: "October 15, 2023",
        author: "Dr. Sharma",
        slug: "5-ways-to-detox",
        category: "Naturopathy"
    },
    {
        title: "Understanding Your Body Type (Dosha) in Ayurveda",
        excerpt: "Are you Vata, Pitta, or Kapha? Learn the basics of Ayurvedic constitution and how to eat for your type.",
        date: "October 22, 2023",
        author: "Dr. Gupta",
        slug: "understanding-doshas",
        category: "Ayurveda"
    },
    {
        title: "The Healing Power of Hydrotherapy",
        excerpt: "Why water is one of the most powerful tools for pain relief and circulation, and how to use it at home.",
        date: "November 05, 2023",
        author: "Hillton Team",
        slug: "healing-power-hydrotherapy",
        category: "Hydrotherapy"
    },
    {
        title: "Managing Stress in a Fast-Paced World",
        excerpt: "Practical breathing techniques and lifestyle shifts to calm your nervous system instantly.",
        date: "November 12, 2023",
        author: "Dr. Sharma",
        slug: "managing-stress",
        category: "Wellness"
    }
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans text-stone-700 animate-fade-in bg-stone-50">

            {/* Hero */}
            <section className="bg-teal-900 text-cream-50 py-20 md:py-28">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Wellness Narratives</h1>
                    <p className="text-xl opacity-90 leading-relaxed font-light">
                        Insights, tips, and stories to support your journey towards natural health.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link key={index} href={`/blog/${post.slug}`} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col h-full group">
                                <div className="aspect-video bg-stone-200 relative flex items-center justify-center">
                                    <span className="text-stone-400 font-serif italic">[Image Placeholder]</span>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-bold text-secondary uppercase tracking-wider mb-4">
                                        <span>{post.category}</span>
                                        <span className="text-stone-300">•</span>
                                        <div className="flex items-center gap-1 text-stone-400 font-medium normal-case">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4 group-hover:text-primary transition">{post.title}</h2>
                                    <p className="text-stone-600 mb-6 line-clamp-3 flex-grow leading-relaxed">{post.excerpt}</p>

                                    <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-stone-500 font-medium">
                                            <User size={16} />
                                            {post.author}
                                        </div>
                                        <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 text-center">
                        <button className="btn-hover border border-stone-200 bg-white text-stone-600 hover:border-primary hover:text-primary px-8 py-3 rounded-full font-medium transition">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-cream-50 border-t border-stone-100">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">Join Our Community</h2>
                    <p className="text-stone-600 mb-8">Get weekly wellness tips and exclusive offers delivered to your inbox.</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                        />
                        <button className="btn-hover bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold shadow-md hover:shadow-lg transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
