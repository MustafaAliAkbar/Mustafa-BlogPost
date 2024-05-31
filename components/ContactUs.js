import { useState } from 'react';

export default function ContactUs({ onSearch }) {

    return (
        <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
                Have any questions or feedback? Feel free to reach out to us through our contact page. We're here to help!
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Email:</strong> contact@ourblog.com
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Phone:</strong> +123-456-7890
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Address:</strong> 123 Blog Street, Blog City, BL 45678
            </p>
            <img src="/images/contact.jpg" alt="Contact Us" className="w-full h-64 object-cover rounded-lg" />
        </section>
    );
}
