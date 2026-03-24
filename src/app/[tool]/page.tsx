'use client';
import { use, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { toolsBySlug } from '@/lib/tools-data';
import { notFound } from 'next/navigation';

// ─── CSS Unit Converter ────────────────────────────────────────────────────────

type CSSConverterConfig = {
  inputLabel: string;
  inputUnit: string;
  outputLabel: string;
  outputUnit: string;
  secondaryLabel?: string;
  secondaryDefault?: number;
  secondaryUnit?: string;
  compute: (input: number, secondary: number) => number;
  formula: string;
  refTable?: { input: number; output: number }[];
};

const cssConfigs: Record<string, CSSConverterConfig> = {
  'px-to-rem-converter': {
    inputLabel: 'Pixels',
    inputUnit: 'px',
    outputLabel: 'REM',
    outputUnit: 'rem',
    secondaryLabel: 'Root font size',
    secondaryDefault: 16,
    secondaryUnit: 'px',
    compute: (px, base) => px / base,
    formula: 'rem = px ÷ base font size',
    refTable: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72].map((px) => ({
      input: px,
      output: +(px / 16).toFixed(4),
    })),
  },
  'rem-to-px-converter': {
    inputLabel: 'REM',
    inputUnit: 'rem',
    outputLabel: 'Pixels',
    outputUnit: 'px',
    secondaryLabel: 'Root font size',
    secondaryDefault: 16,
    secondaryUnit: 'px',
    compute: (rem, base) => rem * base,
    formula: 'px = rem × base font size',
    refTable: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4].map((rem) => ({
      input: rem,
      output: rem * 16,
    })),
  },
  'px-to-em-converter': {
    inputLabel: 'Pixels',
    inputUnit: 'px',
    outputLabel: 'EM',
    outputUnit: 'em',
    secondaryLabel: 'Parent font size',
    secondaryDefault: 16,
    secondaryUnit: 'px',
    compute: (px, parent) => px / parent,
    formula: 'em = px ÷ parent font size',
  },
  'em-to-px-converter': {
    inputLabel: 'EM',
    inputUnit: 'em',
    outputLabel: 'Pixels',
    outputUnit: 'px',
    secondaryLabel: 'Parent font size',
    secondaryDefault: 16,
    secondaryUnit: 'px',
    compute: (em, parent) => em * parent,
    formula: 'px = em × parent font size',
  },
  'px-to-vw-converter': {
    inputLabel: 'Pixels',
    inputUnit: 'px',
    outputLabel: 'Viewport Width',
    outputUnit: 'vw',
    secondaryLabel: 'Viewport width',
    secondaryDefault: 1440,
    secondaryUnit: 'px',
    compute: (px, vp) => (px / vp) * 100,
    formula: 'vw = (px ÷ viewport width) × 100',
  },
  'px-to-vh-converter': {
    inputLabel: 'Pixels',
    inputUnit: 'px',
    outputLabel: 'Viewport Height',
    outputUnit: 'vh',
    secondaryLabel: 'Viewport height',
    secondaryDefault: 900,
    secondaryUnit: 'px',
    compute: (px, vp) => (px / vp) * 100,
    formula: 'vh = (px ÷ viewport height) × 100',
  },
  'px-to-percent-converter': {
    inputLabel: 'Pixels',
    inputUnit: 'px',
    outputLabel: 'Percentage',
    outputUnit: '%',
    secondaryLabel: 'Parent width',
    secondaryDefault: 1440,
    secondaryUnit: 'px',
    compute: (px, parent) => (px / parent) * 100,
    formula: '% = (px ÷ parent width) × 100',
  },
  'pt-to-px-converter': {
    inputLabel: 'Points',
    inputUnit: 'pt',
    outputLabel: 'Pixels',
    outputUnit: 'px',
    compute: (pt) => pt * (96 / 72),
    formula: 'px = pt × (96 ÷ 72)',
    refTable: [6, 8, 9, 10, 11, 12, 14, 16, 18, 24, 36, 48, 72].map((pt) => ({
      input: pt,
      output: +(pt * (96 / 72)).toFixed(2),
    })),
  },
  'px-to-cm-converter': {
    inputLabel: 'Pixels',
    inputUnit: 'px',
    outputLabel: 'Centimeters',
    outputUnit: 'cm',
    secondaryLabel: 'DPI',
    secondaryDefault: 96,
    secondaryUnit: 'dpi',
    compute: (px, dpi) => (px / dpi) * 2.54,
    formula: 'cm = (px ÷ DPI) × 2.54',
  },
};

