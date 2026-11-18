import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
/*import ComingSoon from './pages/ComingSoon'*/
import About from './pages/About'
import Expertise from './pages/Expertise'
import Services from './pages/Services'
import Experience from './pages/Experience'
import Publications from './pages/Publications'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
/*import { Blocks } from 'lucide-react'*/
import Gallery from './pages/Gallery'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/expertises" element={<Expertise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/actualites" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Gallery />} />
      </Route>
    </Routes>
  )
}