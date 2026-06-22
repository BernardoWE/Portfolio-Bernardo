import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import heroImg from '../../assets/hero.png'
import gloveImg from '../../assets/images/glove.png'
import './styles.js'
import { Header, Hero, Button, About, Discography, Page } from './styles.js'

function App() {
  const [count, setCount] = useState(0)
  const cards = [
    { year: 1979, title: "Off the Wall", note:"O disco que anunciou o nascimento de um gênio solo.", single:"Don't Stop 'Til You Get Enough"
     },
    { year: 1982, title: "Thriller", note:"O álbum mais vendido de todos os tempos. Um marco absoluto.", single:"Billie Jean · Beat It · Thriller"
     },
    { year: 1987, title: "Bad", note:"Cinco singles nº1 nos EUA — um feito inédito na história.", single:"Bad · The Way You Make Me Feel · Smooth Criminal"
     },
    { year: 1991, title: "Dangerous", note:"O som new jack swing e a reinvenção de uma era.", single:"Black or White · Remember the Time"
     },
    { year: 1995, title: "HIStory", note:"Parte grandes sucessos, parte manifesto pessoal.", single:"You Are Not Alone · Earth Song"
     },
    { year: 2001, title: "Invincible", note:"Seu último álbum de estúdio, sofisticado e ambicioso.", single:"You Rock My World"
     },

  ]
  return (
    <Page>
      <Header >
        <nav className='section-width'>
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
      <Hero >
        <div className='container-hero section-width'>
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
      <About >
        <div className="container-about section-width">
          <img src={gloveImg} alt="Michael Jackson Glove" />
          <div className="about-text">
            <p className='about-title'>A lenda</p>

            <h2>Mais que um artista, um fenômeno global</h2>
            <div className='about-description'>
              <p>
                Nascido em Gary, Indiana, Michael Joseph Jackson começou sua carreira ainda criança ao lado dos irmãos no The Jackson 5. But foi como artista solo que ele reescreveria as regras da música e da performance para sempre.
              </p>
              <p>
                Com uma combinação inigualável de voz, dança e visão artística, transformou o videoclipe em forma de arte, popularizou o moonwalk e vendeu mais de 400 milhões de discos pelo mundo — números que poucos chegaram perto de tocar.
              </p>
              <p>
                Seu legado vai além das vendas: ele quebrou barreiras raciais na indústria, elevou o padrão dos espetáculos ao vivo e inspirou gerações inteiras de artistas que vieram depois.

              </p>
            </div>

            <blockquote className='about-quote'>
              “A música tem sido minha terapia, minha melhor amiga e a forma mais pura de me expressar.”
            </blockquote>
          </div>
        </div>
      </About>
      <Discography >
        <div className="container-discography section-width">
          <p>Discografia</p>
          <h2 className="discography-title">Álbuns que definiram gerações</h2>
          <div className='discography-cards'>
            {cards.map((album, index) => (
              <div key={index} className='discography-card'>
                <p>{album.year}</p>
                <h3>{album.title}</h3>
                <p>{album.note}</p>
                <p>{album.single}</p>
              </div>
            ))}
          </div>
        </div>
      </Discography>
      

      
    </Page>
  )
}

export default App
