"use client";

import { useState } from "react";

const TABS = ["Day", "Week", "Month", "Year"] as const;

const PVR_ROWS = [
  { time: "7–8 AM", title: "Morning Routine", emoji: "🌅", tag: "Personal", tagClass: "tag-personal", reality: "Done on time", rIcon: "fa-check", rBg: "#DCFCE7", rColor: "#15803D", pct: 100, barColor: "#22C55E" },
  { time: "9–11 AM", title: "Study Time", emoji: "📚", tag: "Study", tagClass: "tag-study", reality: "Partial · 1/3 done", rIcon: "fa-exclamation", rBg: "#FEF3C7", rColor: "#F59E0B", pct: 33, barColor: "#F59E0B", comment: "Got distracted by notifications" },
  { time: "12–1 PM", title: "Lunch Break", emoji: "🍽", tag: "Meal", tagClass: "tag-meal", reality: "Done on time", rIcon: "fa-check", rBg: "#DCFCE7", rColor: "#15803D", pct: 100, barColor: "#22C55E" },
  { time: "2–4 PM", title: "Project Work", emoji: "💻", tag: "Work", tagClass: "tag-work", reality: "Skipped entirely", rIcon: "fa-xmark", rBg: "#FEE2E2", rColor: "#DC2626", pct: 0, barColor: "#EF4444", comment: "No todos completed" },
  { time: "6–7 PM", title: "Exercise", emoji: "🏃", tag: "Health", tagClass: "tag-health", reality: "Done · started late", rIcon: "fa-check", rBg: "#DCFCE7", rColor: "#15803D", pct: 83, barColor: "#22C55E", comment: "Actual: 6:30–7:30 PM (+30 min delay)" },
  { time: "10–11 PM", title: "Sleep Prep", emoji: "🌙", tag: "Sleep", tagClass: "tag-sleep", reality: "Upcoming", rIcon: "fa-clock", rBg: "#F3F4F6", rColor: "#9CA3AF", pct: -1, barColor: "#E5E7EB", upcoming: true },
];

const WEEK_DATA = [
  { day: "Mon", score: 82 }, { day: "Tue", score: 65 }, { day: "Wed", score: 90 },
  { day: "Thu", score: 45 }, { day: "Fri", score: 78 }, { day: "Sat", score: 55 }, { day: "Sun", score: 74 },
];

const SCORE_BLOCKS = [
  { name: "🌅 Morning Routine", dur: "1h", pct: 100, color: "#22C55E" },
  { name: "📚 Study Time", dur: "2h", pct: 33, color: "#6C6FDF" },
  { name: "🍽 Lunch Break", dur: "1h", pct: 100, color: "#22C55E" },
  { name: "💻 Project Work", dur: "2h", pct: 0, color: "#DC2626" },
];

export default function AnalyticsPage() {
  const [tab, setTab] = useState<typeof TABS[number]>("Day");

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
        <h1 className="text-xl font-extrabold text-[#1A1A2E]">Analytics</h1>
        <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm overflow-x-auto flex-shrink-0">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`a-tab ${tab === t ? "a-tab-active" : ""}`}>{t}</button>
          ))}
        </div>
      </div>

      {/* Period nav */}
      <div className="flex items-center gap-2 mb-5">
        <button className="w-7 h-7 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-[#EEEEFF]">
          <i className="fa-solid fa-chevron-left text-[#6B7280]" style={{ fontSize: "10px" }}></i>
        </button>
        <span className="text-sm font-bold text-[#1A1A2E]">
          {tab === "Day" && "Monday, 2 Jun 2026"}
          {tab === "Week" && "Week of 2 Jun 2026"}
          {tab === "Month" && "June 2026"}
          {tab === "Year" && "2026"}
        </span>
        <button className="w-7 h-7 bg-white rounded-xl flex items-center justify-center shadow-sm hover:bg-[#EEEEFF]">
          <i className="fa-solid fa-chevron-right text-[#6B7280]" style={{ fontSize: "10px" }}></i>
        </button>
      </div>

      {/* Day View */}
      {tab === "Day" && <DayView />}
      {tab === "Week" && <WeekView />}
      {tab === "Month" && <MonthView />}
      {tab === "Year" && <YearView />}
    </div>
  );
}

