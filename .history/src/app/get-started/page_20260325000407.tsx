'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

type Tab = 'signin' | 'signup';

export default function GetStartedPage() {
  const [tab, setTab] = useState<Tab>('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black flex flex-col items-center justify-center pt-16 pb-20 px-6">

        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-125 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full max-w-md">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img
                src="https://impeccify.com/_next/static/media/diamond.c957ae43.svg"
                alt="Impeccify"
                className="w-8 h-8"
              />
              <span className="text-white font-bold text-xl tracking-tight">IMPECCIFY</span>
            </Link>
            <h1 className="text-2xl font-bold text-white tracking-tight text-center">
              {tab === 'signup' ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="text-sm text-gray-500 mt-1 text-center">
              {tab === 'signup'
                ? 'Start building something great today.'
                : 'Sign in to your Impeccify account.'}
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/4 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">

            {/* Tab switcher */}
            <div className="flex bg-white/5 border border-white/8 rounded-xl p-1 mb-7">
              {(['signup', 'signin'] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    tab === t
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {t === 'signup' ? 'Sign Up' : 'Sign In'}
                </button>
              ))}
            </div>

            {tab === 'signup' ? (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">First name</label>
                    <input
                      type="text"
                      placeholder="John"
                      autoComplete="given-name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Last name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      autoComplete="family-name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Email address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      autoComplete="new-password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Confirm password</label>
                  <div className="relative">
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      placeholder="Repeat your password"
                      autoComplete="new-password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                    >
                      {showConfirm ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer mt-1">
                  <div className="relative mt-0.5 shrink-0">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-4 h-4 rounded bg-white/5 border border-white/20 peer-checked:bg-white peer-checked:border-white transition-all" />
                    <svg className="absolute inset-0 m-auto w-2.5 h-2.5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    I agree to the{' '}
                    <Link href="#" className="text-white underline underline-offset-2 hover:text-gray-200">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="#" className="text-white underline underline-offset-2 hover:text-gray-200">Privacy Policy</Link>
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-white/8 border border-white/15 text-white font-semibold py-3 rounded-xl text-sm hover:bg-white/12 hover:border-white/25 active:scale-[0.98] transition-all duration-200 mt-2"
                >
                  Create Account
                </button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/8" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-[#0a0a0a] px-3 text-xs text-gray-600">or</span>
                  </div>
                </div>

                <p className="text-center text-xs text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setTab('signin')}
                    className="text-white font-semibold hover:text-gray-200 transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Email address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-medium text-gray-400">Password</label>
                    <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white/8 border border-white/15 text-white font-semibold py-3 rounded-xl text-sm hover:bg-white/12 hover:border-white/25 active:scale-[0.98] transition-all duration-200 mt-2"
                >
                  Sign In
                </button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/8" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-[#0a0a0a] px-3 text-xs text-gray-600">or</span>
                  </div>
                </div>

                <p className="text-center text-xs text-gray-600">
                  Don&apos;t have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setTab('signup')}
                    className="text-white font-semibold hover:text-gray-200 transition-colors"
                  >
                    Sign up free
                  </button>
                </p>
              </form>
            )}
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-700 mt-6">
            © 2026 Impeccify · <Link href="/" className="hover:text-gray-500 transition-colors">Home</Link> · <Link href="/tools" className="hover:text-gray-500 transition-colors">Free Tools</Link> · <Link href="/blog" className="hover:text-gray-500 transition-colors">Blog</Link>
          </p>
        </div>
      </main>
    </>
  );
}
