import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from './hero.jsx'
import Middle from './middle.jsx'
import Order from './order.jsx'
import Captivating from './captivating.jsx'
import Note from './note.jsx'
import FooterLinks1 from './footer.jsx'
import Footer from './footer2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <HeroSection/>
    <Middle />
    <Order />
    <Captivating />
    <Note />
    <FooterLinks1 />
    <Footer/>
  </StrictMode>,
)
