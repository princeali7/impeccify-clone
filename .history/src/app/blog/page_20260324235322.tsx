'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { posts, categoryColors } from '@/lib/blog-data';

const categories = ['All', 'Math', 'Education', 'Health', 'Astrology', 'CSS', 'Developer', 'Design', 'Business', 'Tools', 'Services'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-10 pb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-xs text-gray-400 tracking-wide uppercase font-medium">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Guides, tutorials, and resources for web developers and designers. Learn about CSS, web development, design, and more.
          </p>
        </section>

        {/* Category filter */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/20 rounded-2xl p-5 transition-all duration-200 active:scale-[0.98]"
              >
                {/* Meta row */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? 'bg-white/10 text-gray-400 border-white/10'}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-600">{post.date}</span>
                  <span className="text-xs text-gray-600">&middot;</span>
                  <span className="text-xs text-gray-600">{post.readTime} min read</span>
                </div>

                {/* Title */}
                <h2 className="text-sm font-semibold text-white leading-snug mb-2 line-clamp-3 group-hover:text-gray-100 transition-colors">
                  {post.title}
                </h2>

                {/* Desc */}
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
                  {post.desc}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-white/60 group-hover:text-white transition-colors duration-200">
                  Read Article
                  <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-600">No posts in this category yet.</div>
          )}
        </section>

        {/* Footer bar */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/6 pt-8">
            <p className="text-sm text-gray-600">{posts.length} articles and counting.</p>
            <Link
              href="/book-call"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              Want a website built?
              <span className="text-white font-semibold">Book a call →</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
