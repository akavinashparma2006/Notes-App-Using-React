

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import About from './about.jsx'

const Navabar = () => {
  return (
    <BrowserRouter>
      <nav>
        <h1>NoteX</h1>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navabar



