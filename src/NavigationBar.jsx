import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

export default function NavigationBar() {
    return (
        <nav className="flex justify-center gap-4 mb-12">
            {['About', 'Projects', 'CV', 'Contact'].map((item) => (
                <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="nav-link"
                >
                    {item}
                </Link>
            ))}
        </nav>
    );
}
