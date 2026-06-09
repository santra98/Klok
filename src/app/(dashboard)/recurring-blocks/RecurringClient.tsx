"use client";

import { useState } from "react";

// ──────────────────────────────────────────────────────────────
// RecurringClient — full UI for recurring rules
// ──────────────────────────────────────────────────────────────
// CURRENT: receives mocked rules from page.tsx and stores state
// locally. All actions (toggle/edit/delete/create) are stubs.
//
// TODO (user): wire to Server Actions:
//   - createRecurringRuleAction(formData)
//   - updateRecurringRuleAction(id, formData)
//   - toggleRecurringRuleAction(id, active)
//   - deleteRecurringRuleAction(id)
// ──────────────────────────────────────────────────────────────

type Recurrence = "DAILY" | "WEEKDAYS" | "WEEKLY" | "CUSTOM";

export type RuleData = {
  id: string;
  name: string;
  emoji: string;
  tagName: string;
  startTime: string;
  endTime: string;
  recurrence: Recurrence;
  daysOfWeek: number[];
  active: boolean;
  todosCount: number;
  nextRun: string;
  createdAt: string;
};

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function recurrenceText(rule: RuleData): string {
  if (rule.recurrence === "DAILY") return "Every day";
  if (rule.recurrence === "WEEKDAYS") return "Weekdays (Mon–Fri)";
  if (rule.recurrence === "WEEKLY") {
    const d = rule.daysOfWeek.map((i) => DAY_LABELS[i]).join(", ");
    return `Weekly · ${d}`;
  }
  return rule.daysOfWeek.map((i) => DAY_LABELS[i]).join(", ");
}

