import { useState } from 'react';

export default function AboutUs({ onSearch }) {

    return (
        <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
                Welcome to our blog where we share insights on various topics. Our team is dedicated to bringing you the latest news and articles.
                We believe in the power of information and aim to provide our readers with valuable and engaging content.
            </p>
            <p className="text-gray-700 mb-4">
                Our blog covers a wide range of topics including technology, health, lifestyle, and more. Whether you are looking for the latest trends,
                in-depth analyses, or just some fun reads, we have something for everyone.
            </p>
            <p className="text-gray-700 mb-4">
                Our team of writers is passionate about their work and strives to bring you well-researched and thoughtful articles. We hope to create a
                community of informed and engaged readers who share our love for learning and discovery.
            </p>
            <img src="/images/about.jpg" alt="About Us" className="w-full h-64 object-cover rounded-lg" />
        </section>
    );
}
