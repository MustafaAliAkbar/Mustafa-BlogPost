import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div className="bg-black text-white flex items-center justify-center min-h-screen">
            <div className="text-center">
                <nav className="flex justify-center space-x-8">
                    <Link href="/home" passHref>
                        <button className={`px-6 py-4 rounded-md text-sm font-medium ${router.pathname === '/home' ? 'bg-gray-900' : 'bg-gray-800 hover:bg-gray-700'}`}>
                            Home 1
                        </button>
                    </Link>
                    <Link href="/main" passHref>
                        <button className={`px-6 py-4 rounded-md text-sm font-medium ${router.pathname === '/main' ? 'bg-gray-900' : 'bg-gray-800 hover:bg-gray-700'}`}>
                            Home 2
                        </button>
                    </Link>
                    <Link href="/blogs" passHref>
                        <button className={`px-6 py-4 rounded-md text-sm font-medium ${router.pathname === '/blogs' ? 'bg-gray-900' : 'bg-gray-800 hover:bg-gray-700'}`}>
                            Blogs
                        </button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}