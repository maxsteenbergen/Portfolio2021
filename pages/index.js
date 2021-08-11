import React, { useEffect,useState } from 'react'
import Head from 'next/head'
import styled from "styled-components";

const Main = styled("main")`
  margin: 0;
  padding: 0;
  max-width: 100vw;
  height: 100vh;
  font-family: "Jost",sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  color: #333;
  background: #fff;
  position: relative;
  p {
    margin-bottom: 32px;
  }
  & > h1 {
    position: absolute;
    font-size: 32px;
    color: #4B68B2;
    padding-left: 76px;
    margin: 0;
    top: 36px;
    font-weight: 300;
     @media(max-width: 1000px){
      font-size: 20px;
      padding-left: 42px;
      top: -12px;
     }
  }
  & > * {
    box-sizing: border-box;
  }
  & > svg {
    height: 100%;
    max-width: 100vw;
    margin: 0;
    position: absolute;
    object-position: left top;
    @media(max-width: 1000px){
      position: absolute;
    }
    & > circle {
      //mix-blend-mode: color-burn ;
      //opacity: 0.5;
    }
  }
  & .social{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & a {
      margin: 0;
      padding: 0;
      height: 24px;
    }
    & img {
      margin: 0;
      margin-right: 24px;
      height: 24px;
      
    }
  }
  hr {
    border: none;
    background: #4B68B2;
    height: 1px;
  }
`;

const Payoff = styled('h2')`
  position: absolute;
  margin: 0;
  top: 10vh;
  text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff,0 0 4px #fff,0 0 5px #fff;
  width: 99%;
  font-size: 5vmin;
  padding-right: 6vw;
  color: #4B68B2;
  text-align: right;
  font-weight: 200;
  padding-left: 25vw;
  line-height: 1.2;
  text-wrap: none;
  white-space: nowrap;
  & br:nth-of-type {
    display: none;
  }
  & span{
    font-size: 8vmin;
    font-weight: 700;
    text-transform: uppercase;
    &::after{
      position: absolute;
      content: '.';
    }
  }
  @media(max-width: 1000px){
    padding-right: 25px;
    padding-left: 0;
    width: 75vw;
    top: 64px;
    right: 0;
    & br:nth-of-type {
      display: unset;
    }
    & span {
      font-size: 8vmin;
    }
  }
`

const Blurb = styled('p')`
  position:absolute;
  top: 25vh;
  text-align: right;
  right: 6vw;
  font-size: 3.6vmin;
  font-weight: 200;
  color: #4B68B2;
  & span {
    font-size: 4.8vmin;
    font-style: italic;
  }
  & em {
    //border-bottom: 3px solid #4B68B2;
    font-style: normal;
    font-weight: 400;
  }
  @media(max-width: 1000px){
    top: 20vh;
    font-size: 2.8vmax;
    & span {
      font-size: 3.6vmax;
    }
  }
`

const About = styled('div')`
  position: absolute;
  top: 47vh;
  left: 5vw;
  width: 33vw;
  font-size: 18px;
  font-weight: 300;
  & a, & a:visited { color: #4B68B2}
  @media(max-width: 1000px){
    width: 100vw;
    left: 0;
    padding: 5vw;
    bottom: 12.5vh;
    top: unset;
    font-size: 16px;
    & div.social {
      background: rgba(255,255,255,0.8);
      z-index: 12;
      backdrop-filter: blur(3px);
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      position: fixed;
      padding-bottom: 24px;
      padding-top: 24px;
      //padding-left: 12px;
      bottom: 0;
      & img {
        margin-right: unset;
      }
    }
`

const Work = styled("div")`
  position: relative;
  top: 90vh;
  padding-bottom: 15vh;
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 36px;
    color: #4B68B2
  }
  hr {
    margin-top: 16vmin;
    margin-bottom: 16vmin;
  }
`

const PortfolioItem  = styled("figure")`
  img {
    width: 100%;
    height: 100%;
    max-height: 80vh;
    object-position: center;
    object-fit: contain;
    margin-bottom: 36px;
  }
  figcaption{
    width: clamp(480px, 60vw, 860px);
    max-width: 80vw;
    margin: 0 auto;
    line-height: 2em;
    font-weight: 300;
    position: relative;
    & > strong {
      position: absolute;
      top: -52px;
      font-weight: 400;
      color: #4B68B2;
      border-bottom: 1px solid #4B68B2;
    }
    h3 {
      color: #4B68B2;
      font-size: 36px;
      & > img{
        height: 64px;
        object-position: left;
      }
    }
    a{
      display: inline;
      color: #fff;
      background: #4B68B2;
      border-radius: 6px;
      text-decoration: none;
      padding: 4px 12px;
      :after{
        content: ' ➝'
      };
      &.CTA {
        display: inline-block;
        padding: 10px 24px;
      }
    }
  }
`;

