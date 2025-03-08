
import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';
import NavigationBar from './NavigationBar';
import Header from './Header'

//Pictures
import profilePic from './assets/profilePic.png'


export default function AboutmePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      
      <Header/>
      <NavigationBar/>
      <section className='aboutme-page'>
        <div className='aboutme-container'>
            <img className='profilePic' src={profilePic} alt="" />
            <div className='aboutme-text'>
                <h3>About me</h3>
                <p>Mitt namn är Lisa, och jag studerar mitt fjärde år på 
                    Civilingenjörsprogrammet i interaktion och design. Utöver 
                    mitt intresse för natur och sport brinner jag för programmering.
                     Innan min utbildning hade jag aldrig kodat, men redan efter ett
                      år på programmet visste jag att mjukvaruutveckling var ett 
                      område jag ville arbeta med. Därför har jag under min master 
                      specialiserat mig inom artificiell intelligens, apputveckling 
                      och människa-robotinteraktion.</p>
            </div>

        </div>
      </section>
      
    </div>
  );
}
