import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './ProjectPage'
import Construction from './ConstructionPage'
import Contact from './ContactPage';
import AboutmePage from './aboutmePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CvPage from './cvPage'
import Portfolio from './ProjectPage'


function App() {
  const [count, setCount] = useState(0)
  const REPO_NAME = "portfolio_upd";
  return (
    <Router basename={`/${REPO_NAME}`}>
      <Routes>
      <Route path="/" element={<AboutmePage />} />
        <Route path="/about" element={<AboutmePage />} />
        <Route path="projects/construction" element={<Construction />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CvPage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
