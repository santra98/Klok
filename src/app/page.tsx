// Rendering: SSG.
// Landing page — Framer-style: bold white headlines on near-black,
// teal accent used sparingly, solid (non-gradient) buttons, subtle depth.

import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#0A0A0B",
        color: "#FFFFFF",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      }}
    >
      {/* ── NAV ──────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-30"
        style={{
          background: "rgba(10,10,11,0.7)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-6 h-6 flex items-center justify-center flex-shrink-0"
              style={{ background: "#FFFFFF", borderRadius: "6px" }}
            >
              <i className="fa-solid fa-calendar-check" style={{ fontSize: "11px", color: "#0A0A0B" }}></i>
            </div>
            <span
              className="text-base font-semibold"
              style={{ color: "#FFFFFF", letterSpacing: "-0.01em" }}
            >
              Klok
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Features", href: "#features" },
              { label: "How it works", href: "#how" },
              { label: "About", href: "/about" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded text-sm font-medium transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/sign-in"
              className="px-3 py-1.5 text-sm font-medium rounded transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-1.5 text-sm font-semibold rounded-lg transition-all hover:opacity-90"
              style={{
                background: "#FFFFFF",
                color: "#0A0A0B",
              }}
            >
              Start for free
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative">
        {/* ONE subtle radial — not rainbow blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1200px",
            height: "600px",
            background: "radial-gradient(ellipse at top, rgba(255,255,255,0.06) 0%, transparent 60%)",
            zIndex: 0,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-20 md:pb-28 text-center" style={{ zIndex: 1 }}>
          {/* Small pill */}
          <div
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full mb-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full pulse"
              style={{ background: "#FFFFFF" }}
            ></span>
            New · Honest daily tracker
          </div>

          {/* Headline — SOLID white, no rainbow */}
          <h1
            className="text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] mb-8 mx-auto"
            style={{
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              maxWidth: "900px",
            }}
          >
            Plan your day, own your reality.
          </h1>

          {/* Sub */}
          <p
            className="text-lg md:text-xl max-w-xl mx-auto leading-[1.5] mb-10"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            A daily tracker built around the truth — you plan, you execute, you miss things, you adjust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
              style={{
                background: "#FFFFFF",
                color: "#0A0A0B",
                minWidth: "180px",
                justifyContent: "center",
              }}
            >
              Start for free
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
              style={{
                color: "#FFFFFF",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                minWidth: "180px",
                justifyContent: "center",
              }}
            >
              See the numbers
            </Link>
          </div>
        </div>

        {/* App mockup — clean, subtle */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pb-28" style={{ zIndex: 1 }}>
          <div
            className="relative rounded-2xl overflow-hidden mx-auto"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#111113",
              maxWidth: "1100px",
              boxShadow: "0 50px 100px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-1.5 px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}></span>
              <span className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}></span>
              <span className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}></span>
              <span
                className="ml-4 text-xs px-4 py-0.5 rounded-md"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                klok.app/today
              </span>
            </div>

            {/* App shell */}
            <div className="flex" style={{ background: "#0A0A0B", minHeight: "440px" }}>
              {/* Sidebar */}
              <div
                className="w-48 flex-shrink-0 hidden sm:flex flex-col p-3 gap-1"
                style={{ background: "#111113", borderRight: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 px-2 py-2 mb-2">
                  <div
                    className="w-5 h-5 rounded flex-shrink-0"
                    style={{ background: "#FFFFFF" }}
                  ></div>
                  <span className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>Klok</span>
                </div>
                {[
                  { label: "Dashboard", active: false },
                  { label: "Today's Log", active: true },
                  { label: "Analytics", active: false },
                  { label: "Templates", active: false },
                  { label: "Recurring", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs"
                    style={{
                      background: item.active ? "rgba(255,255,255,0.06)" : "transparent",
                      color: item.active ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                      fontWeight: item.active ? 500 : 400,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ background: item.active ? "#FFFFFF" : "rgba(255,255,255,0.1)" }}
                    ></div>
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-base font-semibold mb-0.5" style={{ color: "#FFFFFF" }}>
                      Today&apos;s Log
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Sunday, 7 June 2026</div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-md text-xs font-semibold"
                    style={{ background: "#FFFFFF", color: "#0A0A0B" }}
                  >
                    + New Block
                  </div>
                </div>

                <div className="space-y-2.5">
                  {/* Done */}
                  <div
                    className="rounded-lg p-3 flex items-center justify-between"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderLeft: "3px solid #34D399",
                    }}
                  >
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "#FFFFFF" }}>☀️ Morning Routine</div>
                      <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>07:00 – 08:00 · 3/3 todos</div>
                    </div>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded"
                      style={{ background: "rgba(52,211,153,.12)", color: "#34D399" }}
                    >
                      Done
                    </span>
                  </div>

                  {/* Now */}
                  <div
                    className="rounded-lg p-3 flex items-center justify-between"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderLeft: "3px solid #FFFFFF",
                    }}
                  >
                    <div>
                      <div
                        className="text-xs font-semibold mb-0.5 flex items-center gap-1.5"
                        style={{ color: "#FFFFFF" }}
                      >
                        📚 Study Time
                        <span
                          className="w-1.5 h-1.5 rounded-full pulse"
                          style={{ background: "#FFFFFF" }}
                        ></span>
                      </div>
                      <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>09:00 – 11:00 · 2/4 todos</div>
                    </div>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded"
                      style={{ background: "rgba(255,255,255,.1)", color: "#FFFFFF" }}
                    >
                      Now
                    </span>
                  </div>

                  {/* Missed */}
                  <div
                    className="rounded-lg p-3 flex items-center justify-between"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderLeft: "3px solid #F87171",
                    }}
                  >
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "#FFFFFF" }}>💪 Workout</div>
                      <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>11:30 – 12:30</div>
                    </div>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded"
                      style={{ background: "rgba(248,113,113,.12)", color: "#F87171" }}
                    >
                      Missed
                    </span>
                  </div>

                  {/* Upcoming */}
                  <div
                    className="rounded-lg p-3 flex items-center justify-between"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderLeft: "3px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "#FFFFFF" }}>🎯 Project Review</div>
                      <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>14:00 – 16:00 · 0/2 todos</div>
                    </div>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      Upcoming
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────── */}
      <section
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "24h", label: "Hourly time blocks" },
              { value: "∞", label: "Nested todos per block" },
              { value: "3", label: "Views — week, month, year" },
              { value: "Free", label: "No credit card required" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-semibold mb-2"
                  style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section id="how" className="relative max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            How it works
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold"
            style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
          >
            Three steps. That&apos;s it.
          </h2>
          <p className="text-base mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            No bloated onboarding. No premium tiers. Just plan, track, reflect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "01", icon: "fa-pen-to-square", title: "Plan your day", body: "Add time blocks — Morning Routine, Study, Lunch, whatever. Nest todos inside each one." },
            { num: "02", icon: "fa-check-double", title: "Track as you go", body: "Tick off todos as you finish. Block status auto-updates. Or mark a whole block done in one click." },
            { num: "03", icon: "fa-chart-line", title: "Reflect & repeat", body: "See your patterns in week, month, and year views. Save your best days as templates." },
          ].map((step) => (
            <div
              key={step.num}
              className="rounded-2xl p-7 transition-all"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {step.num}
                </div>
                <i
                  className={`fa-solid ${step.icon}`}
                  style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}
                ></i>
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#FFFFFF", letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────── */}
      <section
        id="features"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Features
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold"
              style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
            >
              Everything you need.
            </h2>
            <p className="text-base mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Built for honest reflection — without the noise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "fa-clock", title: "Hourly time blocks", body: "Plan your day hour by hour. Each block has a title, time range, tag, and its own todo list." },
              { icon: "fa-list-check", title: "Nested todos", body: "Every block has its own checklist. Status auto-updates as you check things off." },
              { icon: "fa-layer-group", title: "Day templates", body: "Save any day's blocks as a template. Apply \"My Typical Monday\" to any future date." },
              { icon: "fa-fire", title: "Streak tracking", body: "Log consistently and watch your streak grow. Miss a day, lose the chain." },
              { icon: "fa-tag", title: "Activity tags", body: "9 default tags plus custom ones with emoji. Color-code and filter your blocks by activity." },
              { icon: "fa-chart-bar", title: "Week · Month · Year", body: "See completion percentages, best days, worst days, and top tags across any time range." },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 transition-all"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <i
                  className={`fa-solid ${f.icon}`}
                  style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", marginBottom: "16px", display: "block" }}
                ></i>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#FFFFFF", letterSpacing: "-0.01em" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Why Klok
              </p>
              <h2
                className="text-4xl md:text-5xl font-semibold mb-6 leading-[1.1]"
                style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
              >
                Built for honest reflection.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                Most productivity apps make you feel guilty when you miss things.
                Klok assumes you will — and helps you adjust without judgment.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Plan in blocks. Some you&apos;ll smash. Some you&apos;ll miss.
                Both are data. Both teach you what actually works for you.
              </p>
              <Link
                href="/about"
                className="text-sm font-medium inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Read more about our approach
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
            </div>

            {/* Block preview */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-xs font-semibold mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Today&apos;s blocks — 3 planned
              </div>
              <div className="space-y-2.5">
                {[
                  { emoji: "🌅", name: "Morning Routine", time: "7:00 – 8:00", label: "Done", left: "#34D399", badge: "rgba(52,211,153,.12)", badgeColor: "#34D399" },
                  { emoji: "📚", name: "Study Time", time: "9:00 – 11:00", label: "2 of 3", left: "#FFFFFF", badge: "rgba(255,255,255,.1)", badgeColor: "#FFFFFF" },
                  { emoji: "💻", name: "Project Work", time: "14:00 – 16:00", label: "Missed", left: "#F87171", badge: "rgba(248,113,113,.12)", badgeColor: "#F87171" },
                ].map((b) => (
                  <div
                    key={b.name}
                    className="rounded-lg p-3 flex items-center justify-between"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderLeft: `3px solid ${b.left}`,
                    }}
                  >
                    <div>
                      <div className="text-xs font-medium" style={{ color: "#FFFFFF" }}>{b.emoji} {b.name}</div>
                      <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{b.time}</div>
                    </div>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded"
                      style={{ background: b.badge, color: b.badgeColor }}
                    >
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Subtle radial behind text */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "900px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 py-28 md:py-36 text-center" style={{ zIndex: 1 }}>
          <h2
            className="text-4xl md:text-6xl font-semibold mb-6"
            style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
          >
            Start tracking today.
          </h2>
          <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Free. No credit card. Just a real daily tracker built for real people.
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{
              background: "#FFFFFF",
              color: "#0A0A0B",
            }}
          >
            Start for free
          </Link>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 flex items-center justify-center"
              style={{ background: "#FFFFFF", borderRadius: "5px" }}
            >
              <i className="fa-solid fa-calendar-check" style={{ fontSize: "9px", color: "#0A0A0B" }}></i>
            </div>
            <span className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>Klok</span>
            <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-5">
            {[
              { label: "Features", href: "#features" },
              { label: "How it works", href: "#how" },
              { label: "About", href: "/about" },
              { label: "Sign in", href: "/sign-in" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs transition-colors hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
