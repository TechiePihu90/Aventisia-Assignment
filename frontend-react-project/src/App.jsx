import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import KnowledgeBase from './pages/KnowledgeBase';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/knowledge-base" element={<KnowledgeBase/>}/>
     </Routes>
     </Router>
    </>
  )
}

export default App