function CSSConverter({ config }: { config: CSSConverterConfig }) {
  const [input, setInput] = useState('16');
  const [secondary, setSecondary] = useState(String(config.secondaryDefault ?? 16));

  const inputVal = parseFloat(input) || 0;
  const secVal = parseFloat(secondary) || (config.secondaryDefault ?? 16);
  const result = config.compute(inputVal, secVal);
  const formatted = isFinite(result) ? +result.toFixed(6) : '—';

  return (
    <div className="space-y-4">
      {/* Inputs row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/4 border border-white/10 rounded-xl p-4">
          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">
            {config.inputLabel}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-bold text-white outline-none w-0"
              placeholder="16"
            />
            <span className="text-gray-500 text-sm font-mono">{config.inputUnit}</span>
          </div>
        </div>

        {config.secondaryLabel && (
          <div className="bg-white/4 border border-white/10 rounded-xl p-4">
            <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">
              {config.secondaryLabel}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                className="flex-1 bg-transparent text-2xl font-bold text-white outline-none w-0"
              />
              <span className="text-gray-500 text-sm font-mono">{config.secondaryUnit}</span>
            </div>
          </div>
        )}
      </div>

      {/* Output */}
      <div className="bg-white/6 border border-white/15 rounded-xl p-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">{config.outputLabel}</p>
          <p className="text-4xl font-bold text-white">
            {formatted}
            <span className="text-xl text-gray-400 ml-1">{config.outputUnit}</span>
          </p>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(String(formatted))}
          className="text-xs text-gray-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2"
        >
          Copy
        </button>
      </div>

      {/* Formula */}
      <div className="bg-white/2 border border-white/8 rounded-xl p-4 text-center">
        <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Formula</p>
        <p className="text-sm text-gray-300 font-mono">{config.formula}</p>
      </div>

      {/* Quick Reference Table */}
      {config.refTable && (
        <div className="mt-6">
          <h3 className="text-base font-semibold text-white mb-3">Quick Reference Table</h3>
          <div className="overflow-hidden border border-white/8 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8 bg-white/3">
                  <th className="px-4 py-3 text-left text-gray-500 font-medium">{config.inputLabel} ({config.inputUnit})</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium">{config.outputUnit.toUpperCase()}</th>
                </tr>
              </thead>
              <tbody>
                {config.refTable.map((row, i) => (
                  <tr key={i} className="border-b border-white/4 hover:bg-white/2 transition-colors">
                    <td className="px-4 py-2.5 text-gray-300">{row.input}{config.inputUnit}</td>
                    <td className="px-4 py-2.5 text-white font-medium">{row.output}{config.outputUnit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Color Converter ───────────────────────────────────────────────────────────

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace('#', '');
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn: h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6; break;
      case gn: h = ((bn - rn) / d + 2) / 6; break;
      case bn: h = ((rn - gn) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  const hn = h / 360, sn = s / 100, ln = l / 100;
  let r = ln, g = ln, b = ln;
  if (sn !== 0) {
    const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
    const p = 2 * ln - q;
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    r = hue2rgb(p, q, hn + 1 / 3);
    g = hue2rgb(p, q, hn);
    b = hue2rgb(p, q, hn - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function ColorConverter({ slug }: { slug: string }) {
  const [hex, setHex] = useState('#3b82f6');
  const [r, setR] = useState('59');
  const [g, setG] = useState('130');
  const [b, setB] = useState('246');
  const [h, setH] = useState('217');
  const [s, setS] = useState('91');
  const [l, setL] = useState('60');

  const previewColor =
    slug === 'hex-to-rgb-converter' || slug === 'hex-to-hsl-converter'
      ? hex
      : slug === 'rgb-to-hex-converter'
      ? rgbToHex(+r, +g, +b)
      : rgbToHex(...Object.values(hslToRgb(+h, +s, +l)) as [number, number, number]);

  const renderInput = () => {
    if (slug === 'hex-to-rgb-converter' || slug === 'hex-to-hsl-converter') {
      return (
        <div className="bg-white/4 border border-white/10 rounded-xl p-4">
          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">HEX Color</label>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-white/10 shrink-0" style={{ backgroundColor: hex }} />
            <input
              type="text"
              value={hex}
              onChange={(e) => setHex(e.target.value.startsWith('#') ? e.target.value : '#' + e.target.value)}
              className="flex-1 bg-transparent text-2xl font-bold text-white outline-none font-mono"
              placeholder="#3b82f6"
            />
          </div>
        </div>
      );
    }
    if (slug === 'rgb-to-hex-converter') {
      return (
        <div className="bg-white/4 border border-white/10 rounded-xl p-4">
          <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">RGB Values</label>
          <div className="grid grid-cols-3 gap-3">
            {[{ label: 'R', val: r, set: setR }, { label: 'G', val: g, set: setG }, { label: 'B', val: b, set: setB }].map((ch) => (
              <div key={ch.label}>
                <p className="text-xs text-gray-600 mb-1">{ch.label}</p>
                <input
                  type="number" min={0} max={255}
                  value={ch.val}
                  onChange={(e) => ch.set(e.target.value)}
                  className="w-full bg-transparent text-xl font-bold text-white outline-none border-b border-white/10 pb-1"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="bg-white/4 border border-white/10 rounded-xl p-4">
        <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">HSL Values</label>
        <div className="grid grid-cols-3 gap-3">
          {[{ label: 'H°', val: h, set: setH }, { label: 'S%', val: s, set: setS }, { label: 'L%', val: l, set: setL }].map((ch) => (
            <div key={ch.label}>
              <p className="text-xs text-gray-600 mb-1">{ch.label}</p>
              <input
                type="number"
                value={ch.val}
                onChange={(e) => ch.set(e.target.value)}
                className="w-full bg-transparent text-xl font-bold text-white outline-none border-b border-white/10 pb-1"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderOutput = () => {
    if (slug === 'hex-to-rgb-converter') {
      const rgb = hexToRgb(hex);
      const val = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : 'Invalid hex';
      return { label: 'RGB', value: val };
    }
    if (slug === 'hex-to-hsl-converter') {
      const rgb = hexToRgb(hex);
      if (!rgb) return { label: 'HSL', value: 'Invalid hex' };
      const { h: hv, s: sv, l: lv } = rgbToHsl(rgb.r, rgb.g, rgb.b);
      return { label: 'HSL', value: `hsl(${hv}, ${sv}%, ${lv}%)` };
    }
    if (slug === 'rgb-to-hex-converter') {
      return { label: 'HEX', value: rgbToHex(+r, +g, +b).toUpperCase() };
    }
    const rgb = hslToRgb(+h, +s, +l);
    return { label: 'HEX', value: rgbToHex(rgb.r, rgb.g, rgb.b).toUpperCase() };
  };

  const out = renderOutput();

  return (
    <div className="space-y-4">
      {renderInput()}

      <div className="bg-white/6 border border-white/15 rounded-xl p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-white/10 shrink-0" style={{ backgroundColor: previewColor }} />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">{out.label}</p>
            <p className="text-2xl font-bold text-white font-mono">{out.value}</p>
          </div>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(out.value)}
          className="text-xs text-gray-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 shrink-0"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

// ─── Coming Soon placeholder ───────────────────────────────────────────────────
function ComingSoon({ name }: { name: string }) {
  return (
    <div className="bg-white/2 border border-white/8 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-white font-semibold text-lg mb-2">{name}</p>
      <p className="text-sm text-gray-600">This tool is coming soon.</p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool: slug } = use(params);
  const entry = toolsBySlug[slug];
  if (!entry) notFound();

  const { tool, category } = entry;
  const relatedTools = category.tools.filter((t) => t.href !== `/${slug}`).slice(0, 5);

  const isCSSConverter = slug in cssConfigs;
  const isColorConverter = [
    'hex-to-rgb-converter',
    'rgb-to-hex-converter',
    'hex-to-hsl-converter',
    'hsl-to-hex-converter',
  ].includes(slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 pb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tools" className="hover:text-gray-400 transition-colors">Tools</Link>
            <span>/</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">{category.label}</span>
            <span>/</span>
            <span className="text-gray-400">{tool.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">
            <span className="text-xs text-gray-500">{category.label}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            {tool.name}
          </h1>
          <p className="text-base text-gray-400 max-w-xl">
            {tool.desc}
          </p>
        </section>

        <div className="border-t border-white/6" />

        {/* Tool UI */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
          {isCSSConverter ? (
            <CSSConverter config={cssConfigs[slug]} />
          ) : isColorConverter ? (
            <ColorConverter slug={slug} />
          ) : (
            <ComingSoon name={tool.name} />
          )}
        </section>

        <div className="border-t border-white/6" />

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
            <h2 className="text-lg font-bold text-white mb-5">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedTools.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group flex flex-col gap-1 bg-white/3 hover:bg-white/7 border border-white/8 hover:border-white/20 rounded-xl px-4 py-4 transition-all duration-200"
                >
                  <span className="text-sm font-semibold text-white leading-snug">{t.name}</span>
                  <span className="text-xs text-gray-500">{t.desc}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-2 pb-8 border-t border-white/6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mt-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Tools
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-700">
            Disclaimer: This tool provides approximate conversions for reference purposes. Results may vary depending on browser rendering and settings. Always verify values in your development environment.
          </p>
        </div>
      </main>
    </>
  );
}
