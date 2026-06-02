"use client";

const RECURRING = [
  { title: "🌅 Morning Routine", tag: "Personal", tagClass: "tag-personal", icon: "fa-person-running", iconBg: "bg-[#EEEEFF]", iconColor: "text-[#6C6FDF]", schedule: "6:00 – 7:00 AM · Daily · Never ends", next: "Tomorrow, Tue 3 Jun", active: true },
  { title: "📚 Study Time", tag: "Study", tagClass: "tag-study", icon: "fa-book", iconBg: "bg-[#EEEEFF]", iconColor: "text-[#6C6FDF]", schedule: "9:00 – 11:00 AM · Weekdays · Never ends", next: "Tomorrow, Tue 3 Jun", active: true },
  { title: "🏃 Exercise", tag: "Health", tagClass: "tag-health", icon: "fa-dumbbell", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#15803D]", schedule: "6:00 – 7:00 PM · Daily · Until 31 Dec 2026", next: "Tomorrow, Tue 3 Jun", active: true },
  { title: "💻 Deep Work Session", tag: "Work", tagClass: "tag-work", icon: "fa-computer", iconBg: "bg-[#F3F4F6]", iconColor: "text-[#9CA3AF]", schedule: "2:00 – 4:00 PM · Mon–Fri · Never ends", next: null, active: false },
];

export default function RecurringBlocksPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-1">
        <h1 className="text-xl font-extrabold text-[#1A1A2E]">Recurring Blocks</h1>
        <button className="btn btn-primary text-xs py-2 flex-shrink-0" style={{ fontSize: "11px" }}>
          <i className="fa-solid fa-plus"></i> Add Recurring Block
        </button>
      </div>
      <p className="text-sm text-[#9CA3AF] mb-5">
        Blocks set to repeat auto-fill your timeline every day. Manage them all here.
      </p>

      {/* List */}
      <div className="card p-2">
        {RECURRING.map((item, i) => (
          <div key={item.title}>
            <div className="flex flex-wrap sm:flex-nowrap items-start gap-4 p-4 rounded-xl transition-colors hover:bg-[#FAFAFA]" style={{ opacity: item.active ? 1 : 0.6 }}>
              <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <i className={`fa-solid ${item.icon} ${item.iconColor}`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <div className="font-bold text-sm text-[#1A1A2E]">{item.title}</div>
                  <span className={`tag ${item.tagClass}`}>{item.tag}</span>
                  {!item.active && (
                    <span className="text-[10px] font-bold text-[#9CA3AF] bg-[#F3F4F6] px-2 py-0.5 rounded-lg">Paused</span>
                  )}
                </div>
                <div className="text-xs text-[#9CA3AF]">{item.schedule}</div>
                {item.next ? (
                  <div className="text-[10px] text-[#6C6FDF] font-semibold mt-1">Next: {item.next}</div>
                ) : (
                  <div className="text-[10px] text-[#9CA3AF] mt-1">Paused — toggle on to resume</div>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="w-7 h-7 bg-[#F3F4F6] rounded-lg flex items-center justify-center hover:bg-[#EEEEFF]">
                  <i className="fa-solid fa-pen text-[#9CA3AF] text-xs"></i>
                </button>
                <label className="toggle">
                  <input type="checkbox" defaultChecked={item.active} />
                  <span className="slider"></span>
                </label>
                <button className="w-7 h-7 bg-[#F3F4F6] rounded-lg flex items-center justify-center hover:bg-[#FEE2E2]">
                  <i className="fa-solid fa-trash text-[#9CA3AF] text-xs"></i>
                </button>
              </div>
            </div>
            {i < RECURRING.length - 1 && <div className="h-px bg-[#F9F9FF] mx-4"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