const Header = styled('header')`
  position: sticky;
  top: 0;
  background: rgba(255,255,255,0.9);
  width: 100%;
  height: 64px;
  display: none;
  margin: 0;
  align-items: center;
  box-shadow: 0 12px 60px hsla(223,41%,50%, 0.3);
  z-index: 92;
  backdrop-filter: blur(5px);
  padding-left: 12px
`

const Home = () => {
  const GRID_HORIZONTALS = 10;


  return (
    <Main>
      <Head>
        <title>Max Steenbergen | Pickaxe Digital Media</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
      </Head>

      <Header>
        <svg viewBox={"12 -2.5 20 20"} style={{width: 48, height: '100%'}}>
          <path d="
            M25.5,-0.119L21.9,-0.119L15.253,14.834L18.853,14.834L25.5,-0.119Z
            M21,-0.119L12,-0.119L19.515,3.222L21,-0.119Z
            M30,-0.119 L26.4,-0.119 L23.376,6.657 L27.176,6.657 L30,-0.119Z" fill={'#4B68B2'}/>
        </svg>
        <hr style={{flex: 1, marginLeft: 36, marginRight: 36}} />
        <div className={"social"}>
          <a href={'https://twitter.com/maxsteenbergen'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/twitter.svg'} alt={'twitter'}/></a>
          <a href={'mailto:hello@maxsteenbergen.com'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/mail.svg'} alt={'mail'}/></a>
        </div>
      </Header>


      <h1>Hello. I'm Max Steenbergen,</h1>
      <svg viewBox={'0 0 100 100'} overflow={'visible'} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" preserveAspectRatio="xMidYMin meet">
        <defs>
          <mask id={'_Window'}>
            <path fill={'url(#mask)'} d={`M8,9.9H200V${9.9 + (9.5 * (GRID_HORIZONTALS-1))}Z`} />
          </mask>
          <linearGradient id="mask" x1="0" y1="0" x2="100" y2="50" gradientUnits="userSpaceOnUse" >
            <stop offset="0" style={{stopColor:'#fff', stopOpacity: 1}}/>
            <stop offset="100" style={{stopColor:'#000', stopOpacity: 1}}/>
          </linearGradient>
          <linearGradient id="_Linear1" x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse" >
            <stop offset="0" style={{stopColor:'rgb(240,11,255)', stopOpacity: 1}}/>
            <stop offset="100" style={{stopColor:'rgb(38,0,251)', stopOpacity: 1}}/>
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>

          <pattern id="heroImage" >
            <image href={'/img/max.jpg'} />
          </pattern>
        </defs>
        
        {/*<path fill={'url(#heroImage)'} fillOpacity={1} d={`M12.25,9.9H200V${9.9 + (9.5 * (GRID_HORIZONTALS-1))}Z`} mask={'url(#_Window)'} />*/}
        <image href={'/img/max.jpg'} x={15} y={-20} width={100} mask={'url(#_Window)'}/>

        {[...Array(GRID_HORIZONTALS)].map((line, i) => {
          return <line
            key={'diagonal_' + i}
            stroke={'#4B68B2'}
            strokeOpacity={0.33}
            strokeWidth={0.5}

            x1={8}
            y1={9.9}
            x2={200}
            y2={9.9 + (9.5 * i)}

            vectorEffect={'non-scaling-stroke'}
          />
        })}
        {/*<path d="m0,0 h50 l-35,100 H0 z" style={{fill: 'url(#_Linear1)'}} />*/}
        <g transform={'translate(-4 10)'}>
          {/*<rect x={0} y={-10} width={100} height={100} fill={'#fff'} />*/}
          <path d="
          M25.5,-0.119L21.9,-0.119L15.253,14.834L18.853,14.834L25.5,-0.119Z
          M21,-0.119L12,-0.119L19.515,3.222L21,-0.119Z
          M30,-0.119 L26.4,-0.119 L23.376,6.657 L27.176,6.657 L30,-0.119Z" style={{fill: 'url(#_Linear1)'}}/>
        </g>

      </svg>

      <Payoff>and I'm all about<br/><span>eyes forward</span></Payoff>
      <Blurb>
        That means I:<br />
        design <em>products</em> that work, <br />
        keep the <em>team</em> grounded, <br />
        and help you <em>innovate</em>.
      </Blurb>

      <About>
        <p>
        I lead the <a href={'https://www.rhmarine.com/defence-safety-security/rhodium/ship-automation/amcs/'} target={'_blank'} rel={'noopener noreferrer'} title={'RH Marine'}>design efforts for marine automation</a>,
        am the other half of <a href={'https://90east.nl/'} target={'_blank'} rel={'noopener noreferrer'} title={'90East'}>90East</a> where we help teams work more efficiently with innovative tools and processes,
        and support clients with design, branding and development.
          {/*I sometimes publish personal artwork under the handle Pickaxe.*/}
        <br />
          I aim for functional design, fresh ideas and a good dose of honesty. Sometimes, <a href={"https://maxsteenbergen.substack.com/"} title={''} rel={'noopener noreferrer'} target={'_blank'}>I write about my ideas</a>.
        </p>
        <div className={"social"}>
          <a href={'https://twitter.com/maxsteenbergen'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/twitter.svg'} alt={'twitter'}/></a>
          <a href={'https://github.com/maxsteenbergen'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/github.svg'} alt={'github'}/></a>
          <a href={'https://instagram.com/pickaxedigital'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/instagram.svg'} alt={'instagram'}/></a>
          <a href={'https://www.linkedin.com/in/max-steenbergen-630b93aa/'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/linkedin.svg'} alt={'linkedin'}/></a>
          {/*<a href={'https://codepen.io/maxsteenbergen'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/codepen.svg'} alt={'codepen'}/></a>*/}
          <a href={'mailto:hello@maxsteenbergen.com'} title={''} rel={'noopener noreferrer'} target={'_blank'}><img src={'/img/mail.svg'} alt={'mail'}/></a>
        </div>
      </About>

      <Work>
        <h2>Some of my work</h2>
        <PortfolioItem>
          <img src={"img/direction.png"} />
          <figcaption>
            <strong>Product design &amp; development</strong>
            <h3 id={"Direction"}>Direction</h3>
            <p>
              Direction is my ongoing side project where I envision roadmaps of a different sort. No chronological planning, no set deadlines: they are not only never met, they are irrelevant. What matters is that everyone on the team knows what they are working toward and how they think to get there. Product development is like a trip around around the world: it's about the journey with numerous destinations, not about the end of the trip.
            </p>
          </figcaption>
        </PortfolioItem>
          <hr />
        <PortfolioItem>
          <img src={"img/rhythm.png"} />
          <figcaption>
            <strong>Product development, team building</strong>
            <h3>Rhythm</h3>
            <p>
              As part of a software development team, I noticed that the method we were following had a number of major inherent flaws that were hindering our progress. Pressure was mounting, productivity appeared to be lagging and quality was decreasing. After we finally realized what was causing these issues, I set to work to remedy this. The resulting process is a much better fit for the team and a far cry from the dictated, set-in-stone method we were doing before.
            </p>
            <a className={'CTA'} href={"https://maxsteenbergen.medium.com/getting-into-shape-after-scrum-ffdcc358f203"} title="RH Marine HMS" target={"_blank"} rel={"noopener noreferrer"}>The entire story</a>
          </figcaption>
        </PortfolioItem>
        <hr />
        <PortfolioItem>
          <img src={"img/hms.jpg"} />
          <figcaption>
            <strong>UI design, front end development</strong>
            <h3>Helideck Monitoring System</h3>
            <p>
              Helicopters that want to land on oil platforms or ships need absolute certainty and stability of their intended landing zone. Any deviation from the expected location of the landing zone can result in fatal accidents. To prevent this, several regulations are in place that determine when a helicopter can touch down. This involves meteorological data as well as positioning parameters. All this data is to be presented to operators in a clear, concise and standardized UI.
              I designed and partially developed this interface to adhere to the strict regulations, but also to bring a little innovation and modern standards to the often conservative maritime market. For instance, this project had a tablet-first approach from the very beginning, a unique differentiator compared to its competitors.
            </p>
              <a className={'CTA'} href={"https://www.rhmarine.com/defence-safety-security/rhodium/ship-automation/helideck-monitoring-system/"} title="RH Marine HMS" target={"_blank"} rel={"noopener noreferrer"}>Project website</a>
          </figcaption>
        </PortfolioItem>
        <hr />
        <PortfolioItem>
          <img src={"img/xdock.png"} style={{borderRadius: 12}}/>
          <figcaption>
            <strong>UI design, front end development</strong>
            <h3><img src={"img/xdock_logo.svg"} alt={"XDock"}/></h3>
            <p>With <a href={'https://90east.nl/'} target={'_blank'} rel={'noopener noreferrer'} title={'90East'}>90East</a>, we developed a central communications hub where transport providers and their customers share a common platform for offers, orders and information exchange. Using XDock, each party involved only needs a single interface instead of a separate connection to each individual partner company.<br />
            To monitor all the traffic across the XDock platform and to perform routine maintenance tasks, we designed and implemented a custom dashboard.
            </p>
          </figcaption>
        </PortfolioItem>
      </Work>
      <style jsx global>{`
      body {
        
        margin: 0;
      }
    `}</style>
    </Main>
  )
}

export default Home






