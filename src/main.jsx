import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Project from './Components/Projects/Projects.jsx'
import Resume from './Components/Resume.jsx'
import NotFound from './Components/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StrictMode>
        <BrowserRouter>
            <App/>
            <Routes>
                <Route path='/' element={<Home/>} >
                    
                </Route>
                <Route path='/Contact' element={<Contact/>} />
                <Route path="/Project" element={<Project/>}/> 
                <Route path="/Resume" element={<Resume/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>        
        </BrowserRouter>
    </StrictMode>
  </StrictMode>,
)
