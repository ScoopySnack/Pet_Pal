import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, HeartPulse, CalendarCheck2, Syringe, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

/**
 * PetPal — HomeLanding
 *
 * Notes:
 * - Pure UI landing page with smooth transitions, SSR-safe.
 * - Keep Tailwind + Framer Motion + Lucide only.
 *
 * Install:
 *   npm i framer-motion lucide-react
 */

const features = [
    {
        icon: <CalendarCheck2 className="h-6 w-6"/>,
        title: "Smart Care Reminders",
        text: "Vaccines, grooming, walks—never miss a beat with adaptive schedules.",
    },
    {
        icon: <HeartPulse className="h-6 w-6"/>,
        title: "Health Timeline",
        text: "Track vet visits, meds, and notes in one beautiful timeline.",
    },
    {
        icon: <Syringe className="h-6 w-6"/>,
        title: "Vaccination Wallet",
        text: "Digital records, shareable with a tap when you're at the vet.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6"/>,
        title: "Role-based Access",
        text: "Invite family, sitter, or vet with granular permissions.",
    },
];

const floatingPaws = [
    { delay: 0 },
    { delay: 0.5 },
    { delay: 1.0 },
    { delay: 1.5 },
];

const glass = "backdrop-blur-xl bg-white/10 border border-white/20";

