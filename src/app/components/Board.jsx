'use client';

import { useEffect, useMemo, useState } from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import StatusMessage from './StatusMessage';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [queue, setQueue] = useState({});
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchTickets() {
      try {
        setLoading(true);
        const res = await fetch('/api/tickets', { cache: 'no-store' });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        setError('Failed to load tickets.');
      } finally {
        setLoading(false);
      }
    }

    fetchTickets();
  }, []);

  const visibleTickets = useMemo(() => {
  const q = search.trim().toLowerCase();

  return tickets.filter(t => {
    if (filters.status !== 'All' && t.status !== filters.status) return false;
    if (filters.priority !== 'All' && t.priority !== filters.priority) return false;

    if (q) {
      const haystack = `${t.title} ${t.description}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  });
}, [tickets, filters, search]);

 const isEmpty = !loading && !error && visibleTickets.length === 0;

function handleAddToQueue(id) {
  setQueue((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
}


return (
  <section className="rounded-xl border p-4">
    <h2 className="text-lg font-semibold mb-3">Tickets</h2>

  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4">
  <StatusFilter
    value={filters.status}
    onChange={(v) => setFilters(f => ({ ...f, status: v }))}
  />
  <PriorityFilter
    value={filters.priority}
    onChange={(v) => setFilters(f => ({ ...f, priority: v }))}
  />
  <SearchBox value={search} onChange={setSearch} />
</div>

<StatusMessage loading={loading} error={!!error} isEmpty={isEmpty} />

   {!loading && !error && !isEmpty && (
      <TicketList
        tickets={visibleTickets}
        queue={queue}
        onAddToQueue={handleAddToQueue}
      />
    )}
  </section>
);

}
