"use client";

import { useState } from "react";

const TAGS = [
  { emoji: "😴", name: "Sleep", on: true }, { emoji: "📚", name: "Study", on: true },
  { emoji: "💻", name: "Work", on: true }, { emoji: "🍳", name: "Breakfast", on: true },
  { emoji: "🍽", name: "Lunch", on: true }, { emoji: "🌙", name: "Dinner", on: true },
  { emoji: "🏃", name: "Exercise", on: true }, { emoji: "☕", name: "Break", on: true },
  { emoji: "🧘", name: "Personal", on: true }, { emoji: "🎮", name: "Gaming", on: false },
  { emoji: "📖", name: "Reading", on: false }, { emoji: "🎵", name: "Music", on: false },
  { emoji: "🚗", name: "Commute", on: false }, { emoji: "🛁", name: "Self-care", on: false },
];

const TIME_OPTIONS = ["5 AM", "6 AM", "7 AM", "8 AM"];

export default function SettingsPage() {
  const [tags, setTags] = useState(TAGS);
  const [dayStart, setDayStart] = useState("6 AM");
  const [weekStart, setWeekStart] = useState("Monday");

  const toggleTag = (i: number) => setTags((prev) => prev.map((t, idx) => idx === i ? { ...t, on: !t.on } : t));

  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-extrabold text-[#1A1A2E] mb-5">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Profile */}
        <div className="card p-6">
          <h2 className="font-bold text-[#1A1A2E] mb-5">Profile</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-2xl flex-shrink-0 relative group cursor-pointer" style={{ background: "linear-gradient(135deg,#6C6FDF,#9B9EEF)" }}>
              S
              <div className="absolute inset-0 bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <i className="fa-solid fa-pen text-white text-sm"></i>
              </div>
            </div>
            <div>
              <div className="font-bold text-[#1A1A2E]">Santra</div>
              <div className="text-sm text-[#9CA3AF]">santra@daylog.app</div>
              <button className="text-xs text-[#6C6FDF] font-semibold mt-1 hover:underline">Change avatar color</button>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Full Name</label>
              <input className="inp" defaultValue="Santra" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Email</label>
              <input className="inp" defaultValue="santra@daylog.app" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Current Password</label>
              <input className="inp" type="password" placeholder="Required to change password" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">New Password</label>
              <input className="inp" type="password" placeholder="Min. 8 characters" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Confirm New Password</label>
              <input className="inp" type="password" placeholder="••••••••" />
            </div>
            <button className="btn btn-primary text-xs py-2.5" style={{ fontSize: "12px" }}>Save Changes</button>
          </div>
        </div>

        {/* Preferences + Tags */}
        <div className="space-y-5">
          {/* Preferences */}
          <div className="card p-6">
            <h2 className="font-bold text-[#1A1A2E] mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A1A2E] mb-2">Day starts at</label>
                <div className="flex gap-2 flex-wrap">
                  {TIME_OPTIONS.map((t) => (
                    <button key={t} onClick={() => setDayStart(t)} className={`time-chip ${dayStart === t ? "time-chip-active" : ""}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1A1A2E] mb-2">Week starts on</label>
                <div className="flex gap-2">
                  {["Monday", "Sunday"].map((d) => (
                    <button key={d} onClick={() => setWeekStart(d)} className={`time-chip ${weekStart === d ? "time-chip-active" : ""}`}>{d}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1A1A2E] mb-1.5">Timezone</label>
                <select className="inp">
                  <option>Asia/Kolkata (IST, UTC+5:30)</option>
                  <option>America/New_York (EST, UTC-5)</option>
                  <option>Europe/London (GMT, UTC+0)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="card p-6">
            <h2 className="font-bold text-[#1A1A2E] mb-2">Activity Tags</h2>
            <p className="text-xs text-[#9CA3AF] mb-4">Toggle tags you want to use. Add custom ones anytime.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <button key={tag.name} onClick={() => toggleTag(i)} className={`tag-chip ${tag.on ? "tag-chip-on" : "tag-chip-off"}`}>
                  {tag.emoji} {tag.name}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input className="inp" style={{ width: "52px", flexShrink: 0, textAlign: "center" }} placeholder="😊" maxLength={2} />
              <input className="inp flex-1" placeholder="Tag name..." />
              <button className="btn btn-primary px-4" style={{ padding: "10px 16px" }}><i className="fa-solid fa-plus"></i></button>
            </div>
            <p className="text-[10px] text-[#9CA3AF] mt-1.5">Type or paste an emoji in the first box</p>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="lg:col-span-2 card p-6 border border-[#FEE2E2]" style={{ background: "#FFFAFA" }}>
          <h2 className="font-bold text-[#DC2626] mb-2">Danger Zone</h2>
          <p className="text-sm text-[#6B7280] mb-4">Permanently delete your account and all your data. This cannot be undone.</p>
          <button className="btn btn-danger">Delete My Account</button>
        </div>
      </div>
    </div>
  );
}
