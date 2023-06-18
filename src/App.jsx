
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
function App() {
 
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
          
          <Route path='/'  element={<HomePage/>} />
          <Route path='/about'  element={<AboutPage/>} />
          <Route path='/service'  element={<h1>Rout service</h1>} />
          <Route path='/portfolio'  element={<h1>Rout portfolio</h1>} />
          <Route path='/contact'  element={<h1>Rout contact</h1>} />
          <Route path='/login'  element={<h1>Rout Login</h1>} />
          
          <Route path='*'  element={<h1>Esta ruta no existe❌</h1>} />
        
      </Routes>
      <Footer/>
     
      
    </div>
  )
}

export default App

 /* <div className='container_1'>
      
          <p>hola</p> 
          <ul className='ul'>
            <li><span>Texto 1</span></li>
            <li><span>Texto 2</span></li>
            <li><span>Texto 3</span></li>
          </ul>
      
      </div> */