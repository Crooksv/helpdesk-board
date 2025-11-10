'use client';

const OPTIONS = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

export default function StatusFilter({ value, onChange }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium">Status</span>
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
