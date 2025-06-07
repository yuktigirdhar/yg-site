import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KafkaVisualizer from './KafkaVisualizer';
import Navbar from './Navbar';
import Home from './Home';

// Create some basic page components
const Projects = () => <div><h1>Projects</h1></div>
const Resume = () => <div><h1>Resume</h1></div>
const Contact = () => <div><h1>Contact</h1></div>

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<KafkaVisualizer />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
