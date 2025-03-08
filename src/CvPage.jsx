
import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';
import NavigationBar from './NavigationBar';
import Header from './Header'

//Pdf
import cvPDF from './assets/CV2025_lisaihre.pdf'



export default function CvPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      
      <Header/>
      <NavigationBar/>
      <section>
      

        
        <div className="cv-wrapper">
          <iframe 
            src={cvPDF}
            width="100%" 
            height="600px" 
            className="cv-viewer"
            title="CV"
          />
        </div>
        
        
      </section>
      
    </div>
  );
}
