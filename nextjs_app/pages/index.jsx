import { useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import axios from 'axios'

import MeCard from '../components/parallaxComps/MeCard'
import SwitchTechButton from '../components/SwitchTechButton'
import ProjectTimeline from '../components/ProjectTimeline'
import CheckoutDotfiles from '../components/CheckoutDotfiles'
import TechnologiesAndFrameWorks from '../components/TechnologiesAndFrameWorks'
import MyValues from '../components/MyValues'
import ParallaxArrow from '../components/utils/ParallaxArrow'
import ScrollArrow from '../components/utils/ScrollArrow'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Index = ({ data }) => {
  const parallaxRef = useRef(null)
  const [techComp, setTechComp] = useState('center')
  const breakMd = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Parallax
      ref={parallaxRef}
      pages={breakMd ? 8 : 6}
      style={{
        backgroundColor: '#6593F5',
        height: '100vh',
        width: '100vw',
        position: 'absolute'
      }}
    >
      {/* PAGE BACKGROUNDS */}
      <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#0080FF' }} />
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#0080FF' }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0080FF' }} />
      <ParallaxLayer offset={0} speed={0} factor={7} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      {/* PAGE BACKGROUNDS */}

      {/* SCROLL ARROWS */}
      <ParallaxArrow
        offset={0}
        parallaxRef={parallaxRef}
        to={1}
        text='Tools and Technologies'
      />

      <Hidden mdDown>
        <ParallaxArrow
          offset={1}
          parallaxRef={parallaxRef}
          to={2}
          text='Skillset and Values'
        />
      </Hidden>

      <Hidden mdDown>
        <ParallaxArrow
          offset={2}
          parallaxRef={parallaxRef}
          to={3}
          text='Career / Project timeline'
        />
      </Hidden>

      {/* SCROLL ARROWS */}

      {/* PAGE CONTENT */}
      <ParallaxLayer
        offset={0.2}
        speed={-0.2}
        style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', color: 'white' }}
      >
        <Typography variant='h1'>Hi, I'm Eilif!</Typography>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.1}
        speed={0.6}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <MeCard displayPic={data.display_pic} text={data.text_about_me} name={data.my_name} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        factor={breakMd ? 2 : 1}
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '100px', zIndex: 1 }}
      >
        <Typography
          component='h1'
          gutterBottom
          align='center'
          variant='h4'
          style={{
            width: '100%',
            fontWeight: 100,
            color: 'white'
          }}
        >
          {data.parallax_2_header}
        </Typography>
        <SwitchTechButton setTechComp={setTechComp} techComp={techComp} style={{ marginTop: '75px' }} />
        {techComp === 'center' && (
          <TechnologiesAndFrameWorks scrollRef={parallaxRef} logosTwo={data.backend_logos} logosOne={data.frontend_logos} textOne='Frontend' textTwo='Backend' />
        )}
        {techComp === 'left' && (
          <TechnologiesAndFrameWorks scrollRef={parallaxRef} logosOne={data.general_logos} textOne='General skills' />
        )}
        {techComp === 'right' && (
          <TechnologiesAndFrameWorks scrollRef={parallaxRef}logosOne={data.tools_logos} textOne='Tools' />
        )}

      </ParallaxLayer>

      <ParallaxLayer
        offset={breakMd ? 2.4 : 2}
        speed={breakMd ? 0.3 : 0.1}
        factor={3}
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '100px' }}
      >
        <Typography
          align='center'
          component='h1'
          gutterBottom
          variant='h4'
          style={{
            width: '100%',
            color: 'white',
            marginBottom: '8%',
            fontWeight: 100
          }}
        >
          My Skillset and Values
        </Typography>
        <MyValues values={data.values} />
        <Hidden mdUp>
          <ScrollArrow scrollRef={parallaxRef} text='Career / Project timeline' absolute n={4.2} />
        </Hidden>
      </ParallaxLayer>

      <ParallaxLayer
        offset={breakMd ? 4.2 : 3}
        factor={data.projects.length}
        speed={breakMd ? 0.1 : 0.1}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginTop: '100px' }}
      >
        <Typography gutterBottom variant='h4' style={{ fontWeight: 100, color: 'white' }}>Career / Project timeline</Typography>
        <ProjectTimeline projects={data.projects} />
        <CheckoutDotfiles image={data.dotfiles_teaser} />
        <ScrollArrow scrollRef={parallaxRef} text='About Me' n={0} last absolute />
      </ParallaxLayer>
      {/* PAGE CONTENT */}
    </Parallax>
  )
}

export async function getStaticProps () {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/home`)
    const sortedProjects = data.projects.sort((a, b) => new Date(b.date) - new Date(a.date))
    return { props: { data: { ...data, projects: sortedProjects } } }
  } catch {
    return { props: { data: {} } }
  }
}

export default Index
