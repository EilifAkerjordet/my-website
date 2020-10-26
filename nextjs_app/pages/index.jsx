import { useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import { useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import MeCard from '../components/parallaxComps/MeCard'
import SwitchTechButton from '../components/SwitchTechButton'
import ProjectTimeline from '../components/ProjectTimeline'

import TechnologiesAndFrameWorks from '../components/TechnologiesAndFrameWorks'
import MyValues from '../components/MyValues'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Index = ({ data }) => {
  const parallaxRef = useRef(null)
  const [techComp, setTechComp] = useState('center')
  const theme = useTheme()
  return (
    <Parallax
      ref={parallaxRef}
      pages={5}
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
      <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#0080FF' }} />
      <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#0080FF' }} />
      <ParallaxLayer offset={0} speed={0} factor={4} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
      {/* PAGE BACKGROUNDS */}

      {/* PAGE CONTENT */}
      <ParallaxLayer
        offset={0.2}
        speed={-0.2}
        onClick={() => parallaxRef.current.scrollTo(1)}
        style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}
      >
        <Typography variant='h1'>Hi, I'm Eilif!</Typography>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.1}
        speed={0.6}
        onClick={() => parallaxRef.current.scrollTo(1)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <MeCard displayPic={data.display_pic} text={data.text_about_me} name={data.my_name} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.93}
        speed={0.3}
        onClick={() => parallaxRef.current.scrollTo(2)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography
          align='center'
          component='h1'
          gutterBottom
          variant='h4'
          style={{
            width: '100%',
            fontWeight: 100
          }}
        >
          {data.parallax_2_header}
        </Typography>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.7}
        speed={-0.1}
        onClick={() => parallaxRef.current.scrollTo(2)}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}
      >
        <SwitchTechButton setTechComp={setTechComp} techComp={techComp} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.35}
        speed={0.7}
        onClick={() => parallaxRef.current.scrollTo(2)}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', zIndex: 2, padding: theme.spacing(1) }}
      >
        {techComp === 'center' && (
          <TechnologiesAndFrameWorks logosTwo={data.backend_logos} logosOne={data.frontend_logos} textOne='Frontend' textTwo='Backend' />
        )}
        {techComp === 'left' && (
          <TechnologiesAndFrameWorks logosOne={data.general_logos} textOne='General skills' />
        )}
        {techComp === 'right' && (
          <TechnologiesAndFrameWorks logosOne={data.tools_logos} textOne='Tools' />
        )}
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.3}
        onClick={() => parallaxRef.current.scrollTo(0)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <MyValues values={data.values} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.2}
        speed={-0.1}
        onClick={() => parallaxRef.current.scrollTo(0)}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
      >
        <Typography gutterBottom variant='h4' style={{ fontWeight: 100 }}>Career / Project timeline</Typography>
        <ProjectTimeline projects={data.projects} />
      </ParallaxLayer>
      {/* PAGE CONTENT */}
    </Parallax>
  )
}

export async function getServerSideProps () {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/home`)
    const sortedProjects = data.projects.sort((a, b) => new Date(b.date) - new Date(a.date))
    return { props: { data: { ...data, projects: sortedProjects } } }
  } catch {
    return { props: { data: {} } }
  }
}

export default Index
