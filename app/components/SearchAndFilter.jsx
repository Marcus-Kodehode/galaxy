import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchAndFilter({ type, filters }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [filter, setFilter] = useState(searchParams.get('filter') || '');

  useEffect(() => {
    setSearch(searchParams.get('q') || '');
    setFilter(searchParams.get('filter') || '');
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    if (filter) params.set('filter', filter);
    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-center mb-6">
      <input
        type="text"
        placeholder={`Søk etter ${type}...`}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border rounded px-3 py-2 w-64"
      />
      {filters && (
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">Alle</option>
          {filters.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      )}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Søk</button>
    </form>
  );
}
