import React from 'react';
import './Portfolio.css';
import Header from './Header';
import NavigationBar from './NavigationBar';

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white min-h-screen p-8">
      <Header />
      <NavigationBar />

      {/* Kontaktinformation Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Contact Information</h2>
        
        <section className="contact-card-container">
            <a href="mailto:lisa@example.com" className="contact-card">
                <div className="icon">
                📧 {/* Email icon */}
                </div>
                <h3>Email</h3>
                <p>lisaihre@gmail.com</p>
            </a>

            <a href="www.linkedin.com/in/lisaihre" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="icon">
                🔗 {/* LinkedIn icon */}
                </div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/lisa-ihre</p>
            </a>
            </section>

      </section>
    </div>
  );
}
