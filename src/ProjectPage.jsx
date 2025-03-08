
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
    title: "Mobil kalenderapplikation",
    description: "Utveckling av kalenderapplikation för Android.",
    tags: ["Kotlin", "Jetpack Compose"],
    image: calendarImage,
    bgColor: "bg-purple-300",
  },
  {
    title: "Digital guide till Lumberscan plattform",
    description: "Utveckling av digital guide.",
    tags: ["UX", "UI"],
    image: lumberscanImage,
    bgColor: "bg-yellow-300",
  },
  {
    title: "Digital guide till Trangias stormkök",
    description: "Utveckling av digital guide.",
    tags: ["UX", "UI", "React"],
    image: trangiaImage,
    bgColor: "bg-green-300",
  },
  {
    title: "Game thirty / Yatzy application",
    description: "Utveckling av digital guide.",
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
