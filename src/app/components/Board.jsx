'use client';

import { useEffect, useState } from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';

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

  function handleAddToQueue(id) {
  setQueue((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
}

if (loading) return <p>Loading tickets...</p>;
if (error) return <p className="text-red-600">{error}</p>;

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

    <TicketList
      tickets={tickets}
      queue={queue}
      onAddToQueue={handleAddToQueue}
    />
  </section>
);


}
