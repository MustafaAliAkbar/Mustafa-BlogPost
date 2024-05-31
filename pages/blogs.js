import Layout from '../components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3001/api/blogs?page=${page}&limit=3&search=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                setBlogs(data.blogs);
                setTotalPages(data.totalPages);
            });
    }, [page, searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setPage(1);
    };

    return (
            <div className="w-full max-w-4xl mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Blogs</h2>
                <SearchBar onSearch={handleSearch} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="border rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                    <p className="text-gray-700 mb-2">{blog.summary}</p>
                                    <p className="text-gray-500 text-sm">{blog.date}</p>
                                </div>
                                <Link href={`/blogs/${blog.id}`} className="text-blue-500 mt-2 inline-block self-end">
                                    Learn More &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">{page} of {totalPages}</span>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

            </div>
    );
}
