
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
                <p>My name is Lisa, and I am in my fourth year of 
                  the Master of Science program in Interaction and 
                  Design. In addition to my interest in nature and 
                  sports, I have a strong passion for programming. 
                  Before starting my studies, I had never written a 
                  line of code, but after just a year in the program, 
                  I knew that software development was the path I wanted 
                  to pursue. As a result, I have focused my master's studies 
                  on artificial intelligence, app development, and human-robot interaction.</p>
            </div>

        </div>
      </section>
      
    </div>
  );
}
