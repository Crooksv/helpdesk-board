'use client';

export default function TicketCard({ ticket }) {
  const updated = new Date(ticket.updatedAt);
  return (
    <article className="rounded-xl border p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-tight">{ticket.title}</h3>
        <span className="text-xs px-2 py-1 rounded-full border">{ticket.id}</span>
      </div>

      <p className="mt-2 text-sm text-gray-700">{ticket.description}</p>

      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-xl bg-gray-50 p-2">
          <dt className="text-gray-500">Priority</dt>
          <dd className="font-medium">{ticket.priority}</dd>
        </div>
        <div className="rounded-xl bg-gray-50 p-2">
          <dt className="text-gray-500">Status</dt>
          <dd className="font-medium">{ticket.status}</dd>
        </div>
        <div className="rounded-xl bg-gray-50 p-2">
          <dt className="text-gray-500">Assignee</dt>
          <dd className="font-medium">{ticket.assignee}</dd>
        </div>
        <div className="rounded-xl bg-gray-50 p-2">
          <dt className="text-gray-500">Updated</dt>
          <dd className="font-medium">{updated.toLocaleString()}</dd>
        </div>
      </dl>
    </article>
  );
}