export default function RecurringClient({
  initialRules,
}: {
  initialRules: RuleData[];
}) {
  const [rules, setRules] = useState<RuleData[]>(initialRules);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<RuleData | null>(null);

  const activeCount = rules.filter((r) => r.active).length;
  const totalRules = rules.length;

  function handleToggle(id: string) {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, active: !r.active } : r)),
    );
    /* TODO (user): toggleRecurringRuleAction(id) */
  }

  function handleDelete(id: string) {
    setRules((prev) => prev.filter((r) => r.id !== id));
    /* TODO (user): deleteRecurringRuleAction(id) */
  }

  function handleOpenCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function handleOpenEdit(rule: RuleData) {
    setEditing(rule);
    setModalOpen(true);
  }

  function handleSaveRule(rule: RuleData) {
    if (rule.id) {
      // Edit existing
      setRules((prev) => prev.map((r) => (r.id === rule.id ? rule : r)));
    } else {
      // Create new
      const newRule = { ...rule, id: `rule-${Date.now()}` };
      setRules((prev) => [newRule, ...prev]);
    }
    setModalOpen(false);
    /* TODO (user): createRecurringRuleAction or updateRecurringRuleAction */
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
        <div>
          <h1
            className="text-xl font-bold"
            style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
          >
            Recurring Blocks
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-3)" }}>
            Schedule blocks to repeat daily, weekly, or on custom days.
          </p>
        </div>
        <button
          type="button"
          onClick={handleOpenCreate}
          className="btn btn-primary"
          style={{ fontSize: "13px" }}
        >
          <i className="fa-solid fa-plus"></i> New Rule
        </button>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
        <StatCard label="Total rules" value={String(totalRules)} />
        <StatCard
          label="Active"
          value={String(activeCount)}
          accent="var(--success)"
        />
        <StatCard
          label="Paused"
          value={String(totalRules - activeCount)}
          accent="var(--text-3)"
        />
      </div>

      {/* Rule list */}
      {rules.length === 0 ? (
        <EmptyState onCreate={handleOpenCreate} />
      ) : (
        <div className="space-y-3">
          {rules.map((rule) => (
            <RuleCard
              key={rule.id}
              rule={rule}
              onToggle={() => handleToggle(rule.id)}
              onEdit={() => handleOpenEdit(rule)}
              onDelete={() => handleDelete(rule.id)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <RuleModal
          initial={editing}
          onSave={handleSaveRule}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

// ── Stat card ────────────────────────────────────────────────
function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div
      className="card p-4 flex items-center justify-between"
      style={{ minHeight: 62 }}
    >
      <span className="text-xs" style={{ color: "var(--text-3)" }}>
        {label}
      </span>
      <span
        className="text-2xl font-bold"
        style={{
          color: accent ?? "var(--text)",
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ── Empty state ──────────────────────────────────────────────
function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="card p-12 text-center">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
        style={{ background: "var(--surface-2)" }}
      >
        <i
          className="fa-solid fa-rotate"
          style={{ color: "var(--text-2)", fontSize: "18px" }}
        ></i>
      </div>
      <p className="text-base font-semibold" style={{ color: "var(--text)" }}>
        No recurring rules yet
      </p>
      <p
        className="text-sm mt-1 mb-5 max-w-md mx-auto"
        style={{ color: "var(--text-3)" }}
      >
        Set up blocks that automatically appear every day, every weekday, or on
        specific days of the week.
      </p>
      <button
        type="button"
        onClick={onCreate}
        className="btn btn-primary"
        style={{ fontSize: "12px" }}
      >
        <i className="fa-solid fa-plus"></i> Create Your First Rule
      </button>
    </div>
  );
}

// ── Rule card ────────────────────────────────────────────────
function RuleCard({
  rule,
  onToggle,
  onEdit,
  onDelete,
}: {
  rule: RuleData;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [confirmDel, setConfirmDel] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="card p-5"
      style={{
        position: "relative",
        opacity: rule.active ? 1 : 0.65,
        transition: "opacity 0.15s",
      }}
    >
      <div className="flex items-start gap-4">
        {/* Emoji icon */}
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: "var(--surface-2)",
            fontSize: 20,
          }}
        >
          {rule.emoji}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3
              className="font-semibold"
              style={{ color: "var(--text)", fontSize: 15 }}
            >
              {rule.name}
            </h3>
            <span
              className="text-[11px] font-medium px-2 py-0.5 rounded"
              style={{
                background: "var(--surface-2)",
                color: "var(--text-2)",
                border: "1px solid var(--border)",
              }}
            >
              {rule.tagName}
            </span>
            {!rule.active && (
              <span
                className="text-[11px] font-medium px-2 py-0.5 rounded"
                style={{
                  background: "rgba(248,113,113,0.08)",
                  color: "var(--danger)",
                  border: "1px solid rgba(248,113,113,0.2)",
                }}
              >
                Paused
              </span>
            )}
          </div>

          <div
            className="flex items-center gap-x-4 gap-y-1 flex-wrap text-xs"
            style={{ color: "var(--text-2)" }}
          >
            <span>
              <i
                className="fa-solid fa-clock mr-1.5"
                style={{ opacity: 0.6 }}
              ></i>
              {rule.startTime} – {rule.endTime}
            </span>
            <span>
              <i
                className="fa-solid fa-repeat mr-1.5"
                style={{ opacity: 0.6 }}
              ></i>
              {recurrenceText(rule)}
            </span>
            <span>
              <i
                className="fa-solid fa-list-check mr-1.5"
                style={{ opacity: 0.6 }}
              ></i>
              {rule.todosCount} todo{rule.todosCount !== 1 && "s"}
            </span>
            <span style={{ color: "var(--text-3)" }}>
              <i
                className="fa-solid fa-circle-arrow-right mr-1.5"
                style={{ opacity: 0.6 }}
              ></i>
              Next: {rule.nextRun}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Toggle switch */}
          <label
            className="toggle"
            title={rule.active ? "Pause rule" : "Resume rule"}
          >
            <input
              type="checkbox"
              checked={rule.active}
              onChange={onToggle}
            />
            <span className="slider"></span>
          </label>

          {/* Menu */}
          <div className="menu-wrap">
            <button
              type="button"
              className={`menu-trigger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              style={{ opacity: 1 }}
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <div className={`menu ${menuOpen ? "open" : ""}`}>
              <button
                type="button"
                className="menu-item"
                onClick={() => {
                  setMenuOpen(false);
                  onEdit();
                }}
              >
                <i className="fa-solid fa-pen"></i> Edit
              </button>
              <button
                type="button"
                className="menu-item"
                onClick={() => {
                  setMenuOpen(false);
                  onToggle();
                }}
              >
                <i
                  className={`fa-solid ${rule.active ? "fa-pause" : "fa-play"}`}
                ></i>{" "}
                {rule.active ? "Pause" : "Resume"}
              </button>
              <div className="menu-divider"></div>
              <button
                type="button"
                className="menu-item danger"
                onClick={() => {
                  setMenuOpen(false);
                  setConfirmDel(true);
                }}
              >
                <i className="fa-solid fa-trash"></i> Delete
              </button>
            </div>
            {confirmDel && (
              <div className="confirm-popover">
                <p>Delete this rule?</p>
                <div className="actions">
                  <button
                    type="button"
                    className="cancel"
                    onClick={() => setConfirmDel(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="confirm"
                    onClick={() => {
                      setConfirmDel(false);
                      onDelete();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Create / Edit Modal ──────────────────────────────────────
function RuleModal({
  initial,
  onSave,
  onClose,
}: {
  initial: RuleData | null;
  onSave: (rule: RuleData) => void;
  onClose: () => void;
}) {
  const isEdit = !!initial;
  const [name, setName] = useState(initial?.name ?? "");
  const [emoji, setEmoji] = useState(initial?.emoji ?? "🌅");
  const [tagName, setTagName] = useState(initial?.tagName ?? "Personal");
  const [startTime, setStartTime] = useState(initial?.startTime ?? "07:00");
  const [endTime, setEndTime] = useState(initial?.endTime ?? "08:00");
  const [recurrence, setRecurrence] = useState<Recurrence>(
    initial?.recurrence ?? "DAILY",
  );
  const [daysOfWeek, setDaysOfWeek] = useState<number[]>(
    initial?.daysOfWeek ?? [1, 2, 3, 4, 5],
  );

  function toggleDay(d: number) {
    setDaysOfWeek((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d].sort(),
    );
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      id: initial?.id ?? "",
      name,
      emoji,
      tagName,
      startTime,
      endTime,
      recurrence,
      daysOfWeek:
        recurrence === "DAILY"
          ? [0, 1, 2, 3, 4, 5, 6]
          : recurrence === "WEEKDAYS"
            ? [1, 2, 3, 4, 5]
            : daysOfWeek,
      active: initial?.active ?? true,
      todosCount: initial?.todosCount ?? 0,
      nextRun: "Tomorrow",
      createdAt: initial?.createdAt ?? "just now",
    });
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="card p-5 md:p-6 w-full max-w-lg animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold" style={{ color: "var(--text)" }}>
            {isEdit ? "Edit Rule" : "New Recurring Rule"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded flex items-center justify-center"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
            }}
          >
            <i
              className="fa-solid fa-xmark text-sm"
              style={{ color: "var(--text-2)" }}
            ></i>
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              className="block text-xs font-semibold mb-1.5"
              style={{ color: "var(--text)" }}
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Morning Routine"
              className="inp"
              required
              maxLength={80}
            />
          </div>

          {/* Emoji + tag */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: "var(--text)" }}
              >
                Emoji
              </label>
              <input
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
                className="inp"
                maxLength={2}
                style={{ fontSize: 18 }}
              />
            </div>
            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: "var(--text)" }}
              >
                Tag
              </label>
              <input
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
                className="inp"
                placeholder="Personal / Work / Health..."
              />
            </div>
          </div>

          {/* Time range */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: "var(--text)" }}
              >
                Start Time
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="inp"
                required
              />
            </div>
            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: "var(--text)" }}
              >
                End Time
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="inp"
                required
              />
            </div>
          </div>

          {/* Recurrence */}
          <div>
            <label
              className="block text-xs font-semibold mb-2"
              style={{ color: "var(--text)" }}
            >
              Repeat
            </label>
            <div className="flex flex-wrap gap-2">
              {(["DAILY", "WEEKDAYS", "WEEKLY", "CUSTOM"] as Recurrence[]).map(
                (r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRecurrence(r)}
                    className={`rchip ${recurrence === r ? "rchip-active" : ""}`}
                  >
                    {r === "DAILY"
                      ? "Every day"
                      : r === "WEEKDAYS"
                        ? "Weekdays"
                        : r === "WEEKLY"
                          ? "Weekly"
                          : "Custom"}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Days picker (only for WEEKLY / CUSTOM) */}
          {(recurrence === "WEEKLY" || recurrence === "CUSTOM") && (
            <div>
              <label
                className="block text-xs font-semibold mb-2"
                style={{ color: "var(--text)" }}
              >
                On these days
              </label>
              <div className="flex gap-2">
                {DAY_LABELS.map((d, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleDay(i)}
                    className={`daychip ${daysOfWeek.includes(i) ? "daychip-active" : ""}`}
                  >
                    {d.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline flex-1 justify-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1 justify-center"
            >
              {isEdit ? "Save Changes" : "Create Rule"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
