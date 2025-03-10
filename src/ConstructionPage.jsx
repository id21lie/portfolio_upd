import React from "react";
import './Portfolio.css';
import NavigationBar from './NavigationBar';
import Header from './Header'

import constructionImage from './assets/constructionImage.png'

export default function ConstructionPage() {
  return (
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <Header/>
      <NavigationBar/>
      <h2 className="text-5xl font-bold mb-4">Under Construction</h2>
      <p className="text-lg text-gray-300 mb-6">
        This page is under construction. Stay tuned!
      </p>
      <div className="relative w-48 h-48">
        <img
          src={constructionImage}
          alt="Under Construction"
          className="hammer"
        />
      </div>
      
    </div>
  );
}
