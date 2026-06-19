import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import heroImg from '../../assets/hero.png'
import './styles.js'
import { Header, Hero, Button } from './styles.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <nav>
          <div>
            <a href="">
              <span className='span-mj'>MJ</span> 
              <span>REI DO POP</span>
            </a>
          </div>
          <ul>
            <li><a href="#about">SOBRE</a></li>
            <li><a href="#discography">DISCOGRAFIA</a></li>
            <li><a href="#moments">MOMENTOS</a></li>
            <li><a href="#legacy">LEGADO</a></li>
          </ul>
        </nav>
      </Header>
      <Hero>
        <div className='container-hero'>
          <p className='hero-years'>1958 — 2009</p>
          <div className='container-text'>
            <h1>Michael <span>Jackson</span></h1>
            <p>O Rei do Pop. O artista que transformou cada palco em um templo, <br />cada passo em história e cada canção em eternidade.</p>
          </div>
          <div className='container-buttons'>
            <a href="#discography">
            <Button primary>EXPLORAR DISCOGRAFIA</Button></a>
            <a href="#legacy">
            <Button>CONHEÇA A LENDA</Button></a>
          </div>
          <p className='hero-cta'>role para descobrir</p>
        </div>
        
      </Hero>
      

      
    </>
  )
}

export default App
