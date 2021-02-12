import React, {useState, useCallback} from 'react'
import Head from 'next/head'
import styled from "styled-components";

const Main = styled("main")`
  margin: 0;
  padding: 0;
  max-width: 100vw;
  height: 100vh;
  overflow-x: hidden;
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
    color: #555;
    padding-left: 134px;
    margin: 0;
    top: 48px;
    font-weight: 300;
     @media(max-width: 1000px){
     font-size: 16px;
     padding-left: 42px;
     top: 20px
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
    @media(max-width: 1000px){
      position: absolute;
      top: -128px;
    }
  }
`;

const Payoff = styled('h2')`
  position: absolute;
  margin: 0;
  top: 15vh;
  width: 99%;
  font-size: 5vmin;
  padding-right: 6vw;
  color: #555;
  text-align: right;
  font-weight: 200;
  text-transform: uppercase;
  padding-left: 25vw;
  line-height: 1;
  text-wrap: none;
  white-space: nowrap;
  & br:nth-of-type {
    display: none;
  }
  & span{
    font-size: 10vmin;
    font-weight: 700;
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
  top: 27.5vh;
  text-align: right;
  right: 6vw;
  font-size: 3.6vmin;
  font-weight: 200;
  color: #555;
  & span {
    font-size: 4.8vmin;
    font-style: italic;
  }
  & em {
    //border-bottom: 3px solid #555;
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
  & a, & a:visited { color: #555}
  & img {margin-right: 24px}
  
  @media(max-width: 1000px){
    width: 100vw;
    left: 0;
    padding: 5vw;
    bottom: 15vh;
    top: unset;
    font-size: 16px;
    & div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: fixed;
      bottom: 24px;
      & img {
        margin-right: unset;
      }
    }
`

const Work = styled("div")`
  position: relative;
  top: 80vh;
  h2 {
    text-align: center;
  }
  figure{
    width: 100%;
    height: 30vh;
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: contain;
    }
  }
`

const PortfolioItem  = styled("figure")``;

const Home = () => {
  const GRID_HORIZONTALS = 10;

  return (
    <Main>
      <Head>
        <title>Max Steenbergen | Pickaxe Digital Media</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
      </Head>


      <h1>Hello. I'm Max Steenbergen,</h1>
      <svg viewBox={'0 0 100 100'} overflow={'visible'} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
        <defs>
          <mask id={'_Window'}>
            <path fill={'#333'} d={`M12.25,9.9H200V${9.9 + (9.5 * (GRID_HORIZONTALS-1))}Z`} />
          </mask>
          <linearGradient id="_Linear1" x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse" >
            <stop offset="0" style={{stopColor:'rgb(240,11,255)', stopOpacity: 1}}/>
            <stop offset="100" style={{stopColor:'rgb(38,0,251)', stopOpacity: 1}}/>
          </linearGradient>
          <linearGradient id="_Linear2" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse" >
            <stop offset="0" style={{stopColor:'rgb(240,11,255)', stopOpacity: 0.5}}/>
            <stop offset="100" style={{stopColor:'rgb(38,0,251)', stopOpacity: 0}}/>
          </linearGradient>
          <pattern id="heroImage" patternUnits="userSpaceOnUse" width="175" height="100">
            <image href={'/img/max.jpg'} x="18" y="-20" height="100"/>
          </pattern>
        </defs>

        {/*<path fill={'url(#heroImage)'} fillOpacity={1} d={`M12.25,9.9H200V${9.9 + (9.5 * (GRID_HORIZONTALS-1))}Z`} mask={'url(#_Window)'} />*/}
        {/*<image href={'/img/max.jpg'} x="20" y="-20" height={115} mask={'url(#_Window)'}/>*/}

        {[...Array(GRID_HORIZONTALS)].map((line, i) => {
          return <line
            key={'diagonal_' + i}
            stroke={'#555'}
            strokeOpacity={0.33}
            strokeWidth={0.5}

            x1={12.25}
            y1={9.9}
            x2={200}
            y2={9.9 + (9.5 * i)}

            vectorEffect={'non-scaling-stroke'}
          />
        })}
        {/*<path d="m0,0 h50 l-35,100 H0 z" style={{fill: 'url(#_Linear1)'}} />*/}
        <g transform={'translate(0 10)'}>
          {/*<rect x={0} y={-10} width={100} height={100} fill={'#fff'} />*/}
          <path d="
          M25.5,-0.119L21.9,-0.119L15.253,14.834L18.853,14.834L25.5,-0.119Z
          M21,-0.119L12,-0.119L19.515,3.222L21,-0.119Z
          M30,-0.119 L26.4,-0.119 L23.376,6.657 L27.176,6.657 L30,-0.119Z" fill={'#555'}/>
        </g>

      </svg>

      <Payoff>and I'm all about<br/><span>NO NONSENSE</span></Payoff>
      <Blurb>
        That means I:<br />
        design <em>interfaces</em> that work, <br />
        keep the <em>team</em> grounded, <br />
        and help you <em>innovate</em>.
      </Blurb>

      <About>
        <p>
        I lead the <a href={'https://www.rhmarine.com/defence-safety-security/rhodium/ship-automation/amcs/'} target={'_blank'} rel={'noopener noreferrer'} title={'RH Marine'}>design efforts for marine automation</a>,
        am the other half of <a href={'https://90east.nl/'} target={'_blank'} rel={'noopener noreferrer'} title={'90East'}>90East</a> where we help teams work more efficiently with innovative tools and processes,
        and support clients with <a href={'https://gvv-aspasia.nl/volley'} target={'_blank'} rel={'noopener noreferrer'} title={'GVV-Aspasia Volleybal'}>design</a>, <a href={'https://sheetplanner.com'} target={'_blank'} rel={'noopener noreferrer'} title={'SheetPlanner for macOS'}>branding</a> and <a href={'https://transinnovate.nl'} target={'_blank'} rel={'noopener noreferrer'} title={'TransInnovate'}>development</a>.
          {/*I sometimes publish personal artwork under the handle Pickaxe.*/}
        <br />
          I aim for functional design, fresh ideas and a good dose of honesty.
        </p>
        <div>
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
          <img src={"img/direction.png"} style={{filter: "invert(1)"}}/>
          <figcaption>Direction</figcaption>
        </PortfolioItem>
        <PortfolioItem>
          <img src={"img/rhythm.png"} />
          <figcaption>Rhythm</figcaption>
        </PortfolioItem>
        <PortfolioItem>
          <img src={"img/hms.jpg"} />
          <figcaption>HMS</figcaption>
        </PortfolioItem>
        <PortfolioItem>
          <img src={"img/xdock.png"} />
          <figcaption>XDock</figcaption>
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






