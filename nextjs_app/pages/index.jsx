import { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import { useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import MeCard from '../components/parallaxComps/MeCard'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Index = ({ data }) => {
  const parallaxRef = useRef(null)
  const theme = useTheme()
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
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0080FF' }} />
        {/* PAGE BACKGROUNDS */}

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
          <MeCard displayPic={data.display_pic} text={data.text_about_me} name={data.my_name} />
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
          offset={1.1}
          speed={-0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src='/static/techIcons/R-logo.png' style={{ width: '5%' }} />
              <img src='/static/techIcons/htmlcssjs.png' style={{ width: '10%' }} />
              <img src='/static/techIcons/node.png' style={{ width: '5%' }} />
              <img src='/static/techIcons/seo.png' style={{ width: '5%' }} />
            </div>

            <img src='/static/techIcons/jquery.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/React_logo_wordmark.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/redux.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/nextjs.png' style={{ width: '10%' }} />
            <div style={{ width: '8%', alignSelf: 'flex-end' }}>
              <img src='/static/techIcons/materialui.png' style={{ width: '100%' }} />
              <Typography align='center' variant='h5' style={{ marginTop: '-25px' }}>Material UI</Typography>
            </div>
            <img src='/static/techIcons/mongodb-logo.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/Expressjs.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/docker.png' style={{ width: '10%' }} />
            <img src='/static/techIcons/postgresql-logo.png' style={{ width: '10%' }} />
            <img src='/static/techIcons/firebase.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/handlebars-logo.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/socket.png' style={{ width: '10%' }} />
            <img src='/static/techIcons/strapi.png' style={{ width: '10%' }} />
            <img src='/static/techIcons/nginx.png' style={{ width: '10%' }} />
            <img src='/static/techIcons/git.png' style={{ width: '15%' }} />
            <img src='/static/techIcons/tdd.png' style={{ width: '8%' }} />
            <img src='/static/techIcons/agile.png' style={{ width: '10%' }} />
            <img src='/static/techIcons/linux.png' style={{ width: '10%' }} />
            <img src='/static/techIcons/vim.png' style={{ width: '5%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.99}
          speed={0.3}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Paper
            elevation={4}
            style={{
              maxWidth: '600px',
              padding: theme.spacing(2),
              margin: theme.spacing(1)
            }}
          >
            <Typography
              align='center'
              variant='h6'
              style={{
                width: '100%'
              }}
            >
              {data.parallax_2_header}
            </Typography>
          </Paper>

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

export async function getServerSideProps () {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/home`)
    return { props: { data } }
  } catch {
    return { props: { data: {} } }
  }
}

export default Index
