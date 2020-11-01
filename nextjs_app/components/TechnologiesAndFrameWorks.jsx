import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import ScrollArrow from './utils/ScrollArrow'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { useTheme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Spring } from 'react-spring'

const LogoPaper = ({ logo }) => {
  const theme = useTheme()
  const breakMd = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Paper
      elevation={4} style={{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        height: `${breakMd ? '50px' : '80px'}`,
        width: `${breakMd ? '160px' : '200px'}`,
        margin: theme.spacing(1)
      }}
    >
      <img src={logo.formats.thumbnail.url} alt={logo.alternativeText} style={{ width: `${breakMd ? '30px' : '50px'}` }} />
      <Divider
        orientation='vertical' flexItem style={{
          marginLeft: breakMd ? theme.spacing(1) : theme.spacing(3),
          marginRight: breakMd ? theme.spacing(1) : theme.spacing(3)
        }}
      />
      <Typography>{logo.caption}</Typography>
    </Paper>
  )
}

const TechnologiesAndFrameWorks = ({ logosOne, logosTwo, textOne, textTwo, scrollRef }) => {
  const theme = useTheme()
  const breakMd = useMediaQuery(theme => theme.breakpoints.down('md'))
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={{
          ...props,
          display: 'flex',
          flexDirection: `${breakMd ? 'column' : 'row'}`,
          marginTop: theme.spacing(7)
        }}
        >
          <div>
            <Typography variant='h5' gutterBottom align='center' style={{ color: 'white' }}>{textOne}</Typography>
            <div style={{ width: '440px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {logosOne.map(logo => {
                return (
                  <LogoPaper key={logo.id} logo={logo} />
                )
              })}
            </div>
          </div>
          {logosTwo && (
            <div>
              <Typography variant='h5' gutterBottom align='center' style={{ color: 'white' }}>{textTwo}</Typography>
              <div style={{ width: '440px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <>
                  {logosTwo.map(logo => (
                    <LogoPaper key={logo.id} logo={logo} />
                  ))}
                </>
              </div>
            </div>
          )}
          <Hidden mdUp>
            <ScrollArrow scrollRef={scrollRef} text='Skillset and Values' absolute n={2.3} />
          </Hidden>
        </div>
      )}
    </Spring>
  )
}

export default TechnologiesAndFrameWorks
