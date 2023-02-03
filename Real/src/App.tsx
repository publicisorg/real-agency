
import { Button, Navbar } from 'flowbite-react'
import './App.css'
import Header from './components/common/containers/Header'
import Menu from './components/common/containers/navbar'
import realLogo from './assets/logoReal.svg'
import Reel from './components/common/containers/reel'
import Gallery from './components/common/containers/gallery'
import Marquecina from './components/ui/videoGallery/Marquee'
import Contact from './components/common/containers/Contact'

function App() {

  return (
    <>
    <div className='container mx-auto font-zector'>
      <Menu />
      <Header />
    </div>
    <Reel/>
    <Gallery/>
    <Marquecina/>
    <Contact/>
    </>
  )
}

export default App
