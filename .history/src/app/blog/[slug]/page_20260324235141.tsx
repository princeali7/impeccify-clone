import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import Header from '@/components/Header';
import { postsBySlug, posts, categoryColors } from '@/lib/blog-data';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = postsBySlug[slug];
  if (!post) notFound();

  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const badgeClass = categoryColors[post.category] ?? 'bg-white/10 text-gray-400 border-white/10';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8 mt-6">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-500 truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>
                {post.category}
              </span>
              <span className="text-sm text-gray-600">{post.date}</span>
              <span className="text-sm text-gray-600">&middot;</span>
              <span className="text-sm text-gray-600">{post.readTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              {post.desc}
            </p>
          </div>

          <div className="border-t border-white/8 mb-10" />

          {/* Article body placeholder */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300 leading-relaxed text-base">
              <p>{post.desc}</p>

              <div className="bg-white/4 border border-white/8 rounded-2xl p-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Full article coming soon</h3>
                    <p className="text-sm text-gray-500">
                      We&apos;re adding full article content to every post. In the meantime, check out our free tools or book a call to talk with us directly.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <Link
                        href="/tools"
                        className="text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full transition-all duration-200"
                      >
                        Browse Free Tools
                      </Link>
                      <Link
                        href="/book-call"
                        className="text-sm font-semibold text-black bg-white hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-200"
                      >
                        Book a Call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <div className="border-t border-white/8 mb-8" />
              <h2 className="text-lg font-bold text-white mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col gap-2 bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/20 rounded-xl p-4 transition-all duration-200 active:scale-[0.98]"
                  >
                    <span className={`self-start inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[r.category] ?? 'bg-white/10 text-gray-400 border-white/10'}`}>
                      {r.category}
                    </span>
                    <span className="text-sm font-semibold text-white leading-snug line-clamp-3 group-hover:text-gray-100 transition-colors">
                      {r.title}
                    </span>
                    <span className="text-xs text-gray-600 mt-auto">{r.readTime} min read</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-white/8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
