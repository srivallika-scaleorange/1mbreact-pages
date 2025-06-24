import React from 'react'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {Routes,Route} from 'react-router-dom'
import BlogSection from './components/Blogs';
import Solutions from './components/Solutions';
import Adbm from './components/Abdm';
import AIHealthcareBlog from './components/AIHealthcareBlog';
import ABDMBlog from './components/ABDMBlog';
import HealthyLifestyleBlog from './components/HealthyLifeStyleBlog';
import './App.css'
import FooterSections from './components/Footer';
import AboutUs from './components/AboutUs';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/abdm' element={<Adbm/>}/>
        <Route path='/solutions' element={<Solutions/>}/>
        <Route path='/blogs' element={<BlogSection />}/>
        <Route path="/blog/ai-healthcare-future" element={<AIHealthcareBlog />} />
        <Route path="/blog/abdm-impact-understanding" element={<ABDMBlog />} />
        <Route path="/blog/healthier-lifestyle-tips" element={<HealthyLifestyleBlog />} />
        
        <Route path="/about" element={<AboutUs />} />
      
      </Routes>
 <FooterSections />
    </div>
  )
}

export default App