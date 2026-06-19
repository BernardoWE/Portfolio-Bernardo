import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import heroImg from '../../assets/hero.png'
import gloveImg from '../../assets/images/glove.png'
import './styles.js'
import { Header, Hero, Button, About } from './styles.js'

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
      <About>
        <div className="container-about">
          <img src={gloveImg} alt="Michael Jackson Glove" />
          <div className="about-text">
           <p>A lenda</p>

            <h2>Mais que um artista, um fenômeno global</h2>
            <p>
              Nascido em Gary, Indiana, Michael Joseph Jackson começou sua carreira ainda criança ao lado dos irmãos no The Jackson 5. Mas foi como artista solo que ele reescreveria as regras da música e da performance para sempre.

              Com uma combinação inigualável de voz, dança e visão artística, transformou o videoclipe em forma de arte, popularizou o moonwalk e vendeu mais de 400 milhões de discos pelo mundo — números que poucos chegaram perto de tocar.

              Seu legado vai além das vendas: ele quebrou barreiras raciais na indústria, elevou o padrão dos espetáculos ao vivo e inspirou gerações inteiras de artistas que vieram depois.

            </p>

            <blockquote>“A música tem sido minha terapia, minha melhor amiga e a forma mais pura de me expressar.”</blockquote>
          </div>
        </div>
      </About>
      

      
    </>
  )
}

export default App