function DayView() {
  return (
    <>
      {/* Top: Donut + Score */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="card p-5 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <div style={{ width: "130px", height: "130px", flexShrink: 0 }}>
              {/* Placeholder donut */}
              <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: "conic-gradient(#6C6FDF 210deg, #C7C7FF 210deg 250deg, #EEEEFF 250deg)" }}>
                <div className="w-[85px] h-[85px] bg-white rounded-full flex items-center justify-center">
                  <span className="font-extrabold text-[#6C6FDF]">63%</span>
                </div>
              </div>
            </div>
            <div className="space-y-1.5 flex-1 min-w-0">
              <h3 className="font-bold text-xs text-[#1A1A2E] mb-2">Today&apos;s Completion</h3>
              <div className="flex items-center justify-between text-xs"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{ background: "#6C6FDF" }}></span><span className="text-[#6B7280]">Completed</span></div><span className="font-bold text-[#6C6FDF]">4 blocks</span></div>
              <div className="flex items-center justify-between text-xs"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{ background: "#C7C7FF" }}></span><span className="text-[#6B7280]">Partial</span></div><span className="font-bold text-[#9B9EEF]">1 block</span></div>
              <div className="flex items-center justify-between text-xs"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm" style={{ background: "#EEEEFF" }}></span><span className="text-[#6B7280]">Missed</span></div><span className="font-bold text-[#9CA3AF]">1 block</span></div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-[#F3F4F6]"><span className="text-[#6B7280]">Upcoming</span><span className="font-bold text-[#9CA3AF]">2 blocks</span></div>
            </div>
          </div>
        </div>

        <div className="card px-4 py-3 md:px-5 md:py-4">
          <h3 className="font-bold text-sm text-[#1A1A2E] mb-4">Honest Productivity Score</h3>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
            <div className="prod-ring" style={{ width: "72px", height: "72px", flexShrink: 0 }}><div className="prod-ring-val" style={{ fontSize: "13px" }}>74%</div></div>
            <div className="text-center sm:text-left"><div className="text-2xl font-extrabold text-[#6C6FDF]">74%</div><div className="text-[10px] text-[#9CA3AF]">Weighted by block duration</div></div>
          </div>
          <div className="space-y-2.5">
            {SCORE_BLOCKS.map((b) => (
              <div key={b.name}>
                <div className="flex justify-between text-xs mb-1"><span className="text-[#6B7280]">{b.name} <span className="text-[#9CA3AF]">({b.dur})</span></span><span className="font-bold" style={{ color: b.color }}>{b.pct}%</span></div>
                <div className="h-2 bg-[#F3F4F6] rounded-full"><div className="h-2 rounded-full" style={{ width: `${b.pct}%`, background: b.color }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan vs Reality */}
      <div className="card p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="font-bold text-[#1A1A2E] text-sm md:text-base">Plan vs Reality</h3>
            <p className="text-xs text-[#9CA3AF] mt-0.5">How your planned day compared to what actually happened</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap flex-shrink-0">
            <Legend color="#22C55E" label="Done" />
            <Legend color="#F59E0B" label="Partial" />
            <Legend color="#EF4444" label="Skipped" />
            <Legend color="#E5E7EB" label="Upcoming" />
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 md:-mx-6 md:px-6">
          {/* Headers */}
          <div className="grid gap-3 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wide" style={{ gridTemplateColumns: "80px 1fr 140px 120px 80px", minWidth: "520px" }}>
            <div>Time</div><div>Block</div><div>Reality</div><div>Match</div><div className="text-right">Score</div>
          </div>

          <div className="mt-2 space-y-1.5" style={{ minWidth: "520px" }}>
            {PVR_ROWS.map((row) => (
              <div key={row.time} className="grid items-center gap-3 p-3 rounded-xl hover:bg-[#FAFAFF] transition-colors" style={{ gridTemplateColumns: "80px 1fr 140px 120px 80px", opacity: row.upcoming ? 0.5 : 1 }}>
                <span className="text-xs font-semibold text-[#6B7280]">{row.time}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{row.emoji}</span>
                  <div>
                    <div className="text-xs font-bold text-[#1A1A2E]">{row.title}</div>
                    <span className={`tag ${row.tagClass}`} style={{ fontSize: "9px", padding: "1px 6px" }}>{row.tag}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: row.rBg }}>
                      <i className={`fa-solid ${row.rIcon}`} style={{ fontSize: "9px", color: row.rColor }}></i>
                    </span>
                    <span className="text-xs font-semibold" style={{ color: row.rColor }}>{row.reality}</span>
                  </div>
                  {row.comment && <div className="text-[10px] text-[#9CA3AF] pl-6">{row.comment}</div>}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${Math.max(row.pct, 0)}%`, background: row.barColor }} />
                  </div>
                </div>
                <div className="text-right font-extrabold text-sm" style={{ color: row.pct < 0 ? "#9CA3AF" : row.rColor }}>
                  {row.pct < 0 ? "—" : `${row.pct}%`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insight */}
        <div className="mt-5 pt-4 border-t border-[#F3F4F6]">
          <div className="flex items-start gap-3 p-3.5 rounded-xl" style={{ background: "#F9F9FF", border: "1px solid #EEEEFF" }}>
            <i className="fa-solid fa-lightbulb text-[#6C6FDF] text-sm mt-0.5"></i>
            <div>
              <div className="text-xs font-bold text-[#1A1A2E] mb-1">Today&apos;s Insight</div>
              <div className="text-xs text-[#6B7280] leading-relaxed">
                Your mornings are solid — 100% completion before noon. You consistently slip after 2pm.
                Project Work has been skipped <strong>3 days in a row</strong>. Consider moving it to morning.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WeekView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 card p-6">
        <h3 className="font-bold text-sm text-[#1A1A2E] mb-5">This Week&apos;s Scores</h3>
        <div className="flex items-end justify-between gap-2 h-40">
          {WEEK_DATA.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold text-[#6B7280]">{d.score}%</span>
              <div className="w-full rounded-lg" style={{ height: `${d.score * 1.2}px`, background: d.score >= 80 ? "#6C6FDF" : d.score >= 60 ? "#9B9EEF" : "#EEEEFF" }} />
              <span className="text-xs font-semibold text-[#6B7280]">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-6">
        <h3 className="font-bold text-sm text-[#1A1A2E] mb-4">Week Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Best day</span><span className="font-bold text-[#15803D]">Wednesday 90%</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Worst day</span><span className="font-bold text-[#DC2626]">Thursday 45%</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Week avg</span><span className="font-bold text-[#6C6FDF]">72%</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Streak</span><span className="font-bold">🔥 6 days</span></div>
          <hr className="border-[#F3F4F6]" />
          <div className="text-xs text-[#9CA3AF]">You consistently slip on evening blocks (8pm–10pm). Consider adjusting your templates.</div>
        </div>
      </div>
    </div>
  );
}

function MonthView() {
  const scores = [null,82,65,90,45,78,55,74,88,60,70,85,92,50,65,72,80,55,88,74,68,90,62,78,85,null,null,null,null,null,null];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 card p-6">
        <h3 className="font-bold text-sm text-[#1A1A2E] mb-4">June 2026 — Heatmap</h3>
        <div className="grid grid-cols-7 gap-1.5 mb-2">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d} className="text-[10px] text-center text-[#9CA3AF] font-semibold">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {scores.map((s, i) => (
            <div key={i} className="rounded-xl flex items-center justify-center aspect-square text-[10px] font-bold" style={{
              background: s === null ? "transparent" : s >= 80 ? "#6C6FDF" : s >= 60 ? "#9B9EEF" : "#EEEEFF",
              color: s === null ? "transparent" : s >= 80 ? "white" : s >= 60 ? "#5558CC" : "#9CA3AF",
            }}>
              {s ?? ""}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
          <span className="text-[10px] text-[#9CA3AF]">Less</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded" style={{ background: "#EEEEFF" }} />
            <div className="w-4 h-4 rounded" style={{ background: "#9B9EEF" }} />
            <div className="w-4 h-4 rounded" style={{ background: "#6C6FDF" }} />
          </div>
          <span className="text-[10px] text-[#9CA3AF]">More</span>
        </div>
      </div>
      <div className="card p-6 space-y-4">
        <h3 className="font-bold text-sm text-[#1A1A2E]">June Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Avg score</span><span className="font-bold text-[#6C6FDF]">74%</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Days logged</span><span className="font-bold text-[#1A1A2E]">24 / 30</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Best day</span><span className="font-bold text-[#15803D]">Wed 11 · 90%</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Worst day</span><span className="font-bold text-[#DC2626]">Thu 5 · 45%</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#6B7280]">Best streak</span><span className="font-bold">🔥 14 days</span></div>
        </div>
      </div>
    </div>
  );
}

function YearView() {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const data = [68,72,75,80,77,74,0,0,0,0,0,0];
  return (
    <div className="card p-6">
      <h3 className="font-bold text-sm text-[#1A1A2E] mb-5">2026 — Monthly Averages</h3>
      <div className="flex items-end justify-between gap-2 h-40">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1">
            {data[i] > 0 && <span className="text-[10px] font-bold text-[#6B7280]">{data[i]}%</span>}
            <div className="w-full rounded-lg" style={{ height: `${(data[i] || 8) * 1.2}px`, background: data[i] > 0 ? "#6C6FDF" : "#F3F4F6" }} />
            <span className="text-[10px] text-[#6B7280]">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[10px] text-[#6B7280] font-medium">
      <span className="w-2.5 h-2.5 rounded-sm" style={{ background: color }}></span>{label}
    </div>
  );
}
