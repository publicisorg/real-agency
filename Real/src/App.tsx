
import { Button, Navbar } from 'flowbite-react'
import './App.css'
import Header from './components/common/containers/Header'
import Menu from './components/common/containers/navbar'
import realLogo from './assets/logoReal.svg'



function App() {

  return (
    <div className='container mx-auto font-zector'>
      <Menu/>

      <Header />
      <p className='font-vegawanty text-center text-xl'>Our daily work, our core, <br />
what we stand for moves us for a continuous search on unleashing creative value for brands. <br />
Conneting strategies, ideas & people through storytelling and cutting edge experiences. <br />
We make things happen, tangible, shareable. <br />
we make them..</p>
    </div>
  )
}

export default App
