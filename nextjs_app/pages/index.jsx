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
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0080FF' }} />
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
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
          offset={1.25}
          speed={-0.1}
        >
          <Grid container style={{ padding: theme.spacing(1) }}>
            <Grid item xs={12} container spacing={2} alignItems='center' justify='center'>
              <Grid item xs={12} lg>
                <Paper style={{ maxWidth: '150px', padding: theme.spacing(1), marginLeft: theme.spacing(4) }}>
                  <Typography align='center'>General:</Typography>
                </Paper>
              </Grid>
              {data.general_logos.map(logo => (
                <Grid key={logo.id} item xs={3} lg>
                  <img
                    src={logo.url}
                    alt={logo.alternativeText}
                    style={{
                      width: '100%',
                      maxWidth: theme.spacing(13)
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container justify='flex-start' spacing={2} item xs={12} sm={6} md={4}>
              <Grid item xs={12}>
                <Paper>
                  <Typography align='center'>Technologies and frameworks</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                  <Typography align='center'>Front-end</Typography>
                </Paper>
                {data.frontend_logos.map(logo => (
                  <img
                    key={logo.id}
                    src={logo.url}
                    alt={logo.alternativeText}
                    style={{
                      width: '100%',
                      maxWidth: theme.spacing(15)
                    }}
                  />
                ))}
              </Grid>
              <Grid item xs={6}>
                <Paper style={{ width: '100%' }}>
                  <Typography align='center'>Back-end</Typography>
                </Paper>
                {data.backend_logos.map(logo => (
                  <img
                    key={logo.id}
                    src={logo.url}
                    alt={logo.alternativeText}
                    style={{
                      width: '100%',
                      maxWidth: theme.spacing(15)
                    }}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.93}
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
