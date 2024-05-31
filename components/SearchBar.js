import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form onSubmit={handleSearch} className="mb-4 w-full flex items-center space-x-2">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blogs..."
                className="px-4 py-2 border rounded w-full"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </form>
    );
}
