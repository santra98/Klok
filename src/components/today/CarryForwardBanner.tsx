"use client";

import { useState } from "react";

// ──────────────────────────────────────────────────────────────
// CarryForwardBanner
// ──────────────────────────────────────────────────────────────
// Shows at the top of Today's Log when yesterday had unfinished
// or skipped todos. User can quickly re-add them to today or
// dismiss them.
//
// CURRENT: rendered with hardcoded dummy data so you can see it.
// TODO (user): replace `dummyCarried` with server-fetched data
//              — see /lib/carry-forward.ts or similar.
// ──────────────────────────────────────────────────────────────

export type CarriedTodo = {
  id: string;
  text: string;
  blockTitle: string; // which block it was in yesterday
};

export function CarryForwardBanner({
  todos = dummyCarried, // DEMO default
  todayBlocks = dummyBlocks, // DEMO default
}: {
  todos?: CarriedTodo[];
  todayBlocks?: { id: string; title: string }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [bannerHidden, setBannerHidden] = useState(false);

  const remaining = todos.filter((t) => !dismissed.has(t.id));
  if (bannerHidden || remaining.length === 0) return null;

  function dismissOne(id: string) {
    setDismissed((prev) => new Set(prev).add(id));
    /* TODO (user): persist via dismissCarriedTodoAction(id) */
  }

  function dismissAll() {
    setBannerHidden(true);
    /* TODO (user): persist via dismissAllCarriedAction() */
  }

  function addToBlock(todoId: string, blockId: string) {
    setDismissed((prev) => new Set(prev).add(todoId));
    /* TODO (user): persist via carryForwardTodoAction(todoId, blockId) */
  }

  return (
    <div
      className="mb-5 rounded-lg overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Banner header */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 transition-colors"
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--surface-2)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(251,191,36,0.1)",
              border: "1px solid rgba(251,191,36,0.2)",
            }}
          >
            <i
              className="fa-solid fa-arrow-rotate-left"
              style={{ fontSize: "12px", color: "var(--warning)" }}
            ></i>
          </div>
          <div className="text-left">
            <div
              className="text-sm font-semibold"
              style={{ color: "var(--text)" }}
            >
              {remaining.length} todo{remaining.length !== 1 && "s"} carried
              from yesterday
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>
              {expanded ? "Click to collapse" : "Click to view & decide"}
            </div>
          </div>
        </div>
        <i
          className={`fa-solid fa-chevron-${expanded ? "up" : "down"} text-xs`}
          style={{ color: "var(--text-3)" }}
        ></i>
      </button>

      {/* Expanded list */}
      {expanded && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "8px 12px",
          }}
        >
          {remaining.map((todo) => (
            <CarriedTodoRow
              key={todo.id}
              todo={todo}
              todayBlocks={todayBlocks}
              onAdd={(blockId) => addToBlock(todo.id, blockId)}
              onDismiss={() => dismissOne(todo.id)}
            />
          ))}

          {/* Bulk actions */}
          <div
            className="flex items-center justify-between pt-3 mt-2"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              From yesterday&apos;s log
            </span>
            <button
              type="button"
              onClick={dismissAll}
              className="text-xs font-medium px-3 py-1.5 rounded transition-colors"
              style={{
                color: "var(--text-2)",
                background: "transparent",
                border: "1px solid var(--border)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Dismiss all
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Single carried-todo row ───────────────────────────────────
function CarriedTodoRow({
  todo,
  todayBlocks,
  onAdd,
  onDismiss,
}: {
  todo: CarriedTodo;
  todayBlocks: { id: string; title: string }[];
  onAdd: (blockId: string) => void;
  onDismiss: () => void;
}) {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <div
      className="flex items-center gap-3 py-2 px-2 rounded transition-colors"
      style={{ position: "relative" }}
    >
      <div
        className="cb skip flex-shrink-0"
        style={{ pointerEvents: "none" }}
      ></div>
      <div className="flex-1 min-w-0">
        <div className="text-sm" style={{ color: "var(--text)" }}>
          {todo.text}
        </div>
        <div className="text-[11px] mt-0.5" style={{ color: "var(--text-3)" }}>
          From &quot;{todo.blockTitle}&quot;
        </div>
      </div>

      {/* Add to block */}
      <div style={{ position: "relative" }}>
        <button
          type="button"
          onClick={() => setPickerOpen((o) => !o)}
          className="text-xs font-medium px-3 py-1.5 rounded transition-opacity"
          style={{
            background: "var(--btn-primary-bg)",
            color: "var(--btn-primary-text)",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Add to today <i className="fa-solid fa-chevron-down text-[9px] ml-1"></i>
        </button>

        {pickerOpen && (
          <div
            className="menu open"
            style={{
              right: 0,
              left: "auto",
              minWidth: 180,
            }}
          >
            {todayBlocks.length === 0 ? (
              <div
                className="menu-item"
                style={{ color: "var(--text-3)", fontStyle: "italic" }}
              >
                No blocks today — create one first
              </div>
            ) : (
              todayBlocks.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  className="menu-item"
                  onClick={() => {
                    onAdd(b.id);
                    setPickerOpen(false);
                  }}
                >
                  <i className="fa-solid fa-plus"></i> {b.title}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* Dismiss */}
      <button
        type="button"
        onClick={onDismiss}
        className="w-7 h-7 rounded flex items-center justify-center transition-colors"
        style={{
          background: "transparent",
          color: "var(--text-3)",
          border: "none",
          cursor: "pointer",
        }}
        title="Dismiss"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--surface-2)";
          e.currentTarget.style.color = "var(--text)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--text-3)";
        }}
      >
        <i className="fa-solid fa-xmark text-xs"></i>
      </button>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// DEMO DATA (remove after wiring up real server-fetched data)
// ──────────────────────────────────────────────────────────────
const dummyCarried: CarriedTodo[] = [
  { id: "demo-1", text: "Workout — 30 min", blockTitle: "Morning Routine" },
  { id: "demo-2", text: "Read chapter 5", blockTitle: "Deep Work" },
  { id: "demo-3", text: "Reply to Slack DMs", blockTitle: "Admin" },
];

const dummyBlocks = [
  { id: "blk-1", title: "Morning Routine" },
  { id: "blk-2", title: "Deep Work" },
  { id: "blk-3", title: "Evening" },
];
