'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium">Search</span>
      <input
        type="text"
        className="rounded-xl border px-3 py-2"
        placeholder="Search title or description…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
