import { Container } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './components/pages/home';
import AboutMe from './components/pages/aboutMe'
import Projects from './components/pages/projects'
import ContactMe from './components/pages/contactMe'
import CV from './components/pages/cv';


function App() {
  return (
    <>
    <Container>
      <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutMe' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contactMe' element={<ContactMe />} />
            <Route path='/cv' element={<CV />} />
          </Routes>
      </Router>
    </Container>
  </>
  )
}

export default App
