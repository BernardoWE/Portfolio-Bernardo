import styled from "styled-components";
import img from '../../assets/images/herostage.jpg';
export const Colors = {
  background: 'rgba(9, 7, 6, 0.8)',
  foreground: '#f5f1ea',
  card: '#120f0c',
  cardForeground: '#f5f1ea',
  popover: '#120f0c',
  popoverForeground: '#f5f1ea',
  primary: '#e1af4a',
  primaryForeground: '#110c09',
  secondary: '#1d1a17',
  secondaryForeground: '#f5f1ea',
  muted: '#1d1a17',
  mutedForeground: '#9a9185',
  accent: '#cc272e',
  accentForeground: '#f9f4ee',
  destructive: '#e7000b',
//   border: oklch(0.28 0.01 70 / 60%);
// border: rgba(44, 40, 36, 0.6),
  input: '#2c2824',
  ring: '#e1af4a',
  chart1: '#e1af4a',
  chart2: '#cc272e',
  chart3: '#9a9185',
  chart4: '#675136',
  chart5: '#322d29',
//   radius: 0.25rem;
  sidebar: '#090706',
  sidebarForeground: '#f5f1ea',
  sidebarPrimary:'#e1af4a',
  sidebarPrimaryForeground:'#110c09',
  sidebarAccent: '#1d1a17',
  sidebarAccentForeground: '#f5f1ea',
//   sidebarBorder: oklch(0.28 0.01 70 / 60%);
// sidebarBorder: rgba(44, 40, 36, 0.6),
  sidebarRing: '#e1af4a',
}
export const fonts = {
    heading: 'Playfair Display, sans-serif',
    body: 'Geist, sans-serif',
}
export const Page = styled.div`
    .section-width{
        width: min(1152px, calc(100% - 2rem));
        margin: 0 auto;
    }

`
export const Header = styled.header`
    background-color: ${Colors.background};
    padding: 1.3rem 2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(12px); 
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%;
    max-width: 1200px; */
     /* width: min(1152px, calc(100% - 2rem)); */
    margin: 0 auto;
}
nav div a{
    display: flex;
    gap: .5rem;
    
}
.span-mj{
    color: ${Colors.primary};
    font-weight: 700;

}
nav ul{
    display: flex;
    gap: 2rem;
    list-style: none;
    
}
a{
    color: ${Colors.mutedForeground};
    text-decoration: none;
    font-family: ${fonts.body};
    /* font-weight: 500; */
    letter-spacing:3px;
}
nav ul li a:hover{
    color: ${Colors.primary};
}
`
export const Hero = styled.section`
background: url(${img}) no-repeat center center;
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.container-hero{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    min-height: 100vh;
    max-width: 624px;
.hero-years{
    color: ${Colors.primary};
    letter-spacing: 4px;
    font-weight: 300;
    font-size: .95em;
}
.container-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.container-text h1{
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    color: ${Colors.foreground} ;
    font-family: ${fonts.heading};
    font-weight: 700;
    line-height: 1;
}
.container-text h1, .container-text span{
    font-size: 7rem;
}
.container-text h1 span{
    color: ${Colors.primary};
}
p{
    color: ${Colors.mutedForeground};
    font-family: ${fonts.body};
    font-size: 1.25rem;
    margin-top: 1rem;
}
.hero-cta{
    /* margin-top: 10em; */
    position: absolute;
    bottom: 2rem;
    color: ${Colors.mutedForeground};
    font-family: ${fonts.body};
    font-size: 1.25rem;
    
}
}



.container-buttons{
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}
`

export const Button = styled.button`
background-color: ${props => props.primary ? Colors.primary : 'transparent'};
color: ${props => props.primary ? Colors.primaryForeground : Colors.foreground};
border: none;
outline: ${props => props.primary ? 'none' : `1px solid ${Colors.mutedForeground}`};
padding: 1rem 2rem;
/* font-size: 1.25rem; */
letter-spacing: 2px;
font-weight: 700;
border-radius: 0.3rem;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    opacity: 0.9;
    color: ${props => props.primary ? Colors.primaryForeground : Colors.primary};
    outline: ${props => props.primary ? 'none' : `1px solid ${Colors.primary}`};
}
`
export const About = styled.section`
    min-height: 100vh;
    background-color: ${Colors.sidebar};
    outline: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
.container-about{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    /* max-width: 72em; */
    /* width: min(1280px, calc(100% - 2rem));
    margin: 0 auto; */
    align-items: center;
    justify-self: center;
    img{
        max-width: 100%;
        height: auto;
        border-radius: 0.2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
}
.about-text{
    
    h2{
        font-family: ${fonts.heading};
        color: ${Colors.foreground};
        font-size: 2.5rem;
    }
    p{
        font-family: ${fonts.body};
        color: ${Colors.mutedForeground};
    }
   

    .about-description{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        line-height: 1.6;
    }
    .about-title{
        color: ${Colors.primary};
        letter-spacing: 4px;
        text-transform: uppercase;
    }
    .about-quote{
        border-left: 2px solid ${Colors.primary};

        color: ${Colors.foreground};
        font-family: ${fonts.body};
        font-style: italic;
        letter-spacing: 1px;
        padding-left: 1em;
        margin-top: 2em;
    }
}
`
export const Discography = styled.section`
    min-height: 100vh;
    background-color: ${Colors.sidebar};
    display: flex;
    justify-content: center;
    align-items: center;
    .container-discography{
        display: flex;
        flex-direction: column;
        gap: 3em;
    }
    .container-discography-title{
        text-wrap: balance;
        max-width: 30em;
        display: flex;
        flex-direction: column;
        gap: 2em;
        p{
            color: ${Colors.primary};
            text-transform: uppercase;
            letter-spacing: .4em;
        }
        h2{
            color: ${Colors.cardForeground};
            font-size: 3rem;
        }
    }
    .discography-cards{
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr));
        background-color: ${Colors.card};
        border-left: 1px solid rgba(255, 255, 255, .08);
        border-top:1px solid rgba(255, 255, 255, .08);
        
    }
    .discography-card{
        /* border: 1px solid rgba(255, 255, 255, 0.03); */
        border-right: 1px solid rgba(255,255,255,.05);
        border-bottom: 1px solid rgba(255,255,255,.05);
        padding: 2em;
        font-family: ${fonts.body};
        min-height: 250px;
        display: flex;
        flex-direction: column;
        gap: 1em;
        .discography-card-title{
            color: ${Colors.cardForeground};
            font-family: ${fonts.heading};
            font-size: 1.5rem;
        }
        .discography-card-year{
            color: ${Colors.primary};
        }
        .discography-card-note{
            color: ${Colors.mutedForeground};
        }
        .discography-card-single{
            color: ${Colors.secondaryForeground};
            opacity: .7;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            /* margin-top: 4em; */
            margin-top: auto;
            padding-top: 1em;
        }
        p{
            font-size: .9em;
        }
        transition: all ease-in .1s;
    }
    .discography-card:hover{
        background-color: ${Colors.secondary};
    }
`