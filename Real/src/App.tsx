
import { Button, Navbar } from 'flowbite-react'
import './App.css'
import Header from './components/common/containers/Header'
import Menu from './components/common/containers/navbar'
import realLogo from './assets/logoReal.svg'
import Reel from './components/common/containers/reel'
import Gallery from './components/common/containers/gallery'
import Marquecina from './components/ui/videoGallery/Marquee'
import Contact from './components/common/containers/Contact'
import Manifest from './components/common/containers/manifest'

function App() {

  return (
    <>
    <div className='container mx-auto font-zector'>
      <Menu />
      <Header />
    </div>
    <Manifest/>
    <Reel/>
    <Gallery/>
    <Marquecina/>
    <Contact/>
    </>
  )
}

export default App
