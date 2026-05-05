import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Navbar'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react' 

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App(){
return(
    <BrowserRouter>
    <ScrollToTop />
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>

 </BrowserRouter>

)
}
export default App