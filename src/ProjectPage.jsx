
import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';
import NavigationBar from './NavigationBar';
import Header from './Header'

//Pictures
import calendarImage from "./assets/calendar-app.png";
import lumberscanImage from "./assets/lumberscan-app.png";
import trangiaImage from "./assets/trangia-app.png";
import gameThirtyImage from "./assets/gameThirty-app.png";


const projects = [
  {
    title: "Mobile Calendar Application",
    description: "Development of a mobile calendar app for Android, offering intuitive scheduling and event management.",
    tags: ["Kotlin", "Jetpack Compose"],
    image: calendarImage,
    bgColor: "bg-purple-300",
  },
  {
    title: "Digital Guide for Lumberscan",
    description: "Creation of a user-friendly digital guide to assist with the Lumberscan application.",
    tags: ["UX", "UI"],
    image: lumberscanImage,
    bgColor: "bg-yellow-300",
  },
  {
    title: "Digital Guide for Trangia's Camping Stove",
    description: "Development of a comprehensive digital guide for Trangia's camping stove, designed to enhance user experience in outdoor cooking.",
    tags: ["UX", "UI", "React"],
    image: trangiaImage,
    bgColor: "bg-green-300",
  },
  {
    title: "Game Thirty / Yatzy Application",
    description: "Design and development of a digital version of the classic Yatzy game, offering smooth gameplay and interactive features.",
    tags: ["UX", "UI", "Kotlin"],
    image: gameThirtyImage,
    bgColor: "bg-green-300",
  },
];


export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      
      <Header/>
      <NavigationBar/>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
