const express = require('express');
const app = express();
const port = 3001;

const mockBlogs = [
    { id: 1, title: 'Understanding AI: A Comprehensive Guide', summary: 'This blog post delves into the basics and complexities of Artificial Intelligence, exploring its applications and future potential.', content: 'Artificial Intelligence (AI) is a field of computer science that aims to create machines capable of intelligent behavior. AI is becoming an integral part of various industries, from healthcare to finance. This guide provides a comprehensive overview of AI, its history, current applications, and future trends.', date: '2024-05-01', image: '/images/blog1.jpg' },
    { id: 2, title: 'The Rise of Quantum Computing', summary: 'Quantum computing is set to revolutionize technology. Learn about its principles, how it works, and its potential impact.', content: 'Quantum computing harnesses the peculiar properties of quantum mechanics to perform computations far beyond the capabilities of classical computers. This post explains the fundamental concepts of quantum computing, including qubits, superposition, and entanglement, and discusses the potential applications and challenges ahead.', date: '2024-05-02', image: '/images/blog2.jpg' },
    { id: 3, title: 'Beyond the Cryptocurrency', summary: 'Explore the diverse applications of blockchain technology beyond digital currencies.', content: 'Blockchain technology, originally devised for Bitcoin, is finding applications in various fields such as supply chain management, voting systems, and secure data sharing. This blog explores how blockchain works and its potential to transform industries beyond finance.', date: '2024-05-03', image: '/images/blog3.jpg' },
    { id: 4, title: 'The Future of Renewable Energy', summary: 'Renewable energy sources are critical to addressing climate change.', content: 'As the world grapples with climate change, renewable energy sources such as solar, wind, and hydropower are becoming increasingly important. This article highlights recent advancements in renewable energy technologies and discusses the challenges and opportunities for a sustainable future.', date: '2024-05-04', image: '/images/blog4.jpg' },
    { id: 5, title: 'Advances in Biotechnology', summary: 'Biotechnology is driving innovations in medicine and agriculture.', content: 'Biotechnology leverages biological processes for industrial and other purposes, particularly in the fields of genetics and molecular biology. This blog post covers recent advances in biotechnology, including CRISPR gene editing, personalized medicine, and sustainable agricultural practices.', date: '2024-05-05', image: '/images/blog5.jpg' },
];

// Middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Endpoint to fetch paginated and searched blog posts
app.get('/api/blogs', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const searchQuery = req.query.search || '';
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const filteredBlogs = mockBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredBlogs.length / limit);

    res.json({
        page,
        totalPages,
        blogs: paginatedBlogs
    });
    
});

// Endpoint to fetch a blog post by ID
app.get('/api/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id, 10);
    const blog = mockBlogs.find(b => b.id === blogId);
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ message: 'Blog post not found' });
    }
});

// Endpoint to fetch the latest 3 blog posts
app.get('/api/latest-blogs', (req, res) => {
    const latestBlogs = mockBlogs.slice(-3).reverse();
    res.json(latestBlogs);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
