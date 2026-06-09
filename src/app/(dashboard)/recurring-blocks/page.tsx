// Rendering: SSG (UI-only placeholder data for now).
// This page is using DUMMY data — when you wire up the
// RecurringRule schema, replace the mock list with a server
// fetch + use Server Actions for create/edit/delete/toggle.

import RecurringClient from "./RecurringClient";

// ──────────────────────────────────────────────────────────────
// DEMO DATA (remove after wiring up real RecurringRule model)
// ──────────────────────────────────────────────────────────────
const dummyRules = [
  {
    id: "rule-1",
    name: "Morning Routine",
    emoji: "🌅",
    tagName: "Personal",
    startTime: "07:00",
    endTime: "08:00",
    recurrence: "WEEKDAYS" as const,
    daysOfWeek: [1, 2, 3, 4, 5],
    active: true,
    todosCount: 4,
    nextRun: "Tomorrow, 7:00 AM",
    createdAt: "2 weeks ago",
  },
  {
    id: "rule-2",
    name: "Deep Work Session",
    emoji: "📚",
    tagName: "Work",
    startTime: "09:30",
    endTime: "12:00",
    recurrence: "DAILY" as const,
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
    active: true,
    todosCount: 3,
    nextRun: "Today, 9:30 AM",
    createdAt: "1 month ago",
  },
  {
    id: "rule-3",
    name: "Evening Workout",
    emoji: "💪",
    tagName: "Health",
    startTime: "18:00",
    endTime: "19:00",
    recurrence: "CUSTOM" as const,
    daysOfWeek: [1, 3, 5],
    active: false,
    todosCount: 2,
    nextRun: "Paused",
    createdAt: "3 days ago",
  },
  {
    id: "rule-4",
    name: "Sunday Reset",
    emoji: "🌙",
    tagName: "Personal",
    startTime: "20:00",
    endTime: "21:00",
    recurrence: "WEEKLY" as const,
    daysOfWeek: [0],
    active: true,
    todosCount: 5,
    nextRun: "Sun, 8:00 PM",
    createdAt: "1 week ago",
  },
];

export default function RecurringBlocksPage() {
  return <RecurringClient initialRules={dummyRules} />;
}
