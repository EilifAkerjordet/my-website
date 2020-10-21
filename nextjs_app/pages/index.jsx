import { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import MeCard from '../components/parallaxComps/MeCard'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


const Index = () => {
  const parallaxRef = useRef(null)
  return (
    <>
      <Parallax
        ref={parallaxRef}
        pages={3}
        style={{
          backgroundColor: '#6593F5',
          height: '95vh',
          marginTop: '5vh',
          width: '100vw'
        }}
      >
        {/* PAGE BACKGROUNDS */}
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0080FF' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        {/* PAGE BACKGROUNDS */}

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        {/* PAGE CONTENT */}
        <ParallaxLayer
          offset={0.1}
          speed={0.6}
          onClick={() => parallaxRef.current.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <MeCard />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallaxRef.current.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => parallaxRef.current.scrollTo(0)}
        >
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>
        {/* PAGE CONTENT */}
      </Parallax>
    </>
  )
}

export default Index
