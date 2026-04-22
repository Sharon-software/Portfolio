import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Navbar'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'


function App(){
return(
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/contact" element={<Contact />} />
    
   
    </Routes>


</>
)
}
export default App