export default function HomeLanding() {
    const [coverOn, setCoverOn] = useState(false);

    const handleGetStarted = () => {
        setCoverOn(true);
        if (typeof window !== "undefined") {
            setTimeout(() => {
                window.location.assign("/signup");
            }, 900);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            <GradientOrbs />

            {/* Nav */}
            <header className="relative z-20">
                <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/20">
                            <PawPrint className="h-5 w-5 text-slate-950" />
                        </div>
                        <span className="text-lg font-semibold tracking-tight">PetPal</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className={`hidden items-center gap-6 md:flex ${glass} rounded-2xl px-4 py-2`}
                    >
                        <a className="text-sm/6 opacity-80 hover:opacity-100" href="#features">Features</a>
                        <a className="text-sm/6 opacity-80 hover:opacity-100" href="#how">How it works</a>
                        <a className="text-sm/6 opacity-80 hover:opacity-100" href="#faq">FAQ</a>
                        <a className="text-sm/6 opacity-80 hover:opacity-100" href="/login">Log in</a>
                        <a
                            href="/signup"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-transform hover:scale-[1.02]"
                        >
                            Get started <ArrowRight className="h-4 w-4"/>
                        </a>
                    </motion.div>
                </nav>
            </header>

            {/* Hero */}
            <section className="relative z-10 mx-auto mt-6 grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-4 md:grid-cols-2 md:pb-28 md:pt-10">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-balance text-4xl font-semibold tracking-tight md:text-6xl"
                    >
                        Harmony for you & your <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">pet's life</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="mt-4 max-w-xl text-pretty text-base/7 text-slate-300 md:text-lg/8"
                    >
                        PetPal helps you organize care tasks, track health, and share responsibilities—with elegant UX and gentle animations that never get in the way.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                    >
                        <button
                            onClick={handleGetStarted}
                            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-transform hover:scale-[1.02] active:scale-[0.99]"
                            data-testid="cta-get-started"
                        >
                            Start free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/>
                        </button>
                        <a
                            href="/login"
                            className={`${glass} inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white/90 transition hover:bg-white/15`}
                        >
                            Log in
                        </a>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
                        }}
                        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
                    >
                        {floatingPaws.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: p.delay + 0.2 }}
                                className={`${glass} flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-200`}
                            >
                                <PawPrint className="h-4 w-4 text-emerald-300"/>
                                <span className="opacity-90">Trusted by pet-lovers</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Hero visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                >
                    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                        <ParallaxLayer delay={0} className="top-6 left-6 h-28 w-28 rounded-3xl bg-emerald-400/20 blur-2xl"/>
                        <ParallaxLayer delay={0.2} className="bottom-8 right-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl"/>
                        <ParallaxLayer delay={0.4} className="top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-xl bg-white/10"/>

                        {/* mock phone UI */}
                        <div className="absolute inset-0 grid place-items-center">
                            <div className="h-[420px] w-[230px] rounded-[2rem] border border-white/20 bg-slate-950/60 p-3 shadow-xl">
                                <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/10"/>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
                                        <div className="flex items-center gap-2">
                                            <HeartPulse className="h-4 w-4 text-emerald-300"/>
                                            <span className="text-xs text-slate-200">Vet visit • Today 17:00</span>
                                        </div>
                                        <Sparkles className="h-4 w-4 text-cyan-300"/>
                                    </div>
                                    <div className="rounded-2xl bg-white/5 p-3">
                                        <div className="mb-2 flex items-center gap-2 text-xs text-slate-300">
                                            <CalendarCheck2 className="h-4 w-4 text-emerald-300"/>
                                            Upcoming tasks
                                        </div>
                                        <ul className="space-y-1.5">
                                            {[
                                                "Walk • 19:30",
                                                "Food • 20:00",
                                                "Flea meds • Fri",
                                            ].map((t) => (
                                                <li key={t} className="flex items-center justify-between text-[11px] text-slate-300/90">
                                                    <span>{t}</span>
                                                    <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">Auto</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl bg-white/5 p-3">
                                        <div className="mb-2 flex items-center gap-2 text-xs text-slate-300">
                                            <Syringe className="h-4 w-4 text-emerald-300"/>
                                            Vaccination wallet
                                        </div>
                                        <div className="grid grid-cols-3 gap-1">
                                            {["Rabies", "DHPPi", "Lepto"].map((v) => (
                                                <div key={v} className="rounded-lg bg-white/10 p-2 text-center text-[10px] text-slate-200/90">
                                                    {v}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Feature grid */}
            <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-8 max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight md:text-4xl"
                >
                    Everything you need for effortless pet care
                </motion.h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className={`${glass} group relative overflow-hidden rounded-2xl p-5 shadow-xl`}
                        >
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="pointer-events-none absolute -inset-[40%] -z-10 animate-spin-slow rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-emerald-400 via-cyan-400 to-emerald-400 opacity-20" />
                            </div>
                            <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2 text-emerald-300">
                                {f.icon}
                            </div>
                            <h3 className="mb-1 text-lg font-semibold">{f.title}</h3>
                            <p className="text-sm text-slate-300/90">{f.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How it works */}
            <section id="how" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className={`${glass} rounded-3xl p-8`}
                    >
                        <h3 className="mb-4 text-2xl font-semibold">A day with PetPal</h3>
                        <ul className="space-y-3 text-slate-300/95">
                            <li>• Morning: check your pet's dashboard for tasks.</li>
                            <li>• Afternoon: log a quick vet note right from your phone.</li>
                            <li>• Evening: share access with your sitter for the weekend.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl">
                            <div className="grid grid-cols-3 gap-3">
                                {["Care","Health","Share","Track","Sync","Relax"].map((k, i) => (
                                    <motion.div
                                        key={k}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-6 text-center text-sm text-slate-200"
                                    >
                                        {k}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ preview */}
            <section id="faq" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className={`${glass} rounded-3xl p-8`}
                >
                    <h3 className="mb-6 text-2xl font-semibold">FAQ</h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FaqItem q="Is PetPal free?" a="Yes—start free. Pro adds multi-pet advanced analytics." />
                        <FaqItem q="Can I invite my vet?" a="Absolutely. Send a secure invite with limited access." />
                        <FaqItem q="Does it work offline?" a="Key screens cache, then sync when you're back online." />
                        <FaqItem q="Dark mode?" a="You bet. It looks gorgeous (as you can see)." />
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 bg-slate-950/20">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                        <PawPrint className="h-4 w-4 text-emerald-300"/>
                        <span>PetPal © {typeof window === "undefined" ? "" : new Date().getFullYear()}</span>
                    </div>
                    <PawTrail />
                </div>
            </footer>

            {/* Page cover transition */}
            <AnimatePresence>
                {coverOn && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 30, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="pointer-events-none fixed bottom-8 right-10 z-50 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function GradientOrbs() {
    return (
        <>
            <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
            />
            <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
            />
            <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"
            />
        </>
    );
}

function ParallaxLayer({ delay = 0, className = "" }) {
    return (
        <motion.div
            className={`absolute ${className}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay, duration: 0.8 }}
        />
    );
}

function FaqItem({ q, a }) {
    return (
        <details className="group rounded-2xl border border-white/10 bg-white/5 p-4 open:bg-white/10">
            <summary className="cursor-pointer select-none list-none font-medium text-slate-200 transition-colors group-open:text-white">
                {q}
            </summary>
            <p className="mt-2 text-sm text-slate-300/90">{a}</p>
        </details>
    );
}

function PawTrail() {
    return (
        <div className="relative flex items-center gap-1 overflow-hidden">
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-full bg-white/10 p-1"
                >
                    <PawPrint className="h-3.5 w-3.5 text-emerald-200"/>
                </motion.div>
            ))}
        </div>
    );
}

// Tailwind helper:
// .animate-spin-slow { animation: spin 10s linear infinite; }

/* -------------------------------------------------------
   Inline tests (Vitest). These do not run in production.
   Run with:  npx vitest --environment jsdom
------------------------------------------------------- */
if (import.meta && import.meta.vitest) {
    const { it, expect, describe } = import.meta.vitest;
    const ReactDOMServer = await import("react-dom/server");

    describe("HomeLanding — smoke & SSR", () => {
        it("renders to string (SSR-safe)", () => {
            const html = ReactDOMServer.renderToString(<HomeLanding />);
            expect(html).toContain("PetPal");
            expect(html).toContain("Start free");
        });

        it("contains no wallet elements", () => {
            const html = ReactDOMServer.renderToString(<HomeLanding />);
            expect(html.toLowerCase()).not.toContain("wallet");
            expect(html.toLowerCase()).not.toContain("metamask");
            expect(html).not.toContain("data-testid=\"wallet-connect\"");
            expect(html).not.toContain("data-testid=\"wallet-absent\"");
        });
    });
}
