import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Navbar'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react' 
import ScrollToPage from "./ScrollToPage";
import PageIndicator from "./PageIndicator";

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
     <ScrollToPage />
    <Navbar/>
    <PageIndicator />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>

 </BrowserRouter>

)
}
export default App