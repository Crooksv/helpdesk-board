'use client';

const OPTIONS = ['All', 'Low', 'Medium', 'High', 'Critical'];

export default function PriorityFilter({ value, onChange }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium">Priority</span>
      <select
        className="rounded-xl border px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
