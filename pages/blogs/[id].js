import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/api/blogs/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Blog post not found');
                    }
                })
                .then(data => setBlog(data))
                .catch(() => setError(true));
        }
    }, [id]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative shadow-md">
                    <strong className="font-bold">Error:</strong>
                    <span className="block sm:inline">The blog post you are looking for does not exist.</span>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <p>Loading...</p>
        );
    }


    return (
        <div className="w-full max-w-6xl mx-auto py-24">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover mb-4" />
            <p className="text-gray-500 mb-4">{blog.date}</p>
            <p>{blog.content}</p>
        </div>
    );
}


