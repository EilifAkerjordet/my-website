import { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const useStyles = makeStyles((theme) => ({
  large: {
    width: `calc(${theme.spacing(10)} + 5vw)`,
    height: `calc(${theme.spacing(10)} + 5vw)`,
    marginLeft: '20%'
  }
}))

const Index = () => {
  const parallaxRef = useRef(null)
  const classes = useStyles()
  const theme = useTheme()
  return (
    <>
      <Grid component='main' container style={{ width: '100%', height: '100%', justifyContent: 'center', backgroundImage: 'url(/static/blue.jpg)', backgroundSize: 'cover' }}>
        <Grid item xs={12} sm={12} md={11} lg={11}>
          <Parallax
            ref={parallaxRef}
            className='MuiPaper-root MuiPaper-rounded MuiPaper-elevation24'
            pages={3}
            style={{
              backgroundColor: '#805E73',
              position: 'static',
              height: '80vh',
              marginTop: '20vh'
            }}
          >
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

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

            <ParallaxLayer
              offset={-0.4}
              speed={-0.3}
              onClick={() => parallaxRef.current.scrollTo(1)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              <Avatar alt='eilif akerjordet' className={classes.large} src='/static/PB.JPG' />
            </ParallaxLayer>

            <ParallaxLayer
              offset={0.1}
              speed={0.1}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div
                className='MuiPaper-root MuiPaper-rounded'
                style={{ maxWidth: '650px', opacity: 0.75, padding: theme.spacing(2), margin: theme.spacing(1) }}
              >
                <Typography style={{ fontSize: '14px' }}>I aspire to bring people closer together with the leverage of technology — delivering well-structured, fast, reliable, and user-centered software products. I am a proud winner of the Facebook Digital Creators Scholarship and IronHack Coding Bootcamp alumni.
My way to empower others is to publish my knowledge in articles, which have been featured in “The Startup” and “Level Up Coding” — two of the largest tech communities on Medium. When I’m not in front of the computer, I enjoy discovering the ancient secrets of Qi Gong and practicing yoga.
                </Typography>
              </div>
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
          </Parallax>
        </Grid>
      </Grid>
    </>
  )
}

export default Index
