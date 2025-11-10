'use client';

import { useEffect, useState } from 'react';
import TicketList from './TicketList';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

 return (
  <section className="rounded-xl border p-4">
    <h2 className="text-lg font-semibold mb-3">Tickets</h2>
    <TicketList tickets={tickets} />
  </section>
);

}
