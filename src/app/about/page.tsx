// Rendering: ISR (Incremental Static Regeneration).
// Public page showing aggregate platform stats. Revalidates every hour.

import Link from "next/link";
import { prisma } from "@/lib/db";

export const revalidate = 3600;

export default async function AboutPage() {
  const [userCount, blockCount, doneTodoCount] = await Promise.all([
    prisma.user.count(),
    prisma.block.count(),
    prisma.todo.count({ where: { status: "DONE" } }),
  ]);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Navbar */}
      <nav
        className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{ background: "var(--accent)", borderRadius: "7px" }}
          >
            <i className="fa-solid fa-calendar-check text-white text-sm"></i>
          </div>
          <span
            className="text-lg font-bold"
            style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
          >
            Klok
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/sign-in" className="btn btn-ghost">
            Sign In
          </Link>
          <Link href="/sign-up" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{
            background: "var(--accent-bg)",
            color: "var(--accent)",
            border: "1px solid rgba(94,106,210,.2)",
          }}
        >
          About Klok
        </div>
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
        >
          A daily tracker built for{" "}
          <span style={{ color: "var(--accent)" }}>honest reflection.</span>
        </h1>
        <p
          className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          Klok isn&apos;t a fancy planner that pretends every day goes smoothly.
          It&apos;s a tracker designed around the truth: you plan, you execute,
          you miss things, you adjust.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12">
        <div className="card p-8">
          <h2 className="font-semibold mb-1" style={{ color: "var(--text)" }}>
            Klok by the numbers
          </h2>
          <p className="text-xs mb-6" style={{ color: "var(--text-3)" }}>
            Updated hourly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatBlock
              icon="fa-users"
              iconBg="var(--accent-bg)"
              iconColor="var(--accent)"
              value={userCount.toLocaleString()}
              label="People tracking"
            />
            <StatBlock
              icon="fa-clock"
              iconBg="var(--warning-bg)"
              iconColor="var(--warning)"
              value={blockCount.toLocaleString()}
              label="Time blocks scheduled"
            />
            <StatBlock
              icon="fa-check"
              iconBg="var(--success-bg)"
              iconColor="var(--success)"
              value={doneTodoCount.toLocaleString()}
              label="Todos completed"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20 text-center">
        <Link
          href="/sign-up"
          className="btn btn-primary"
          style={{ fontSize: "14px", padding: "12px 28px" }}
        >
          Start Tracking Free <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

function StatBlock({
  icon,
  iconBg,
  iconColor,
  value,
  label,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-3"
        style={{ background: iconBg }}
      >
        <i
          className={`fa-solid ${icon} text-lg`}
          style={{ color: iconColor }}
        ></i>
      </div>
      <div
        className="text-3xl font-bold"
        style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
      >
        {value}
      </div>
      <div
        className="text-sm mt-1 font-medium"
        style={{ color: "var(--text-2)" }}
      >
        {label}
      </div>
    </div>
  );
}
