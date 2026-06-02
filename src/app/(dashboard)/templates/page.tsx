const TEMPLATES = [
  { name: "My Typical Weekday", desc: "6 blocks · Study, Work, Health", icon: "fa-laptop-code", iconBg: "bg-[#EEEEFF]", iconColor: "text-[#6C6FDF]", tags: [{ name: "Study", cls: "tag-study" }, { name: "Work", cls: "tag-work" }, { name: "Health", cls: "tag-health" }, { name: "Meal", cls: "tag-meal" }], meta: "Last applied: 2 days ago · Created 2 weeks ago" },
  { name: "Weekend Routine", desc: "4 blocks · Relaxed pace", icon: "fa-umbrella-beach", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#15803D]", tags: [{ name: "Health", cls: "tag-health" }, { name: "Personal", cls: "tag-personal" }, { name: "Meal", cls: "tag-meal" }], meta: "Last applied: 5 days ago · Created 1 month ago" },
  { name: "Study Mode", desc: "7 blocks · Deep focus day", icon: "fa-brain", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7E22CE]", tags: [{ name: "Study", cls: "tag-study" }, { name: "Break", cls: "tag-break" }, { name: "Meal", cls: "tag-meal" }], meta: "Never applied · Created 1 week ago" },
];

export default function TemplatesPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
        <h1 className="text-xl font-extrabold text-[#1A1A2E]">Day Templates</h1>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="btn btn-outline text-xs py-2" style={{ fontSize: "11px" }}>
            <i className="fa-solid fa-floppy-disk"></i> Save Today
          </button>
          <button className="btn btn-primary text-xs py-2" style={{ fontSize: "11px" }}>
            <i className="fa-solid fa-plus"></i> Create
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TEMPLATES.map((t) => (
          <div key={t.name} className="card p-5 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 ${t.iconBg} rounded-xl flex items-center justify-center`}>
                <i className={`fa-solid ${t.icon} ${t.iconColor}`}></i>
              </div>
              <div className="flex gap-1.5">
                <button className="w-7 h-7 bg-[#F3F4F6] rounded-lg flex items-center justify-center hover:bg-[#EEEEFF]" title="Edit"><i className="fa-solid fa-pen text-[#9CA3AF] text-xs"></i></button>
                <button className="w-7 h-7 bg-[#F3F4F6] rounded-lg flex items-center justify-center hover:bg-[#EEEEFF]" title="Duplicate"><i className="fa-solid fa-copy text-[#9CA3AF] text-xs"></i></button>
                <button className="w-7 h-7 bg-[#F3F4F6] rounded-lg flex items-center justify-center hover:bg-[#FEE2E2]" title="Delete"><i className="fa-solid fa-trash text-[#9CA3AF] text-xs"></i></button>
              </div>
            </div>
            <h3 className="font-bold text-[#1A1A2E] mb-0.5">{t.name}</h3>
            <p className="text-xs text-[#9CA3AF] mb-1">{t.desc}</p>
            <p className="text-[10px] text-[#9CA3AF] mb-3">{t.meta}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {t.tags.map((tag) => (
                <span key={tag.name} className={`tag ${tag.cls}`}>{tag.name}</span>
              ))}
            </div>
            <button className="btn btn-primary w-full justify-center text-xs py-2.5" style={{ fontSize: "12px" }}>
              Apply to Date
            </button>
          </div>
        ))}

        {/* Add new */}
        <div className="border-2 border-dashed border-[#D1D5DB] rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#6C6FDF] hover:bg-[#FAFAFF] transition-all" style={{ minHeight: "200px" }}>
          <div className="w-10 h-10 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-plus text-[#9CA3AF]"></i>
          </div>
          <div className="text-sm font-semibold text-[#6B7280]">Create New Template</div>
          <div className="text-xs text-[#9CA3AF] text-center">Start from scratch or save today&apos;s layout</div>
        </div>
      </div>
    </div>
  );
}
